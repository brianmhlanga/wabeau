import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
    let {data: {competition_id}} = await readBody(event)



    try {
        
        let pre = await prisma.competition.findUnique({
            where: {
                id: competition_id
            }
        })
        let status: any
        const chooseNextLevel = async () => {
            if (pre?.competition_level === 'COUNTRY') {
                // Group participants by country and count the number of participants
                const participantsWithHighestVotes = await prisma.participant.groupBy({
                    by: ['country'],
                    where: {
                        competition_id: pre?.id,
                        competition_level: 'COUNTRY',
                    },
                    _count: {
                        id: true,
                    },
                    orderBy: {
                        _count: {
                            id: 'desc',
                        },
                    },
                });
            
                // For each country, find the participant with the highest number of votes
                const highestVotesParticipants = await Promise.all(
                    participantsWithHighestVotes.map(async (participant: any) => {
                        const participantWithVotes = await prisma.participant.findFirst({
                            where: {
                                country: participant.country,
                                competition_id: pre?.id,
                                competition_level: 'COUNTRY',
                            },
                            include: {
                                votes: {
                                    where: {
                                        competition_id: pre?.id,
                                        competition_level: 'COUNTRY',
                                    },
                                },
                            },
                            orderBy: {
                                votes: {
                                    _count: 'desc',
                                },
                            },
                        });
            
                        if (participantWithVotes) {
                            // Update the participant's competition level to 'CONTINENT' and delete their votes
                            await prisma.participant.update({
                                where: {
                                    id: participantWithVotes.id,
                                },
                                data: {
                                    competition_level: 'CONTINENT',
                                    votes: {
                                        deleteMany: {},
                                    },
                                },
                            });
            
                            // Create a new entry in the votingHistory model for the winner
                            await prisma.votingHistory.create({
                                data: {
                                    competition_id: pre?.id,
                                    participant_id: participantWithVotes.id,
                                    votes: participantWithVotes.votes.length,
                                    competition_level: 'COUNTRY',
                                },
                            });
                        }
                        return participantWithVotes;
                    })
                );
            
                status = 'OPEN';
                // Return the competition level after updating participants
                return 'CONTINENT';
            }
            else if (pre?.competition_level === 'CONTINENT') {
                // Group participants by continent and find the participant with the highest number of votes for each continent
                const highestVotedContinentParticipants = await prisma.participant.groupBy({
                    by: ['continent'],
                    where: {
                        competition_id: pre?.id,
                        competition_level: 'CONTINENT',
                    },
                    _count: {
                        id: true,
                    },
                    orderBy: {
                        _count: {
                            id: 'desc',
                        },
                    },
                });
            
                // For each continent, find the participant with the highest number of votes
                await Promise.all(
                    highestVotedContinentParticipants.map(async (participant: any) => {
                        const highestVotedContinentParticipant = await prisma.participant.findFirst({
                            where: {
                                continent: participant.continent,
                                competition_id: pre?.id,
                                competition_level: 'CONTINENT',
                            },
                            include: {
                                votes: {
                                    where: {
                                        competition_id: pre?.id,
                                        competition_level: 'CONTINENT',
                                    },
                                },
                            },
                            orderBy: {
                                votes: {
                                    _count: 'desc',
                                },
                            },
                        });
            
                        if (highestVotedContinentParticipant) {
                            // Update the participant's competition level to 'WORLD' and delete their votes
                            await prisma.participant.update({
                                where: {
                                    id: highestVotedContinentParticipant.id,
                                },
                                data: {
                                    competition_level: 'WORLD',
                                    votes: {
                                        deleteMany: {},
                                    },
                                },
                            });
            
                            // Create a new entry in the votingHistory model for the winner
                            await prisma.votingHistory.create({
                                data: {
                                    competition_id: pre?.id,
                                    participant_id: highestVotedContinentParticipant.id,
                                    votes: highestVotedContinentParticipant.votes.length,
                                    competition_level: 'CONTINENT',
                                },
                            });
                        }
                    })
                );
            
                status = 'OPEN';
                // Return the competition level after updating participants
                return 'WORLD';
            }
            else {
                // Find the participant with the highest number of votes among all participants
                const highestVotedParticipant = await prisma.participant.findFirst({
                    where: {
                        competition_id: pre?.id,
                    },
                    include: {
                        votes: {
                            where: {
                                competition_id: pre?.id,
                            },
                        },
                    },
                    orderBy: {
                        votes: {
                            _count: 'desc',
                        },
                    },
                });
            
                if (highestVotedParticipant) {
                    // Update the participant's competition level to 'CHAMPION' and delete their votes
                    await prisma.participant.update({
                        where: {
                            id: highestVotedParticipant.id,
                        },
                        data: {
                            competition_level: 'CHAMPION',
                            votes: {
                                deleteMany: {},
                            },
                        },
                    });
            
                    // Create a new entry in the votingHistory model for the champion
                    await prisma.votingHistory.create({
                        data: {
                            competition_id: pre?.id,
                            participant_id: highestVotedParticipant.id,
                            votes: highestVotedParticipant.votes.length,
                            competition_level: 'CHAMPION',
                        },
                    });
                }
            
                status = 'CLOSED';
                // Return the competition level after updating participants
                return 'CHAMPION';
            }
        }
        let nextLevel:any = await chooseNextLevel()
        const competitions = await prisma.competition.update({
            where : {
                id: competition_id
            },
            data : {
                competition_level : await nextLevel,
                status: nextLevel === 'CHAMPION' ? 'CLOSED' : 'OPEN'
            }
        });
  
        response['competitions'] =  competitions
        response['success'] = true
  
      } catch (error: any) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
});
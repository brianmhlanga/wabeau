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
            if(pre?.competition_level === 'COUNTRY') {

                const continents :any= ['AFRICA', 'ASIA', 'EUROPE','ANTARCTICA','SOUTH_AMERICA','NORTH_AMERICA','AUSTRALIA']; // Replace with your actual continents

                const participantsWithHighestVotes = await Promise.all(
                continents.map(async (continent:any) => {
                    const participantsWithVotes = await prisma.participant.findMany({
                    where: {
                        continent: continent,
                    },
                    include: {
                        votes: {
                        where: {
                            competition_id: await pre?.id, 
                            competition_level: "COUNTRY" // Replace with the actual competition ID
                        },
                        },
                    },
                    });

                    const highestVotesParticipant = participantsWithVotes.reduce(
                    (prevParticipant, currentParticipant) => {
                        const prevVoteCount = prevParticipant.votes.length || 0;
                        const currentVoteCount = currentParticipant.votes.length || 0;

                        return currentVoteCount > prevVoteCount ? currentParticipant : prevParticipant;
                    },
                    participantsWithVotes[0] || null
                    );
                    let result = highestVotesParticipant ? highestVotesParticipant.id : null
                    if (result) {
                        let resultds = await prisma.participant.update({
                            where: {
                                id: result
                            },
                            data: {
                                competition_level: "CONTINENT",
                                votes: {
                                    deleteMany: {
                                        
                                    }
                                }
                            }
                        })
                    }
                    return result;
                })
                );
                status = "OPEN"
                return "CONTINENT"
            } else if (pre?.competition_level === "CONTINENT") {
                const highestVotedContinentParticipant = await prisma.participant.findFirst({
                    where: {
                      competition_level: 'CONTINENT',
                    },
                    include: {
                      votes: {
                        where: {
                          competition_id: await pre?.id,
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
                  
               if(highestVotedContinentParticipant) {
                let resultds = await prisma.participant.update({
                    where: {
                        id: highestVotedContinentParticipant.id,
                        competition_id: await pre?.id
                    },
                    data: {
                        competition_level: "WORLD",
                        votes: {
                            deleteMany: {
                                
                            }
                        }
                    }
                })
               }
                status = "CLOSED"
                return "WORLD"
            } else {
                return "WORLD"
            }
        }
        let nextLevel:any = await chooseNextLevel()
        const competitions = await prisma.competition.update({
            where : {
                id: competition_id
            },
            data : {
                competition_level : await nextLevel,
                status: nextLevel === 'CONTINENT' ? 'OPEN' : 'CLOSED'
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
import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
   
    try {
        const competitions = await prisma.competition.count()
        const open_competitions = await prisma.competition.count({
            where: {
                status: "OPEN"
            }
        })
        const closed_competitions = await prisma.competition.count({
            where: {
                status: "CLOSED"
            }
        })
        const users = await prisma.user.count({
            
        })
        const participants = await prisma.participant.count({
            
        })
        const votes = await prisma.voterVotes.count({
            
        })
        const likes = await prisma.voterLikes.count({
            
        })
  
        response['competitions'] =  competitions
        response['open_competitions'] =  open_competitions
        response['closed_competitions'] =  closed_competitions
        response['users'] =  users
        response['participants'] =  participants
        response['votes'] =  votes
        response['likes'] =  likes
        response['success'] = true
  
      } catch (error: any) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
});
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

        const african_participants = await prisma.user.count({
            where: {
                continent: "AFRICA"
            }
        })

        const europe_participants = await prisma.user.count({
            where: {
                continent: "EUROPE"
            }

        })
        const asia_participants = await prisma.user.count({
            where: {
                continent: "ASIA"
            }
        })
        const antactica_participants = await prisma.user.count({
            where: {
                continent: "ANTARCTICA"
            }
        })
        const north_america_participants = await prisma.user.count({
            where: {
                continent: "NORTH_AMERICA"
            }
        })
        const south_america_participants = await prisma.user.count({
            where: {
                continent: "SOUTH_AMERICA"
            }
        })
        const oceania_participants = await prisma.user.count({
            where: {
                continent: "OCEANIA"
            }
        })
        const australia_participants = await prisma.user.count({
            where: {
                continent: "AUSTRALIA"
            }
        })
        response['africa'] = african_participants
        response['south_america'] = south_america_participants
        response['north_america'] = north_america_participants
        response['arntactica'] = antactica_participants
        response['europe'] = europe_participants
        response['asia'] = asia_participants
        response['australia'] = australia_participants
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
import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
   
    try {
        const competitions = await prisma.competition.findMany({
          include: {
            participants: {
              include: {
                votes: true,
                likes: true
              }
            },
            periods: true
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
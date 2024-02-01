import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
   
    try {
        const competition = await prisma.competition.findFirst({
            where: {
                status: "OPEN"
            },
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
  
        response['competitions'] =  competition
        response['success'] = true
  
      } catch (error: any) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
});
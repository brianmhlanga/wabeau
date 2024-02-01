import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
    let {id} = await readBody(event)
    
    try {
        const ser = await prisma.competition.findUnique({
            where: {
              id: id
            }
        })
        const single = await prisma.competition.findUnique({
            where: {
              id : id
            },
            include: {
              participants: {
                where: {
                    competition_level: await ser?.competition_level
                },
                include: {
                  votes: true,
                  likes: true
                }
              },
              periods: true
            }
        });
  
        response['single'] =  single
        response['success'] = true
  
      } catch (error: any) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
});
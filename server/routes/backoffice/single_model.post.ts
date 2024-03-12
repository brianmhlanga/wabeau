import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
    let {id} = await readBody(event)
    
    try {
        
        const single = await prisma.participant.findUnique({
            where: {
              id : id
            },
            include: {
                competition: true,
                votes: true,
                likes: true
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
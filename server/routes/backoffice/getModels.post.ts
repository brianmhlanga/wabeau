import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
    let {data: {id,competition_id}} = await readBody(event)
    
    try {
        const model = await prisma.participant.findMany({
            where: {
              competition_id: competition_id
            },
            include: {
              votes: true,
              likes: true
            }
        })
       
  
        response['model'] =  model
        response['success'] = true
  
      } catch (error: any) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
});
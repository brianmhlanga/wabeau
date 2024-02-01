import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
    let {data: {email,competitionId}} = await readBody(event)

    try {
        const participant = await prisma.participant.findFirst({
            where: {
                competition_id: competitionId,
                email: email
            }
        });
  
        response['participant'] =  participant
        response['success'] = true
  
      } catch (error: any) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
});
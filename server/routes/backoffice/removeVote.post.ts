import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
    let {data: {user_id,model_id,competition_id}} = await readBody(event)

    try {
        let competition:any = await prisma.competition.findUnique({
            where: {
                id: competition_id
            }
        })
        let like: any = await prisma.voterVotes.findFirst({
            where: {
                user_id: user_id,
                participant_id: model_id,
                competition_id,
                competition_level: await competition?.competition_level
            }
        })
        const participant = await prisma.voterVotes.delete({
            where : {
                id: await like?.id
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
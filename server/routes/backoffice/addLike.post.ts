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
        const participant = await prisma.voterLikes.create({
            data: {
                user_id: user_id,
                participant_id: model_id,
                competition_id,
                competition_level: await competition?.competition_level
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
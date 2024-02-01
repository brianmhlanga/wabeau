import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
    let {data: {user_id,model_id,competition_id,level}} = await readBody(event)

    try {
        let competition:any = await prisma.voterVotes.findFirst({
            where: {
                competition_id,
                competition_level: level,
                user_id: user_id
            }
        })
        response['competition'] =  competition
        response['success'] = true
  
      } catch (error: any) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
});
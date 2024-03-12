import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
    let {id} = await readBody(event)
    
    try {
        const overall_winner = await prisma.votingHistory.findFirst({
            where: {
              competition_id: id,
              competition_level: "CHAMPION"
            },
            include: {
                participant: {
                    include: {
                        history: true
                    }
                }
            }
        });
  
        response['overall_winner'] =  overall_winner
        response['success'] = true
  
      } catch (error: any) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
});
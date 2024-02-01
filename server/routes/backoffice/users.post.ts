import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
   
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                date_created: 'desc'
              }
        })
        
        response['users'] =  users
        response['success'] = true
  
      } catch (error: any) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
});
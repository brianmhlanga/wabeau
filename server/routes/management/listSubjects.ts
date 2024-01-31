import { prisma } from "~~/prisma/db";



export default defineEventHandler(async (event)=>{
    const response = {};

    try {

        const subjects = await prisma.subject.findMany({

        });
  
        response['subjects'] = subjects
        response['success'] = true
  
      } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
      };
   
    return response;
    
});
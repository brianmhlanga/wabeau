import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event)=>{
    const response: any = {};
    let {data: {first_name,last_name,email,phone_number,gender,country,continent,sponsors,pictures,competition_id}} = await readBody(event)

    try {
        const participant = await prisma.participant.create({
            data: {
                
                first_name,
                last_name,
                email,
                phone_number,
                gender,
                country,
                continent,
                sponsors,
                pictures,
                competition_id,

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
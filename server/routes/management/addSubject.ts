import { prisma } from "~~/prisma/db";


export default defineEventHandler(async (event)=>{

    const { data: {subject,description}} = await readBody(event);
     
    let response = {};


    try {

 
    const createSubject = await prisma.subject.create({
     
     data: {
        name: subject,
        description
        
     }
     
    })
    
 
    response['profile'] = createSubject
    response['success'] = true
 
    } catch(error) {
 
       console.log(error)
       response['success'] = false
       response['message'] = error.toString()
 
   }
 
    return response
 
   
 });
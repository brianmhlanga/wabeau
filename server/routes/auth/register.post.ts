import { prisma } from "~~/prisma/db";
import bcrypt from "bcrypt";
import argon2 from "argon2";

export default defineEventHandler(async (event)=>{
    const response:any = {};
    const { data: {first_name,last_name,gender,age,email,country,password,continent,address,phone_number}} = await readBody(event);
     
    const isAlreadyRegistered = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if(isAlreadyRegistered){
        return {
            message: `User with ${email} already exists.`,
            success: false
        }
    }
   

    const salt = await bcrypt.genSalt();
    try {
        let password2 = await argon2.hash(password);

        if(argon2.needsRehash(password2)) password2 = await argon2.hash(password2);
        const createClient = await prisma.user.create({
            data: {
                first_name,
                last_name,
                age,
                gender,
                continent,
                country,
                address,
                phone_number,
                role: "USER",
                email: email,
                password: password2
            }
        });

        response['registred'] = createClient
        response['success'] = true


  
      } catch (error:any) {

        response['success'] = false
        response['message'] = error.toString()
      };
    
   
    return response;
});
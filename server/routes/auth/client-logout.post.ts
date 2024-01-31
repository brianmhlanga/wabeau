export default defineEventHandler(async (event)=>{
    setCookie(event, "applicant", JSON.stringify({ 
        success: false 
    }));

    setCookie(event, "system_user", JSON.stringify({ 
        success: false 
    }));
    setCookie(event,'permissions', JSON.stringify({ 
        success: false 
    }));

    setCookie(event, "token", JSON.stringify({ 
        success: false 
    }));

    return {
        success: true
    }
});
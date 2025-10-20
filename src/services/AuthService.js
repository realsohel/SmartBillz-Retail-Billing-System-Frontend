import api from '../api';


export const login = async (credentials) =>{

    try{
        const response = await api.post("/auth/user/login",credentials);        
        
        return response;
    }
    catch(error){
        throw error;
    }
}


export const registercompany = async(companyData,userData) =>{
    try{
        const response = await api.post("/company/register",{
            company:companyData,
            adminUser:userData
        })
    }
    catch(error){
        throw error;
    }
}


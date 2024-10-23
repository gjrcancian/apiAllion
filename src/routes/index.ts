import {  Response } from 'express';
import userRouter from './userRoutes';
import authenticateUser from './userRoutes/actions/authenticateUser';
import dashboardRouter from './dashboardRoutes';
import setorRouter from './setorRoutes';

const router =async (data:any, res:Response)=>{
    console.log("chegou router ");
    if(data.action==='login' ||data.action==='verifica_cookie'){
        userRouter(data, res);

    }else{
        const isAuthenticated = await authenticateUser(data, res);
  

        if (isAuthenticated) {
            console.log("autenticou routers");
            
            if (data.api === 'usuarios') {
            console.log(" chamando RouterSetor");

                userRouter(data, res);
            }else if(data.api === 'dashboard'){
                console.log("chamando RouterSetor");

                dashboardRouter(data, res);

            }else if(data.api === 'setor'){
                console.log("chamando RouterSetor ");

                setorRouter(data, res);

            }else{
                // Handle other API actions or return a response for unknown actions
                res.status(400).json({ message: "Unknown API action" });
            }
        } else {
            // Handle authentication failure
            res.status(401).json({ message: "Authentication failed" });
        }
     
    }
    

}
export default router;

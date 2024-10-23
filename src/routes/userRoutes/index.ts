import {  Response } from 'express';
import userLogin from './actions/userLogin';
import verifyUserCredentials from './actions/verifyUserCredentials';

const userRouter =(data:any, res:Response)=>{


  if(data.action ==='login'){
        userLogin(data, res);
  }

  if(data.action ==='addSetor'){
    userLogin(data, res);
}
  if(data.action ==='verifica_cookie'){
    verifyUserCredentials(data, res);
  }


}
export default userRouter;

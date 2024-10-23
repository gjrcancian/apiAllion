import {  Response } from 'express';
import addSetor from './actions/addSetor';
import { buscarSetores } from './actions/buscarSetores';


const setorRouter =async (data:any, res:Response)=>{




  if(data.action ==='addSetor'){
   const retorno:any = await addSetor(JSON.parse(data.data));

    res.status(200).json({ retorno });

}
if(data.action ==='buscarSetores'){
    const retorno:any = await buscarSetores();
    console.log("ads")
    console.log(retorno)
 
     res.status(200).json({ retorno });
 
 }
}
export default setorRouter;

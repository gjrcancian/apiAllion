import UserModel from '../models/userModel'; // Ajuste o caminho conforme necessário
import {  Response } from 'express';



const getUser = async (params:string, data:any, res:Response) => {
    try {
        // Construir o objeto de consulta baseado nos parâmetros fornecidos
        const query: any = {};
console.log(data.id_user);
        if (params ==='id') {
            query._id =data.id_user
        }else if (params==='email') {
            query.email  =data.email;
        }else if (params==='cpf') {
            query.cpf =data.cpf;
        }else if (params==='nome') {
            query.nome =data.nome;
        }

        const user = await UserModel.findOne(query).exec();
       
    
        if(!user){
            
            res.status(400).json({ user: user, message:'Não encontrou usuario', error:'false' });
        }else{
            if (!user._id) {
                throw new Error('User ID is required');
            }
        
        return user;
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Error fetching user');
    }
};

export default getUser;

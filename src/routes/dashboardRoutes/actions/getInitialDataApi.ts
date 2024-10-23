import {  Response } from 'express';
import getDataInitialModuleUser from '../../userRoutes/actions/getDataInitialModuleUser';
import getPermissions from '../../userRoutes/actions/permissions/getPermissions';
import getUser from '../../userRoutes/actions/getUser';
import modulePermissions from '../../userRoutes/actions/permissions/modulePermissions';
import { IPermissions } from '../../userRoutes/types/iPermissions';




const getInitialDataApi = async ( data:any, res:Response) => {
    console.log("chegou getInitialDataApi ");

    try {
        // Construir o objeto de consulta baseado nos parâmetros fornecidos
        

        // Buscar o usuário com base na consulta construída
        const user = await getUser('id', data, res);
       
    
        if(!user){
            
            res.status(400).json({ user: user, message:'Não encontrou usuario', error:'false' });
            
        }else{
            if (!user._id) {
                throw new Error('User ID is required');
            }
        
            const permissions: IPermissions | null = await getPermissions(user._id);

            const userCopy = user.toObject();
      
            // Remove propriedades indesejadas
            delete userCopy.hash_login;
            delete userCopy.senha;
            const dataInitialModuleUser =await getDataInitialModuleUser();

            res.status(200).json({ user: userCopy, message:'sucesso', permissions:permissions, data_module_user:dataInitialModuleUser, error:false });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Error fetching user');
    }
};

export default getInitialDataApi;

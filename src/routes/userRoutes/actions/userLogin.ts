import {  Response } from 'express';
import UserModel from '../models/userModel';
import { verifyHash } from '../../../utils/encrypt';
import { updateUserToken } from '../utilsUser/utilsUser';
const userLogin =async(data:any, res:Response)=>{
  const { email, senha } = data;

  if (!email || !senha) {
      return res.status(400).json({ message: 'Email e senha são necessários' });
  }

  try {
    // Procurar usuário pelo email
    const user = await UserModel.findOne({ email });
if(user){
    if (user.senha === undefined) {
        return res.status(400).json({ message: 'Senha não encontrada para o usuário', error: 'true' });
      }
    const confirma_hash= verifyHash(senha, user.senha);
    if(confirma_hash){

       const hash = await updateUserToken(email);
       res.cookie('allion-encripted-hash-user', String(hash), {
        expires: new Date(Date.now() + 3600000), // 1 hora
      
      // Para HTTPS
        sameSite: 'strict',
    });

    res.cookie('allion-encripted-user', 'true', {
        expires: new Date(Date.now() + 3600000), // 1 hora
  
        sameSite: 'strict',
    });
  
    res.cookie('allion-user', String(user._id), {
        expires: new Date(Date.now() + 3600000), // 1 hora
  
        sameSite: 'strict',
    });


        console.log('confirma_hash: '+confirma_hash);
    }else{
        console.log('nao confirma_hash: '+confirma_hash);
    }
    console.log('confirma_hash: '+confirma_hash);


    return res.status(200).json({ confirma_hash:confirma_hash });







}else{
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Verificar a senha
  
    // Enviar a resposta com o token e os dados do usuário


} catch (error) {
    console.error('Erro durante a autenticação:', error);
    return res.status(500).json({ message: 'Erro no servidor' });
}


}
export default userLogin;

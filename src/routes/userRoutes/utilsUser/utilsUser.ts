import bcrypt from 'bcrypt';
import UserModel from '../models/userModel';

export const updateUserToken = async (email: string) => {
    try {
        // Gerando o token
        const tempo = Date.now().toString(); // Tempo atual em milissegundos
        const tokenString = `${email}(-**-)${tempo}`;
        const tokenHash = await bcrypt.hash(tokenString, 10); // Gera um hash do token

        // Atualizando o usuário no banco de dados
        const user = await UserModel.findOneAndUpdate(
            { email: email },
            { hash_login: tempo },
            { new: true }
        );

        if (user) {
            console.log('Token atualizado com sucesso:', tokenHash);
            return(tokenHash)
        } else {
                console.log('Usuário não encontrado');
        }
    } catch (err) {
        console.error('Erro ao atualizar o token:', err);
    }
};
module.exports = {
    updateUserToken
};

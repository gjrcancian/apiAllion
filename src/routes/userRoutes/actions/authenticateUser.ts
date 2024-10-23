import { verifyHash } from "../../../utils/encrypt";
import UserModel from "../models/userModel";
import {  Response } from 'express';

async function authenticateUser(data: any, res:Response): Promise<boolean> {
    try {
        const {  id_user, encripted_user_hash } = data;

        // Buscar o usuário pelo ID no banco de dados
        const user = await UserModel.findById(id_user);

        if (user) {
            const gera_hash = `${user.email}(-**-)${user.hash_login}`;

            // Verifica se o hash gerado coincide com o hash recebido
            const isHashValid = await verifyHash(gera_hash, encripted_user_hash);

            return isHashValid;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        return false;
    }
}

export default authenticateUser;
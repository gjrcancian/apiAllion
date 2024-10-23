import { generateHash } from '../../../utils/encrypt';
import UserModel from '../models/userModel';


const createUser = async (userData: {
    nome: string;
    telefone?: string;
    email: string;
    cpf?: string;
    senha: string;
    hash_login?: string;
    ramal?: string;
    setor?: string;
    variacao_setor?: string;
    created_by?: string;
    edited_by?: string;
}) => {
    try {
        // Gera um salt e faz o hash da senha
        const hashedPassword = await generateHash(userData.senha);
        
        // Cria um novo objeto de usuário com a senha hasheada
        const newUser = new UserModel({
            ...userData,
            senha: hashedPassword,
        });

        // Salva o usuário no banco de dados
        const savedUser = await newUser.save();

        console.log('Usuário criado com sucesso:', savedUser);
        return savedUser;
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw new Error('Erro ao criar usuário');
    }
};
export default createUser

// Exemplo de uso

import { Response } from 'express';
import UserModel from '../models/userModel';
import { verifyHash } from '../../../utils/encrypt';

const verifyUserCredentials = async (data: any, res: Response) => {
  const { user, cookie } = data;
  console.log("iniciou verifyUserCredentials")

  try {
    console.log(user)
    // Buscar usuário no banco de dados pelo ID
    const userDb = await UserModel.findOne({ _id: user });
    console.log(userDb)

    // Se o usuário não for encontrado, enviar resposta e sair da função
    if (!userDb) {
      return res.json({ message: "Credenciais inválidas", error: "true" });
    }
    // Gerar o hash esperado com os dados do usuário
    const gera_hash = `${userDb.email}(-**-)${userDb.hash_login}`;

    // Verificar se o hash gerado corresponde ao cookie
    const isPasswordValid = await verifyHash(gera_hash, cookie);

    // Retornar a resposta com base na validade da senha
    if (isPasswordValid) {
  console.log("concluiu verifyUserCredentials")

      return res.json({ message: "Credenciais válidas", error: "false" });
    } else {
      return res.json({ message: "Credeasdfsanciais inválidas", error: "true" });
    }

  } catch (error) {
    console.error('Erro ao verificar credenciais:', error);
    return res.status(500).json({ message: 'Erro no servidor', error: "true" });
  }
};

export default verifyUserCredentials;

import bcrypt from 'bcrypt';

const saltRounds = 12;

// Função para gerar um novo hash para uma senha.
export  const generateHash =async (password: string)=>{
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (err) {
        throw new Error(`Erro ao gerar hash: ${err}`);
    }
}



export  const verifyHash =async (password: string, hash: string) =>{
    try {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    } catch (err) {
        throw new Error(`Erro ao verificar a senha: ${err}`);
    }
}


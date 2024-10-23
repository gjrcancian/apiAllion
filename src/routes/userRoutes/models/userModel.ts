import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../types/iUser';
import { REG_EMAIL } from '../../../utils/regex';

// Criando o schema
const UserSchema: Schema<IUser> = new Schema(
    {
   
        nome: { 
            type: String, 
            required: [true, 'O campo nome é obrigatório.'] 
        },
        telefone: { 
            type: String 
        },
        email: { 
            type: String, 
            unique: true,
            required: [true, 'O campo email é obrigatório.'],
            match: [REG_EMAIL, 'Por favor, insira um endereço de email válido.'] // Validação de formato de email
        },
        cpf: { 
            type: String, 
            unique: true,
            required: [true, 'O campo CPF é obrigatório.']
        },
        senha: { 
            type: String, 
            required: [true, 'O campo senha é obrigatório.'],
            minlength: [6, 'A senha deve ter pelo menos 6 caracteres.'] // Validação de comprimento mínimo
        },
        hash_login: { 
            type: String 
        },
        ramal: { 
            type: String 
        },
        setor: { 
            type: String 
        },
        variacao_setor: { 
            type: String 
        },
        created_by: { 
            type: String 
        },
        edited_by: { 
            type: String 
        },
        created_at: { 
            type: Date, 
            
        },
        updated_at: { 
            type: Date, 
           
        }
    },

);

// Criando o modelo
const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;

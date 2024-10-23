import { Document } from 'mongoose';

export interface IUser extends Document {
    _id?: string;
    nome: string;
    telefone?: string;
    email?: string;
    cpf?: string;
    senha?: string;
    hash_login?: string;
    ramal?: string;
    setor?: string;
    variacao_setor?: string;
    created_by?: string;
    edited_by?: string;
    created_at?: Date;
    updated_at?: Date;
}
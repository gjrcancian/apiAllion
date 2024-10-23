import { Document } from 'mongoose';

export interface IVariacaoSetor extends Document {
    setor: string;
    variacao_setor: string;
    created_by?: string;
    edited_by?: string;
    created_at?: Date;
    updated_at?: Date;
}



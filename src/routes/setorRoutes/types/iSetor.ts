import { Document } from 'mongoose';

export interface ISetor extends Document {
    setor?: string;
    created_by?: string;
    edited_by?: string;
    created_at?: Date;
    edited_at?: Date;
}

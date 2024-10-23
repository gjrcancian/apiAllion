import mongoose, { Schema } from 'mongoose';

import { ISetor } from '../types/iSetor';

const SetorSchema: Schema<ISetor> = new Schema(
    { 
        setor: { type: String, unique:[true, 'O Setor já existe'], required: [true,'o campo setor é obrigatorio'] },
        created_by: {type: Schema.Types.ObjectId},
        edited_by: {type: Schema.Types.ObjectId},
        created_at: { type: Date },
        edited_at: { type: Date },
    },

);




// Criando o modelo
const SetorModel = mongoose.model<ISetor>('setores', SetorSchema);

export default SetorModel;

import mongoose, { Document, Schema } from 'mongoose';
import { IPermissions } from '../types/iPermissions';



// Criando o schema
const PermissionSchema: Schema<IPermissions> = new Schema(
    {
        id: { type: String, unique: true }, // Campo id personalizado (opcional)
        user_id: {
            type: String, 
            required: [true,''] 
        },
        crud_user: { type: Number, required: true },

        
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);

// Criando o modelo
const PermissionModel = mongoose.model<IPermissions>('Permissions', PermissionSchema);

export default PermissionModel;

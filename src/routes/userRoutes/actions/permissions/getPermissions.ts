import { IPermissions } from '../../types/iPermissions'; // Ajuste o caminho conforme necessário
import PermissionModel from '../../models/permissionsModels';

const getPermissions = async (userId: string): Promise<IPermissions | null> => {
    try {
        // Converte o userId para um ObjectId, se necessário

        // Busca as permissões do usuário pelo user_id
        const permissions = await PermissionModel.findOne({ user_id: userId }).exec();
        return permissions;
    } catch (error) {
        console.error('Error fetching permissions:', error);
        throw new Error('Error fetching permissions');
    }
};

export default getPermissions;

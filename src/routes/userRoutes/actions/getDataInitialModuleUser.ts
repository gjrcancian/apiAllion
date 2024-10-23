import UserModel from "../models/userModel";
import { IUser } from "../types/iUser";

const getDataInitialModuleUser = async () => {
    

    try {
        // Contar o número total de usuários
        const userCount = await UserModel.countDocuments();

        
        // Buscar os 3 usuários mais recentes
        const recentUsers = await UserModel.find({}, 'id nome created_at created_by')
            .sort({ created_at: -1 })
            .limit(3)
            .exec();
            const data = {
                qtde_users: userCount,
                last_three_users: recentUsers
            };
    
            return data;

    } catch (error) {
        console.error('Error fetching user data:', error);
    }

};

export default getDataInitialModuleUser;
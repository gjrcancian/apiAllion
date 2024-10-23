import mongoose from 'mongoose';
import SetorModel from '../models/setorModel';

export async function buscarSetores() {
    try {
        const setores = await SetorModel.aggregate([
            {
                $lookup: {
                    from: 'users', // Nome da coleção que você quer fazer o join
                    localField: 'created_by', // Campo em SetorModel que contém a chave estrangeira
                    foreignField: '_id', // Campo em UserModel que é a chave primária
                    as: 'user_info' // Nome do campo onde os dados do usuário serão armazenados no resultado
                }
            },
            {
                $unwind: {
                    path: '$user_info',
                    preserveNullAndEmptyArrays: true // Inclui setores sem correspondência
                }
            },
            {
                $lookup: {
                    from: 'users', // Nome da coleção que você quer fazer o join
                    localField: 'edited_by', // Campo em SetorModel que contém a chave estrangeira
                    foreignField: '_id', // Campo em UserModel que é a chave primária
                    as: 'edited_by_info' // Nome do campo onde os dados do usuário serão armazenados no resultado
                }
            },
            {
                $unwind: {
                    path: '$edited_by_info',
                    preserveNullAndEmptyArrays: true // Inclui setores sem correspondência
                }
            },
            {
                $addFields: {
                    created_by: {
                        $concat: [
                            { $ifNull: ['$user_info.nome', ''] } // Usa o nome do usuário, se disponível
                        ]
                    },
                        edited_by: {
                    $concat: [
                        { $ifNull: ['$edited_by_info.nome', ''] } // Usa o nome do usuário que editou, se disponível
                    ]
                }
                }
            
            },
         
        ]);

        return { data: setores, erro: false };
    } catch (error) {
        console.error('Erro ao buscar Setores:', error);
        return { mensagem: 'Erro ao buscar Setores', erro: true };
    }
}

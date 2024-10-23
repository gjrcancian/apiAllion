import { campoNaoPreenchido, campoForData } from '../../../utils/validates';
import { ISetor } from '../types/iSetor';

export const validateSetor = (dataSetor: ISetor) => {
console.log('entrou no validateSetor')

    if (campoNaoPreenchido(dataSetor.setor)) {

        return ({ mensagem: `O campo setor é obrigatório`, erro:true, campo:'setor' });
    }

    if (campoNaoPreenchido(dataSetor.created_by)) {

        return ({ mensagem: `Erro nos dados - 01`, erro:true, campo:'created_by' });

      
    }

    if (campoNaoPreenchido(dataSetor.edited_by)) {
        return ({ mensagem: `Erro nos dados - 02`, erro:true, campo:'edited_by' });
    }

    if (!campoForData(dataSetor.created_at)) {

        return ({ mensagem: `Erro nos dados - 03`, erro:true, campo:'created_at' });

    }

    if (!campoForData(dataSetor.edited_at)) {
        return ({ mensagem: `Erro nos dados - 04`, erro:true, campo:'edited_at' });
    }
    console.log('saiu no validateSetor')

  

    return ({ mensagem: 'sucesso', erro:false, campo:'' });

};

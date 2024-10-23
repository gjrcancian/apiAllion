import SetorModel from '../models/setorModel';
import { validateSetor } from '../validates/validateSetor';


const addSetor = async (setorData: any) => {


const validar_dados = validateSetor(setorData);

if (validar_dados.erro) {
    console.log("deu erro")
    return ( validar_dados);

}else{
    console.log("sem  erro")

    try {
       
        const newSetor = new SetorModel(setorData);
        await newSetor.save();
        return { mensagem: `Setor: ${newSetor.setor}, criado com sucesso!`, error: false };


    } catch (error:any) {

        const campo = Object.keys(error.keyValue)[0];

        if(error.code === 11000){
            return ({ mensagem: `Erro: o ${campo}: ${setorData.setor}, já existe!`, erro:true, campo:campo });
        }

  
        return ({ mensagem: error.message, erro:true, campo:campo });

    }
}

};

export default addSetor;

const axios = require("axios");

const getAddressByCEP = async (cep) => {
   try {
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (res.data.erro) {
        throw new Error("CEP inválido ou não encontrado!");
    }

    return {
        rua: res.data.logradouro,
        bairro: res.data.bairro,
        cidade: res.data.localidade,
        estado: res.data.estado,
        cep: cep
    };

   } catch (error) {
        console.error("Erro ao buscar CEP:", error.message);
        return null;
   } 
};

module.exports = { getAddressByCEP };
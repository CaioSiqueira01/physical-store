const { addStore, getStores } = require("./src/services/storeService");

// Adicionar uma nova loja
addStore({
    nome: "Loja Exemplo",
    rua: "Rua Principal",
    numero: "100",
    bairro: "Centro",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01000-000",
    latitude: -23.55052,
    longitude: -46.633308
}, (err, store) => {
    if (err) {
        console.error("Erro ao adicionar loja:", err.message);
    } else {
        console.log("Loja adicionada:", store);
    }

    // Buscar todas as lojas
    getStores((err, stores) => {
        if (err) {
            console.error("Erro ao buscar lojas:", err.message);
        } else {
            console.log("Lojas cadastradas:", stores);
        }
    });
});

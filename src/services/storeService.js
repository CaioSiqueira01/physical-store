const db = require("../config/database");

// Adicionar uma nova loja
function addStore(store, callback) {
    const query = `
        INSERT INTO stores (nome, rua, numero, bairro, cidade, estado, cep, latitude, longitude)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        store.nome,
        store.rua,
        store.numero,
        store.bairro,
        store.cidade,
        store.estado,
        store.cep,
        store.latitude,
        store.longitude
    ];

    db.run(query, values, function (err) {
        callback(err, { id: this.lastID, ...store });
    });
}

// Buscar todas as lojas
function getStores(callback) {
    db.all("SELECT * FROM stores", [], (err, rows) => {
        callback(err, rows);
    });
}

module.exports = { addStore, getStores };

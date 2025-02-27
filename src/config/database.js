const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Caminho do banco de dados dentro da pasta "data"
const dbPath = path.join(__dirname, "../../data/stores.db");

// Criar uma conexão com o banco de dados
const db = new sqlite3.Database(dbPath, (error) => {
    if (error) {
        console.error("Erro ao conectar ao banco de dados:", error.message);
    } else {
        console.log("Conectado ao banco de lojas!");
    }
});

// Criar a tabela "stores" se ela não existir
db.serialize(() => {
    db.run(`
       CREATE TABLE IF NOT EXISTS stores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            rua TEXT NOT NULL,
            numero TEXT NOT NULL,
            bairro TEXT NOT NULL,
            cidade TEXT NOT NULL,
            estado TEXT NOT NULL,
            cep TEXT NOT NULL,
            latitude REAL,
            longitude REAL
        ) 
    `);
});

module.exports = db;
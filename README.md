# Physical Store

Este projeto consiste no desenvolvimento de uma **Physical Store** para localizar lojas físicas próximas a um CEP informado, utilizando **JavaScript e SQLite**.

## 🚀 Tecnologias Utilizadas

- **Node.js** 
- **Express** 
- **SQLite** 
- **Axios** 
- **Winston**

## 📂 Estrutura do Projeto

```
physical-store/
│── data/                # Banco de dados local 
│── src/
│   ├── config/          # Configuração do banco de dados
│   ├── services/        # Serviços 
│   ├── scripts/         # Scripts 
│   ├── utils/           # Funções auxiliares
│── index.js             # Ponto de entrada da aplicação
│── package.json         # Gerenciador de dependências do Node.js
│── .gitignore           # Arquivos ignorados no repositório
│── README.md            # Documentação do projeto
```

## 📌 Requisitos do Sistema

- O usuário pode cadastrar lojas físicas no sistema.
- O usuário pode buscar lojas em um **raio de 100km** através do CEP.
- As lojas mais próximas devem ser exibidas primeiro.
- Se não houver lojas próximas, o sistema exibirá uma mensagem informativa.
- O sistema gera logs das operações realizadas.

## 📦 Instalação e Execução

### 1️⃣ Clone o repositório
```sh
git clone https://github.com/CaioSiqueira01/physical-store.git
cd physical-store
```

### 2️⃣ Instale as dependências
```sh
npm install
```

### 3️⃣ Execute a aplicação
```sh
node index.js
```

## 🎮 Como Usar

O sistema roda no **terminal**, oferecendo opções interativas:

1️⃣ **Cadastrar uma Loja**
- Insira o nome e o CEP da loja.
- A API ViaCEP preenche automaticamente os detalhes do endereço.

2️⃣ **Buscar Lojas Próximas**
- Insira um CEP e veja as lojas disponíveis num raio de 100km.

3️⃣ **Sair**
- Fecha o programa.

## 📝 Exemplo de Uso
```sh
🏪 Bem-vindo à Physical Store!
1️⃣ Cadastrar uma nova loja
2️⃣ Buscar lojas próximas
3️⃣ Sair
Escolha uma opção: 2
Digite seu CEP: 01001-000
📍 Lojas encontradas:
1. Loja Exemplo - Rua X, Número 123, Cidade Y
2. Loja Teste - Avenida Z, Número 456, Cidade W
```

## 📜 Licença

Desenvolvido com 💻 por Caio Henrique


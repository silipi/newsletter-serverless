# Serveless Functions

## Testando Next.js, Vercel e MongoDB

Este projeto foi criado com a intenção de aprimorar meus conhecimentos com o [Next.js](https://nextjs.org/), conhecer a plataforma da [Vercel](https://vercel.com/) e aprender sobre o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

Com isto, o projeto consiste em um simples cadastro de e-mail no formato `{string}@{string}.{string}` no banco de dados orientado à documentos do MongoDB. Nada estará sendo feito inicialmente com esse e-mail, além de o armazenar e realizar a validação no formato acima.

### Executando o projeto

Utilizado a Vercel CLI para colocar o projeto para rodar. Porém, também pode ser feito utilizando um `npm install` e `npm run dev`.

### Váriaveis de ambiente

**MONGODB_URI** = `mongodb+srv://<user>:<password>@url_fornecida_pelo_mongodbAtlas/<dbname>?retryWrites=true&w=majority`

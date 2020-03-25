const express = require('express');
const cors = require('cors');
const routes = require('./routes') // importando do arquivo routes.js

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
 * Métodos HTTP:
 * GET: Buscar/listar informação no Backend
 * POST: Criar informação no Backend
 * PUT: Alterar informação no Backend
 * DELETE: Eliminar informação no Backend
*/

/*
 * Tipos de Parâmetros:
 *
 * Query: parâmetros nomeados eviados na rota, após a "?" e concatenando com o "&"
 * Route: Utilizados para identificar recursos
 * Body: Corpo da requisição - usado para criar ou alterar recursos
*/

/**
 * SQL: SQLite (utilizado pelo curso)
 * Não SQL: MongoDB, CouchDB, Firebase, etc..
 */

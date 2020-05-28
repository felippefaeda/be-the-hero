const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

// Converter o JSON em Objeto
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?"" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da Requisição utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */

 /**
  * Driver: select * from users
  * Query Builder: table('users').select('*').where()
  */


app.listen(3333);
const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');

const app = express();

const routes = require('./routes');

app.use(cors());

app.use(express.json());
app.use(routes);
app.use(errors());

/**criando rota / recurso */

/**Métodos http:
 *  
 * GET: buscar/listar um info no backend
 * POST: criar uma info no backend
 * PUT: alterar uma info no backend
 * DELETE: deletar uma info no backend
 */

 /** Tipos de paramentros:
  * 
  * Query Params: paramentros nomeados enviados na rota pós "?" (filtros paginacao)
  * Route Params: paramentros utilizados para identificar recursos
  * Request Body: corpo da requisicao para criar ou alterar recursos
  * 
  * 
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB
   */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()  KNEX
   */


module.exports = app;


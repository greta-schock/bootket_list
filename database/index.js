const POSTGRES_CONNECTION = require('./config.js');
const { Pool } = require('pg');
const pool = new Pool (POSTGRES_CONNECTION);

pool.query('SELECT NOW()')
  .then(res => console.log('Connected to Postgres at ', res.rows[0].now))
  .catch(e => console.error(e.stack))

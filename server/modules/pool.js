const pg = require('pg');
const Pool = pg.Pool;


const config = {
  database: 'tasks',
  host: 'Localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 5000 
} // end config


const pool = new Pool(config);

module.exports = pool;
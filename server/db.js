const Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres",
    password : "12106108",
    hose : "localhost",
    port : 5432,
    database : "test"
});

module.exports = pool;



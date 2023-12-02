const { Pool } = require('pg');

const pool = new Pool({
    host: 'postgres',
    user: 'abc',
    password: 'abc_PASSWORD',
    database: 'abcDatabase',
    port: 5432,
});

module.exports = pool;

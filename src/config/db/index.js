const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://green_summer_user:1ftRAE0BG51IW3bTOBPfE5EcraaKfmx5@dpg-cl3016auuipc73846i10-a.oregon-postgres.render.com/green_summer'
});

module.exports = pool;

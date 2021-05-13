const sql = require('mssql');
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    port: 1433,
    database: 'main_db',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: false,
    }
}

let query = async query => {
    let pool = await sql.connect(dbConfig)
    return pool.request().query(query);
}

let request = async () => {
    let pool = await sql.connect(dbConfig)
    return pool.request()
}

module.exports = {
    query,
    request
}
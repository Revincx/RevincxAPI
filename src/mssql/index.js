const sql = require('mssql');
const { dbConfig } = require('@src/config.js')

let query = async query => {
    let pool = await sql.connect(dbConfig)
    return pool.request().query(query);
}

module.exports = {
    query
}
const sqlite = require('better-sqlite3')

const mainDB = sqlite(__dirname + '/databases/main.db')

module.exports = mainDB
const express = require('express')
// let { getRandPic } = require('@src/sqlite3/picture.js')
let { getRandPic } = require('@src/mssql/picture.js')

let randPicRouter = express.Router()

randPicRouter.get('/',(async (req, res) => {
    let picUrl = await getRandPic()
    res.redirect(picUrl)
}))

module.exports = randPicRouter
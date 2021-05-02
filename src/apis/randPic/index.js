const express = require('express')
let { getRandPic } = require('@src/sql/picture.js')

let randPicRouter = express.Router()

randPicRouter.get('/',((req,res) => {
    let picUrl = getRandPic().url
    res.redirect(picUrl)
}))

module.exports = randPicRouter
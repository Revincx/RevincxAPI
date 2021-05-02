const express = require('express')
const app = express()
const randPicRouter = require('../apis/randPic')
const qrCodeRouter = require('../apis/qrcode')

let port = process.env.PORT || 8081

const server = app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}/`)
})

app.use('/randPic',randPicRouter)
app.use('/qrcode',qrCodeRouter)

module.exports = app
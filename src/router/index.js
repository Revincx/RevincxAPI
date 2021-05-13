const express = require('express')
const app = express()
const randPicRouter = require('@src/apis/randPic')
const qrCodeRouter = require('@src/apis/qrcode')
const renexUrlRouter = require('@src/apis/renexUrl')
const getUrlRouter = require('@src/apis/renexUrl/get.js')

let port = process.env.PORT || 8081

app.use(express.static('./public/'))


app.use('/',getUrlRouter)
app.use('/randPic',randPicRouter)
app.use('/qrcode',qrCodeRouter)
app.use('/renexUrl',renexUrlRouter)

app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}/`)
})

module.exports = app
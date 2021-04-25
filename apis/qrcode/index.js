const express = require('express')
const qrImage = require('qr-image')

let qrCodeRouter = express.Router()

qrCodeRouter.get('/',((req, res) => {
    let url = req.query.url
    let size = Number.parseInt(req.query.size)
    let margin = Number.parseInt(req.query.margin)
    if (url === undefined){
        res.setHeader('Content-type', 'text/plain')
        res.status(400)
        res.send("请求参数有误，请检查url参数是否正确！")
        return 1
    }
    let code = qrImage.image(url,{
        type: 'png',
        size: size || 5,
        margin: margin || 4,
        parse_url: true
    })
    res.setHeader('Content-type', 'image/png')
    res.status(200)
    code.pipe(res)
    // res.send()
}))

module.exports = qrCodeRouter
const express = require('express')
const fs = require('fs')

let randPicRouter = express.Router()
let pictures = fs.readFileSync(__dirname + '/images.txt').toString().split('\n')
// console.log(pictures)

randPicRouter.get('/',((req,res) => {
    let picNum = pictures.length
    let index = Math.floor(Math.random() * picNum)
    let picUrl = pictures[index]
    res.status(302)
    res.set({
        Location: picUrl
    })
    res.send()
}))

module.exports = randPicRouter
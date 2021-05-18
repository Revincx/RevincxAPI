const express = require('express')
const { string62to10 } = require('./hash.js')
const { getUrl } = require('@src/mssql/renexUrl.js')

const getUrlRouter = express.Router()

getUrlRouter.get('/:hashStr',async (req,res,next) => {
    if(req.hostname !== 'renex.me')
    {
        next()
        return
    }
    let hashStr = req.params.hashStr
    let hash = string62to10(hashStr)
    console.log("Request hash: " + hash);
    let result = await getUrl(hash)
    if(result.status === 'success')
    {
        res.redirect(result.url)
    }
    else
    {
        res.status(400)
        res.send("Get url failed")
    }
})

module.exports = getUrlRouter
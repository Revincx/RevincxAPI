const express = require('express')
const { string62to10 } = require('./hash.js')
const { getUrl } = require('@src/mssql/renexUrl.js')

const getUrlRouter = express.Router()

getUrlRouter.get('/:hashStr',async (req,res,next) => {
    console.log(req.hostname);
    if(req.hostname !== 'renex.me')
    {
        next()
        return
    }
    let hashStr = req.params.hashStr
    let hash = string62to10(hashStr)
    let url = await getUrl(hash).url
    if(url !== null)
    {
        res.redirect(url)
    }
    else
    {
        res.status(503)
        res.send("Get url failed")
    }
})

module.exports = getUrlRouter
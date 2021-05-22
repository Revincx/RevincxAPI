const express = require('express')
const bodyParser = require('body-parser')
const { text2Hash,string10to62 } = require('./hash.js')
const { addNewUrl,getUrl } = require('@src/mssql/renexUrl.js')

let renexUrlRouter = new express.Router();

renexUrlRouter.use(bodyParser.json())

renexUrlRouter.post('/',(async (req,res) => {
    let reqBody = req.body
    let resBody = {}
    if(reqBody.action === "new" && reqBody.url != null)
    {
        let hash = text2Hash(reqBody.url)
        let sqlRequest = await addNewUrl(hash,reqBody.url,req.ip)
        res.status(200)
        if(sqlRequest.rowsAffected != null && sqlRequest.rowsAffected > 0)
        {
            resBody.code = 200
            resBody.message = "Succeed"
            resBody.urlPath = string10to62(hash)
        }
        else
        {
            resBody.code = 500
            resBody.urlPath = string10to62(hash)
            resBody.message = "Failed but returned path anyway"
        }
    }
    else {
        resBody.code = 503
        resBody.message = "请求参数有误"
    }

    res.send(resBody);
}))

module.exports = renexUrlRouter
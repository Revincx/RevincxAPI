// require('module-alias/register')
const { request } = require('./index.js')
// const sql = require('mssql')

let addNewUrl = async (hash,url) => {
    try {
        let req= await request()
        return await req
            .query(`INSERT INTO [model].[renexUrl] (hash,url)
                    VALUES ( ${hash}, '${url}' )`)
    }
    catch (err)
    {
        console.log(err)
        return 'SQL INSERT ERROR'
    }
}

let getUrl = async hash => {
    try {
        let req = await request()
        let result = await req
            .query(`SELECT url FROM [model].[renexUrl] WHERE hash = ${hash}`)
        return result.recordset
    }
    catch (err)
    {
        console.log(err)
        return 'SQL SELECT ERROR'
    }
}

// (async () => {
//     let res = await addNewUrl(2, "https://192.168.98.1")
//     console.log(res);
// })()


module.exports = {
    addNewUrl,
    getUrl
}
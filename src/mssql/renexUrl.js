const { request } = require('./index.js')

let addNewUrl = async (hash,url) => {
    try {
        let req = await request()
        let result = await req
            .query(`INSERT INTO [model].[renexUrl] (hash,url)
                    VALUES ( ${hash}, '${url}' )`)
        return {
            status: 'success',
            url: result.recordset[0].url
        }
    }
    catch (err)
    {
        console.log(err)
        return {
            status: 'error'
        }
    }
}

let getUrl = async hash => {
    try {
        let req = await request()
        let result = await req
            .query(`SELECT url FROM [model].[renexUrl] WHERE hash = ${hash}`)
        console.log(result);
        return result.recordset[0].url
    }
    catch (err)
    {
        console.log(err)
        return 'SQL SELECT ERROR'
    }
}

// (async () => {
//     let res = await getUrl(608567)
//     console.log(res);
// })()


module.exports = {
    addNewUrl,
    getUrl
}
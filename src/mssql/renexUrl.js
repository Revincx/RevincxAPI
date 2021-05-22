const { request } = require('./index.js')

let addNewUrl = async (hash,url,ip) => {
    try {
        let req = await request()
        let result = await req
            .query(`INSERT INTO [model].[renexUrl] (hash,url)
                    VALUES ( ${hash}, '${url}','${ip}',getDate() + '08:00' )`)
        return {
            status: 'success',
            rowsAffected: result.rowsAffected
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
        return {
            status: "success",
            url: result.recordset[0].url
        }
    }
    catch (err)
    {
        console.log(err)
        return {
            status: "failed"
        }
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
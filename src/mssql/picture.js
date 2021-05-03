const { query } = require('./index.js')

let getRandPic = async () => {
    try {
        let result = await query('select top 1 url from dbo.randPic order by newid()')
            // .input('input_parameter', sql.Int, 1)
        return result.recordset[0].url
    }
    catch (err)
    {
        console.log(err);
        return 'ERROR'
    }
}

module.exports = {
    getRandPic
}
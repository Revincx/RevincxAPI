const mainDB = require('@src/sql')

let getPicState = mainDB.prepare('select url from randPic where id = ?')
let getRandPicState = mainDB.prepare('select url from randPic order by random() limit 1')

let getPicById = id => {
    return getPicState.get(id)
}

let getRandPic = () => {
    return getRandPicState.get()
}


module.exports = {
    getPicById,
    getRandPic
}

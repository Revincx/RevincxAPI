const axios = require('axios')
const fs = require('fs')

for(let i =0;i < 426;i++)
{
    axios.get('https://api.xhofe.top/img/api/',
        {
            params: {
                type: 'json',
                id: i
            }
        }
    ).then(response => {
        // let obj = JSON.parse(response.data.toString())
        // console.log(obj.url)
        console.log(`${i}: ${response.data.url}`)
        fs.writeFile(__dirname + '/images.txt',response.data.url + '\n',{
            flag: 'a+'
        },err => { })
    })
}
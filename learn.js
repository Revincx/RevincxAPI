const axios = require('axios')

// axios.defaults.baseURL = 'https://httpbin.org'
// axios({
//     url: '/get',
//     method: 'get',
//     params: {
//         a: '1',
//         b: 'jssd'
//     }
// })
// .then(res => {
//     console.log(res);
// })

const axiosA = axios.create({
    baseURL: 'https://httpbin.org/',
    timeout: '10000'
})

const interceptor = axiosA.interceptors.request.use(res => {

}, error => {

})

axiosA.interceptors.request.eject(interceptor)

axiosA.get('/get',{
    params: {
        a: 1,
        b: 'hhs'
    }
})
.then(res => {
    console.log(res.data);
})
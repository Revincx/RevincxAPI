const app = require('./router')

app.get('*', function(req,res,next) {
    console.log(req.port);
    if(req.headers['x-forwarded-proto'] != 'https' && process.env.NODE_ENV === 'production')
        res.redirect('https://'+req.hostname+req.url)
    else
        next()
});
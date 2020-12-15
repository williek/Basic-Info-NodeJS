const os = require('os');
const app = require('express')();
const port = 8080;

app.use('*',(req,res)=>{
    res.json({
        'method': req.method,
        'url': req.headers.host + req.baseUrl,
        'browser': req.headers['user-agent'],
        'user': os.userInfo().username,
        'os':{
            'hostname': os.hostname(),
            'type': os.type(),
            'architecture': os.arch(),
            'platform': os.platform(),
            'release': os.release(),
            'detailed': `${os.hostname()} ${os.type()} ${os.arch()} ${os.platform()}-${os.release()}`,
        }
    });
});


app.listen(port);
console.log(`Running application on http://localhost:${port}`);
    const http = require('http');

    const server=http.createServer((req,res)=>{

    console.log('request for'+req.url+'by method'+req.method)

    res.statusCode=200;

    res.setHeader('content-type','text/html');

    res.end('<html><body><h1> conection success....</h1></body> </html>');

    });

    
    server.listen(3000,function(){});
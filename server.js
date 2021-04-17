const http=require('http');
const path=require('path');
const fs=require('fs');

const server =http.createServer((req,res)=>{
    // if (req.url==='/') {
    //     fs.readFile(path.join(__dirname, 'src', 'test', 'Home.html'),
    //     (err, content)=>{
    //         if (err) throw err;
    //         res.writeHead(200, {'content-Type':'text/html'});
    //         res.end(content);
    //     })

    // }
    let filePath=path.join(__dirname, 'public', req.url==='/'? 'index.html':req.url);

    let extname=path.extname(filePath);

    let contentType='text/html';

    // eslint-disable-next-line default-case
    switch (extname) {
        case '.js':contentType='text/javascript';  
            break;
             case '.css':contentType='text/css';  
            break;
             case '.jsx':contentType='text/jsx';  
            break;
             case '.json':contentType='application/json';  
            break;
             case '.png':contentType='image/png';  
            break;
             case '.jpg':contentType='image/jpg';  
            break;
            
    }
    //read file
    fs.readFile(filePath, (err, content)=>{
        if (err) {
            // eslint-disable-next-line eqeqeq
            if(err.code=='ENOENT'){
                // Page not found
                fs.readFile(path.join(__dirname, 'src' ,'test', 'error.html'),
                (err, content)=>{
                    res.writeHead(200,{'Content-Type':contentType});
                    res.end(content,'utf8')
                })
            }else{
                // some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else{
            //success
            res.writeHead(200, {'Content-Type':contentType});
            res.end(content, 'utf8');
        }
    });
});

const PORT =process.env.PORT || 5000;

server.listen(PORT,()=>console.log(`Server running on ${PORT}`));
const http = require("http");
const fs = require("fs");

const app = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
  
    if(url==='/'){
        let readingData='';
        fs.readFile('message.txt',(err,data)=>{
            if(err){
                return console.error(err);
            }
            readingData=data.toString();
            res.write("<html>");
            res.write("<head><title>Enter Message</title></head>");
            res.write(
              `<body><h1>${readingData}</h1><form action="/message" method="POST"><input type="text" name="message"><br/><button>Submit</button></form></body></html>`
            );
            res.end();
        });
      
        
    }
    if(url==='/message' && method==='POST'){
        const body =[];
        req.on('data',(chunk=>{
            body.push(chunk);
        }));
        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile("message.txt",message,(err)=>{
                res.statusCode=302;
                res.setHeader("Location","/");
                return res.end();
            });
        });
    }
    
});
app.listen(8000);
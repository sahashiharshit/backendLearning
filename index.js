import http from "http";

const app = http.createServer((req, res) => {
    const url = req.url;
    if(url ==='/home'){
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>Home</title></head><body><h1>Welcome Home</h1></body></html>')
        res.end();
    }else if(url==='/about'){
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>about</title></head><body><h1>Welcome to About Us page</h1></body></html>')
        res.end();
    }else if(url ==='/node'){
        res.setHeader('Content-type','text/html');
        res.write('<html><head><title>Node</title></head><body><h1>Welcome to my Node Js project</h1></body></html>')
        res.end();
    }
});
app.listen(4000);

const http =  require("http")
// importing url module
const url = require("url")

// Using Http Node js can create own server 
// createServer take a function , which has two arguments such as Request and response 
// https.createServer() method include request and response which is supply by Node js
const server = http.createServer((req,res)=>{
    console.log(req.url); //

    if(req.url == "/"){
        res.end("Home page");
    }
    else if(req.url == "/about"){
        res.end("About Page")
    }
    else{

        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1>404 page</h1>")
    }
    

})

// server has listen() method which is use for listing the request 
// it takes two parameters such as listen(port_number, local_host_address,function())
server.listen(8000,"127.0.0.1", ()=>{
    console.log("Listing to the port Number : 8000");
});
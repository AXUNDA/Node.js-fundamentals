import { IncomingMessage,ServerResponse,Server } from "http"
import http from "http"

const hostname:string = "127.0.0.1"
const port:number = 5000

const server = http.createServer((req:IncomingMessage,res:ServerResponse) =>{
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end("<h1>hello world </h1>")
})

server.listen(port,hostname,()=>{
      console.log("server is active")
})
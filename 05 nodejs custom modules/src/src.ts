import { IncomingMessage,ServerResponse,Server } from "http"
import http from "http"
import { stringUtil } from "./util/stringUtil"

const hostname:string = "127.0.0.1"
const port:number = 5000

const server = http.createServer((req:IncomingMessage,res:ServerResponse) =>{
      let customerName:string = "ui brains"
      let length:number = stringUtil.printLength(customerName)
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(`<p>${length}</p>`)
})

server.listen(port,hostname,()=>{
      console.log("server is active")
})
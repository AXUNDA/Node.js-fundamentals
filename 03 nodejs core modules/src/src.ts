import { IncomingMessage,ServerResponse,Server } from "http"
import os from "os"
import http from "http"

const hostname:string = "127.0.0.1"
const port:number = 5000

const server:Server = http.createServer((req:IncomingMessage,res:ServerResponse) =>{
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      
      let osData:object = {
            totalMemory:os.totalmem(),
            freeMemory:os.freemem(),
            homeDir:os.homedir(),
            computerName:os.hostname()

      }
      res.end(`<pre>${JSON.stringify(osData)}</pre>`)
})

server.listen(port,hostname,()=>{
      console.log("server is active")
})
import { IncomingMessage,ServerResponse,Server } from "http"
import fs from "fs"
import http from "http"
import path from "path"

const hostname:string = "127.0.0.1"
const port:number = 5000

const server:Server = http.createServer(async (req:IncomingMessage,res:ServerResponse) =>{
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      const data :string  = await fs.readFileSync(path.join(__dirname,"..","data","client_secret_495650495504-2m155kgh70r3jn9icq2bhe1su86bepqo.apps.googleusercontent.com.json"),"utf-8")
      console.log(typeof(data))
      // const written = await fs.writeFileSync(path.join(__dirname,"..","data","data.txt"),"utf-8")
      // console.log(written)

      res.end(`<pre>${data}</pre>`)
      
  
})


server.listen(port,hostname,()=>{
      console.log("server is active")
})
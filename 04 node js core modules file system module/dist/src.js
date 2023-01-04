"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const hostname = "127.0.0.1";
const port = 5000;
const server = http_1.default.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const data = await fs_1.default.readFileSync(path_1.default.join(__dirname, "..", "data", "client_secret_495650495504-2m155kgh70r3jn9icq2bhe1su86bepqo.apps.googleusercontent.com.json"), "utf-8");
    console.log(typeof (data));
    // const written = await fs.writeFileSync(path.join(__dirname,"..","data","data.txt"),"utf-8")
    // console.log(written)
    res.end(`<pre>${data}</pre>`);
});
server.listen(port, hostname, () => {
    console.log("server is active");
});

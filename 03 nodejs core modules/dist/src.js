"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const http_1 = __importDefault(require("http"));
const hostname = "127.0.0.1";
const port = 5000;
const server = http_1.default.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let osData = {
        totalMemory: os_1.default.totalmem(),
        freeMemory: os_1.default.freemem(),
        homeDir: os_1.default.homedir(),
        computerName: os_1.default.hostname()
    };
    res.end(`<pre>${JSON.stringify(osData)}</pre>`);
});
server.listen(port, hostname, () => {
    console.log("server is active");
});

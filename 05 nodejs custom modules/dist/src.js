"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const stringUtil_1 = require("./util/stringUtil");
const hostname = "127.0.0.1";
const port = 5000;
const server = http_1.default.createServer((req, res) => {
    let customerName = "ui brains";
    let length = stringUtil_1.stringUtil.printLength(customerName);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>${length}</p>`);
});
server.listen(port, hostname, () => {
    console.log("server is active");
});

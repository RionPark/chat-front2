"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const server = (0, express_1.default)();
const prefix = path_1.default.join(__dirname, '..');
const suffix = '.html';
server.get('/html/*splate', (req, res) => {
    res.sendFile(prefix + req.path + suffix);
});
server.get('/', (req, res) => {
    res.sendFile(prefix + '/html/index.html');
});
server.listen(80, () => {
    console.log('80포트로 서버 시작');
});

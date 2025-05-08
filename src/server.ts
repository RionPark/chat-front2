import express from 'express';
import path from 'path';

const server = express();
const prefix = path.join(__dirname,'..');
const suffix = '.html';

server.get('/html/*splate',(req,res)=>{
    res.sendFile(prefix + req.path + suffix);
})
server.get('/', (req,res)=>{
    res.sendFile(prefix + '/html/index.html');
})
server.listen(80,()=>{
    console.log('80포트로 서버 시작');
});
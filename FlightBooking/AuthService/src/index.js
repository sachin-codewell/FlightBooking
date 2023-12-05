const express = require('express');

const {ServerConfig} = require('./config/index')
const app = express();

app.listen(ServerConfig.PORT,()=>{
    console.log(`server is running fine on port ${ServerConfig.PORT}`);
})
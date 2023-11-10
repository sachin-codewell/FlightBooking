const express = require('express');


const {City} = require('./models/index')
const { ServerConfig,LoggerConfig:logger } = require('./config/index');

const app = express();

app.listen(ServerConfig.PORT,()=>{
    logger.log('info',`server is runnign fine on port ${ServerConfig.PORT}`)
})
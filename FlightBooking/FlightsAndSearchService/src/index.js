const express = require('express');

const appRoutes = require('./routes/index')

const {City,Airport} = require('./models/index')
const { ServerConfig,LoggerConfig:logger } = require('./config/index');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',appRoutes)

app.listen(ServerConfig.PORT,async()=>{
    logger.log('info',`server is runnign fine on port ${ServerConfig.PORT}`)
    const airports = await Airport.findAll({
        attributes:['name']
    });
    console.log(airports);
})
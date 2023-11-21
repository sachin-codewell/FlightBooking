const express = require('express');

const appRoutes = require('./routes/index')

const {City,Airplane} = require('./models/index')
const { ServerConfig,LoggerConfig:logger } = require('./config/index');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api',appRoutes)

app.listen(ServerConfig.PORT,async()=>{
    logger.log('info',`server is runnign fine on port ${ServerConfig.PORT}`)
    // await Airplane.create({
    //     id:'efvfereg',
    //     modelNumber:"fvefbebeb",
    //     capacity:300
    // })
})
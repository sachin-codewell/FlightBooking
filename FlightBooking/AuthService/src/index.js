const express = require('express');

const {ServerConfig} = require('./config/index')
const appRoutes = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',appRoutes);
app.listen(ServerConfig.PORT,()=>{
    console.log(`server is running fine on port ${ServerConfig.PORT}`);
})
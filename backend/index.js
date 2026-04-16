require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken')
const authDataBaseConnection = require('./Config/Auth.Config');
const router = require('./Router/auth.Router');
const cors = require('cors');
const server = express()

//=======middel wares======
server.use(express.json())
server.use(express.urlencoded())
server.use(cors({
    origin:"*",
}))
//=====Routers=======
server.use('/student', router)
const port = process.env.PORT
server.listen(port, async() => {
    try {
        authDataBaseConnection()
    console.log(`server is live on port ${port}`);
        
    } catch (error) {
        process.exit(true)
    }
})
'use strict';

require('dotenv').config();
const express = require('express');
const server = express();

const axios = require('axios');

const cors = require('cors');
server.use(cors());

const data = require('./data.json');

const PORT = process.env.PORT;

// http://localhost:3010/getFlowers
// https://flowers-api-13.herokuapp.com/getFlowers
server.get('/getFruit',getFruitHandler);
server.get('*',notFoundHandler);

function getFruitHandler(req,res)
{
    res.send(data);
}

function notFoundHandler(req,res)
{
    res.send("Error : Page not found!");
}

server.listen(PORT,()=>{
    console.log(`I am Listening on port: ${PORT}`);
})
const express = require('express');
const { model } = require('mongoose');
const port = 80;
const app = express()
require('./db/conn');
const db = require('./db/model/studentModel')
const router = require('./students');


app.use(express.json());

app.use(router);


app.listen(port,()=>{
    console.log(`Connection Succesfull on ${port} port`)
})

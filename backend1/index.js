const connectToMongo=require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express()
const port = 5000;


app.use(cors())
app.use(express.json())



app.listen(port, () => {
  console.log(`Sunshine Express backend listening on port ${port}`)
})
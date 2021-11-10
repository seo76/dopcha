const express = require('express');
const app = express();
const api = require('./index.js');


app.use('/api',api);

app.listen(5000,()=>console.log('Node.js Server is running on port 5000....'))




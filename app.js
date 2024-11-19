const express= require('express');
const cors = require('cors');

const app= express();
app.use(express.json());

app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));

//ROUTES
const employees= require('./routes/employee');

app.use('/api/v1', employees);


module.exports=app;
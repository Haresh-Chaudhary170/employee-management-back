const express= require('express');
const cors = require('cors');
const dotenv=require('dotenv');
const connectDaatabase= require('./config/database')


const app= express();
app.use(express.json());

app.use(cors());
app.use(cors({ origin: 'https://employee-management-front.vercel.app' }));

dotenv.config({path:'./.env'});

//connecting to database
connectDaatabase();
const server= app.listen(process.env.PORT, ()=>{
    console.log(`Server Started on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

//ROUTES
const employees= require('./routes/employee');

app.use('/api/v1', employees);


process.on('unhandledRejection', err=>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to unhandled Promise rejections.');
    server.close(()=>{
        process.exit(1);
    })
})

const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const Cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Port assigned by production server or 5000 by default 
const PORT = process.env.PORT || 5000;

//To read json files
app.use(express.json());
//to read coookies
app.use(cookieParser());
// to access backend
app.use(cors());


// To connect with env file where we have url to connect with mongoDB
dotenv.config();

//listening to port 
app.listen(PORT , ()=>{
    console.log(`server started on port : ${PORT}`)
})

// DB Config
const db = process.env.MDB_connect;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



//setup routes for middlewares
app.use("/Store", require('./routes/Store'));
app.use("/Brand", require('./routes/Brand'));

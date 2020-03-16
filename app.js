const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config()

//Connect to Db
mongoose.connect(
process.env.DB_CONNECT,
{ useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log('connected to Db'))

// Router
app.get('/user', (req, res) => {
    res.json({ message: 'User' });
})
// port
app.listen(5000,() => console.log('Server Up and Running'));
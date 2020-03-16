const express = require('express');
const dotenv = require('dotenv');

const app = express();

// port
app.listen(5000,() => console.log('Server Up and Running'));
const express = require('express');
const { getConnection } = require('./bd/db-connect-mongo');
const cors = require('cors');
require('dotenv').config();

const app = express();
const host = '0.0.0.0';
const port = process.env.PORT;


app.use(cors());

getConnection();


app.use(express.json());

app.use('/usuario', require('./router/usuario'));
app.use('/auth', require('./router/auth'));

app.listen(port, host, () => {
    console.log('server started');
});
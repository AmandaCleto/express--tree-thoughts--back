require('dotenv').config();

const express = require('express');
const http = require('http');
const process = require('process');
const router = require('../routes/index.routes');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(router);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is ready 🚀 :${PORT}`);
});
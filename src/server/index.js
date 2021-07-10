require('dotenv').config();

const express = require('express');
const http = require('http');
const process = require('process');
const path = require('path');
const cors = require('cors');

const router = require('../routes');

const app = express();
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, '..', '..', 'public');

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(router);
app.use('/static', express.static(publicPath));

const PORT = process.env.PORT;

server.listen(PORT, async () => {
    console.log(`Server is ready 🚀 :${PORT}`);
});
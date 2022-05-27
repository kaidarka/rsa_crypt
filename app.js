const express = require('express');
const config = require('config');
// const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/decode', require('./routes/decode.routes'));

const PORT = config.get('port') || 5000;

app.listen(PORT, () => console.log(`Port: ${PORT}`));

// start();


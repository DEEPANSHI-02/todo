const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.json({ message: "welcome to todo app" });
})

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});
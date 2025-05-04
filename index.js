const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Todo App" });
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

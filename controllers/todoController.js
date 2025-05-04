const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTodo = async (req, res) => {
    try {
        const { text } = req.body;
        const todo = new Todo({ text, completed: false }); // Add default completed status
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const toggleTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        todo.completed = !todo.completed;
        await todo.save();
        res.json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.json({ message: "Todo deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getTodos,
    createTodo,
    toggleTodo,
    deleteTodo
};

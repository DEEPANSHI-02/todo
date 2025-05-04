const Todo = require('../models/Todo');

const getTodos = async(req, res) =>{
    const todos = await Todo.find();
    res.json(todos);
};

const createTodo = async (req, res) => {
    const { text } = req.body;
    cosnt todo = new TO + odo({ text });
    await todo.save();
    res.status(201).json(todo);
};

const toggleTodo = async(req, res) =.{
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.completed;
    await todo.save();
    res.json(todo);
};

const deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  };


  module.exports = {
    getTodos,
    createTodo,
    toggleTodo,
    deleteTodo
  };

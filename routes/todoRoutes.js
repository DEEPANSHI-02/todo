const express = require('express');

const {
    getTodos,
    createTodo, toogleTodo, deleteTodo,
    toggleTodo
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", toggleTodo);
router.delete("/:id", deleteTodo)

module.exports = router;
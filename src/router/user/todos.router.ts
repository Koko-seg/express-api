import express from "express";

import { addTodo } from "../../controller/todo.controller/addTodo";
import { getTodoById } from "../../controller/todo.controller/getTodoById";
import { deleteTodo } from "../../controller/todo.controller/deleteTodo";

const todoRouter = express.Router();

// todoRouter.get("/", getTodos);

todoRouter.post("/", addTodo);

todoRouter.get("/:id", getTodoById);

todoRouter.delete("/:id", deleteTodo);

export default todoRouter;

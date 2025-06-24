import express from "express";

import { deleteTodo } from "../../controller/todo.controller/deleteTodo";

import { addTodo } from "../../controller/todo.controller/addTodo";
import { getTodo } from "../../controller/todo.controller/getTodos";
import { getTodoById } from "../../controller/todo.controller/getTodoById";
import { updateTodo } from "../../controller/todo.controller/updateTodo";

const todoRouter = express.Router();

todoRouter.get("/getTodo", getTodo);

todoRouter.post("/addTodo", addTodo);

todoRouter.get("/getTodoById/:id", getTodoById);

todoRouter.delete("/deleteTodo/:id", deleteTodo);

todoRouter.put("/updateTodo/:id", updateTodo);

export default todoRouter;

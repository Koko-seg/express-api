import express from "express";

import { addTodo } from "../../controller/todo.controller/addTodo";
import { getTodoById } from "../../controller/todo.controller/getTodoById";
import { deleteTodo } from "../../controller/todo.controller/deleteTodo";
import { getTodos } from "../../controller/todo.controller/getTodos";
import { updateTodo } from "../../controller/todo.controller/updateTodo";

const todoRouter = express.Router();

todoRouter.get("/", getTodos);

todoRouter.post("/", addTodo);

todoRouter.get("/:id", getTodoById);

todoRouter.delete("/:id", deleteTodo);

// todoRouter.delete("/", deleteTodo); // id gaa req.body gj awsan tohioldold

todoRouter.put("/:id",updateTodo )

export default todoRouter;

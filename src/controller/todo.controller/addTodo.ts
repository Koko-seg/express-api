import { Request, Response } from "express";

import { nanoid } from "nanoid";

import fs from "fs-extra";
import { Todo } from "../../types/todo";
import { getTodos, updateTodo } from "./deleteTodo";

export const addTodo = async (req: Request, res: Response) => {
  const { desc } = req.body;

  const uniqueId = nanoid();

  const todo = {
    id: uniqueId,
    desc,
    isComplete: false,
  };

  const todos = await getTodos();

  const updatedTodos = [...todos, todo];

  const isAddedTodos = await updateTodo(updatedTodos);

  if (isAddedTodos) {
    res.json({ success: true, todos, message: "Successfully added todo" });
  } else {
    res.json({ success: false, todos, message: "failed to add todo" });
  }
};

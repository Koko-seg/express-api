import { Request, Response } from "express";

import { nanoid } from "nanoid";

import { readTodos, updateTodo } from "../../lib/todos";
import { Todo } from "../../types/todo";

export const addTodo = async (req: Request, res: Response) => {
  const { desc } = req.body;
  let updatedTodos: Todo[] = [];

  const uniqueId = nanoid();

  const todo = {
    id: uniqueId,
    desc,
    isComplete: false,
  };

  const todos = await readTodos();

  updatedTodos.push(todo);

  const isAddedTodos = await updateTodo(updatedTodos);

  if (isAddedTodos) {
    res.json({ success: true, todos, message: "Successfully added todo" });
  } else {
    res.json({ success: false, todos, message: "failed to add todo" });
  }
};

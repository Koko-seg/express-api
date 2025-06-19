import { Request, Response } from "express";

import { nanoid } from "nanoid";

import { readTodos, updateTodo } from "../../lib/todos";


export const addTodo = async (req: Request, res: Response) => {
  const { desc } = req.body;


  const uniqueId = nanoid();

  const todo = {
    id: uniqueId,
    desc,
    isComplete: false,
  };

  const todos = await readTodos();

  const updatedAllTodos= [...todos,todo];


  const isAddedTodos = await updateTodo(updatedAllTodos);

  if (isAddedTodos) {
    res.json({ success: true, updatedAllTodos, message: "Successfully added todo" });
  } else {
    res.json({ success: false, todos, message: "failed to add todo" });
  }
};

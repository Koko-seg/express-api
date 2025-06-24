import { Request, Response } from "express";

import { db } from "../..";

// export const getTodos = async (req: Request, res: Response) => {
//   const todos = await readTodos();
//   res.status(200).json(todos);
// };

export const getTodo = async (req: Request, res: Response) => {
  const response = db.collection("todo").find();

  const todo = await response.toArray();
  res.json(todo);
};

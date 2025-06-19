import { Request, Response } from "express";
import { readTodos } from "../../lib/todos";

export const getTodos = async (req: Request, res: Response) => {
  const todos = await readTodos();
  res.status(200).json(todos);
};

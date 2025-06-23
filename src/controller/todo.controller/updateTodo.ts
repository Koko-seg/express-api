import { Request, Response } from "express";
import fs from "fs";

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { desc }: { desc: string } = req.body;

  const existingData = await fs.promises.readFile("./todos.json", "utf8");
  const updateTodos = JSON.parse(existingData).map((todo: any) => {
    if (todo.id !== id) {
      return todo;
    }
    if (todo.id == id) {
      return { ...todo, desc: desc };
    }
  });
  fs.writeFileSync("./todos.json", JSON.stringify(updateTodos, null, 2));
  res.json(updateTodos);
};

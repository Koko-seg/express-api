import { Request, Response } from "express";
import { db } from "../..";
import { ObjectId } from "mongodb";
// import { readTodos } from "../../lib/todos";

// export const getTodoById = async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const todos = await readTodos();

//   const todo = todos.find((todo) => todo.id === id);

//   if (!todo) {
//     res.json({ success: false, message: "not found todo" });
//   }

//   res.json({ todo });
// };

export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todos = await db.collection("todo").findOne({ _id: new ObjectId(id) });
  console.log(todos);
  if (!todos) {
    res.json({ success: false, message: "not found todo" });
  }

  res.json({ todos });
};

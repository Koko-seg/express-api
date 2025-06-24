import { Request, Response } from "express";
import fs from "fs";
import { db } from "../..";
import { ObjectId } from "mongodb";

// export const updateTodo = async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const { desc }: { desc: string } = req.body;

//   const existingData = await fs.promises.readFile("./todos.json", "utf8");
//   const updateTodos = JSON.parse(existingData).map((todo: any) => {
//     if (todo.id !== id) {
//       return todo;
//     }
//     if (todo.id == id) {
//       return { ...todo, desc: desc };
//     }
//   });
//   fs.writeFileSync("./todos.json", JSON.stringify(updateTodos, null, 2));
//   res.json(updateTodos);
// };

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    const response = db
      .collection("todo")
      .updateOne({ _id: new ObjectId(id) }, { $set: { description } });
    res.json(await response);
  } catch (error) {
    console.log(error);
  }
};

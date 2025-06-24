import { Request, Response } from "express";

import { db } from "../..";

// import { nanoid } from "nanoid";

// import { readTodos, updateTodo } from "../../lib/todos";

// export const addTodo = async (req: Request, res: Response) => {
//   const { desc } = req.body;

//   const uniqueId = nanoid();

//   const todo = {
//     id: uniqueId,
//     desc,
//     isComplete: false,
//   };

//   const todos = await readTodos();

//   const updatedAllTodos= [...todos,todo];

//   const isAddedTodos = await updateTodo(updatedAllTodos);

//   if (isAddedTodos) {
//     res.json({ success: true, updatedAllTodos, message: "Successfully added todo" });
//   } else {
//     res.json({ success: false, todos, message: "failed to add todo" });
//   }
// };

export const addTodo = async (req: Request, res: Response) => {
  const { description, isCompleted } = req.body;
  try {
    const response = await db
      .collection("todo")
      .insertOne({ description, isCompleted });
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(400).send("api error");
  }
};

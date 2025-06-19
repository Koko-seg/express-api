import { Request, Response } from "express";
import { readTodos, updateTodo } from "../../lib/todos";

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todos = await readTodos();

  const foundedTodo = todos.find((todo) => todo.id === id);

  if (!foundedTodo) {
    res.send({
      success: false,
      message: `todo not found ${id}`,
      data: null,
    });
  }

  const updatedTodos = todos.filter((todo) => todo.id !== id);

  await updateTodo(updatedTodos);

  res.json({
    success: true,
    message: `Successfully deleted todo id: ${id}`,
    data: updatedTodos,
  });
};

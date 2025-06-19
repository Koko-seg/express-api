import fs from "fs";
import { Todo } from "../types/todo";

export const getTodos = async () => {
  try {
    const todos = await fs.promises.readFile("./src/db/todos.json", {
      encoding: "utf8",
    });

    return JSON.parse(todos) as Todo[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateTodo = async (todos: Todo[]) => {
  try {
    const stringifyTodos = JSON.stringify(todos, null, 2);

    fs.writeFileSync("./src/db/todos.json", stringifyTodos);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../data/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const saveTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

    return saveTodos?.length > 0 ? saveTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prev) =>
      prev?.map((todo) => (todo?.id === id ? { ...todo, completed } : todo))
    );
  };

  const addTodo = (title: string) => {
    setTodos((prev) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prev,
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const deleteAllCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompleted,
  };
};

import React from "react";
import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[]; // Corrected property name to "todos" (plural for an array)
  deleteAllCompleted: () => void;
}

const TodoSummary: React.FC<TodoSummaryProps> = ({
  todos,
  deleteAllCompleted,
}) => {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="font-bold text-lg">Todo Summary</h2>
      <p>Total Todos: {totalTodos}</p>
      <p>Completed Todos: {completedCount}</p>
      <button
        onClick={deleteAllCompleted}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-gray-300"
        disabled={completedCount === 0}
      >
        Delete All Completed
      </button>
    </div>
  );
};

export default TodoSummary;

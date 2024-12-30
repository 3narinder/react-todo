import React from "react";
import TodoListItem from "./TodoListItem";
import { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onCompletedChange,
  onDelete,
}) => {
  const todoSort = todos?.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }

    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {todoSort.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
          />
        ))}
      </div>

      {todos?.length === 0 && (
        <p className="text-center text-sm text-gray-500 font-semibold tracking-wide">
          No tasks yet. Add a task in your list
        </p>
      )}
    </>
  );
};

export default TodoList;

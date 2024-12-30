import { MdDeleteOutline } from "react-icons/md";
import { Todo } from "../types/todo";

interface TodoListItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onCompletedChange,
  onDelete,
}) => {
  return (
    <div className="relative">
      <label className="flex items-center gap-2 border p-2 rounded-md border-gray-400 bg-white hover:bg-gray-50">
        <input
          checked={todo?.completed}
          type="checkbox"
          onChange={(e) => onCompletedChange(todo?.id, e.target.checked)}
          className="scale-125"
        />
        <span
          key={todo?.id}
          className={`capitalize ${
            todo?.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo?.title}
        </span>
      </label>

      <MdDeleteOutline
        onClick={() => onDelete(todo?.id)}
        className="absolute top-1/2 -translate-y-1/2 right-2 text-xl items-end justify-end ml-auto cursor-pointer text-red-400"
      />
    </div>
  );
};

export default TodoListItem;

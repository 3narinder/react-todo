import { useState } from "react";

interface AddTodoProps {
  onSubmit: (title: string) => void;
}

const AddTodo = ({ onSubmit }: AddTodoProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (!input?.trim()) return; // Prevent submission if input is empty or only whitespace

    onSubmit(input.trim()); // Call the onSubmit prop with the trimmed input
    setInput(""); // Clear the input field after submission
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="What's your task?"
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button
        type="submit" // Explicitly specify button type to avoid accidental behavior
        className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-gray-50 rounded-r-md"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;

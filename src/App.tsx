import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

import { useTodos } from "./hooks/useTodos";

const App = () => {
  const { todos, addTodo, setTodoCompleted, deleteTodo, deleteAllCompleted } =
    useTodos();

  return (
    <main className="py-10 h-screen space-y-4 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center capitalize">My todos</h1>

      <div className="max-w-lg mx-auto bg-slate-100 p-6 space-y-6 rounded-md">
        <AddTodo onSubmit={addTodo} />

        <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />

        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
    </main>
  );
};

export default App;

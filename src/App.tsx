import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [completedTodos, setCompletedTodos] = useState<
    { text: string; isCompleted: boolean }[]
  >([
    { text: "Learn React", isCompleted: true },
    { text: "Learn Vite", isCompleted: true },
  ]);
  const [incompleteTodos, setIncompleteTodos] = useState<
    { text: string; isCompleted: boolean }[]
  >([
    { text: "Learn TypeScript", isCompleted: false },
    { text: "Build a Todo App", isCompleted: false },
  ]);
  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompleteTodos={incompleteTodos}
      />
    </>
  );
}

export default App;

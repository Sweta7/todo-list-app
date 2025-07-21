import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTodos } from "./thunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodos());
  }, []);
  function createTodo(text: string) {
    console.log("Creating todo:", text);
  }
  return (
    <>
      <TodoList onCreateClicked={createTodo} />
    </>
  );
}

export default App;

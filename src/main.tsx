import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { todosSlice } from "./todosSlice.tsx";
import { loadingSlice } from "./loadingSlice.tsx";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

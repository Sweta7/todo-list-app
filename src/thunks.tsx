import axios from "axios";
import {
  loadingStarted,
  loadingCompleted,
  loadingFailed,
} from "./loadingSlice";

export const loadTodos =
  () =>
  async (
    dispatch: (arg0: {
      payload: undefined;
      type: "loading/loadingStarted" | "loading/loadingCompleted";
    }) => void
  ) => {
    dispatch(loadingStarted());
    try {
      const response = await axios.get("/api/todos");
      const todos = response.data;
      console.log(todos);
      dispatch(loadingCompleted(todos));
    } catch (e) {
      loadingFailed(e);
    }
  };

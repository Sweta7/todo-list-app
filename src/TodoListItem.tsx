import { useDispatch } from "react-redux";
import { markTodoAsCompleted, deleteTodo } from "./todosSlice";

type Todo = {
  text: string;
  isCompleted: boolean;
};

type TodoListItemProps = {
  todo: Todo;
  onCompletedClicked: (text: string) => void;
  onDeleteClicked: (text: string) => void;
};

export default function TodoListItem({ todo }: TodoListItemProps) {
  const dispatch = useDispatch();
  return (
    <>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Completed </p>}
      {todo.isCompleted ? (
        <button onClick={() => dispatch(deleteTodo(todo.text))}>
          Delete Item
        </button>
      ) : (
        <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>
          Mark as Completed
        </button>
      )}
    </>
  );
}

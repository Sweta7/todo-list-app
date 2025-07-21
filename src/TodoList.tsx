import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  onCreateClicked: (text: string) => void;
}

export default function TodoList({ onCreateClicked }: TodoListProps) {
  const todosAreLoading = useSelector(
    (state) => !state.loading.value.completed
  );
  const todos = useSelector((state) => state.todos.value);
  return (
    <div>
      <NewTodoForm onCreateClicked={onCreateClicked} />
      {todosAreLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <h3>Completed:</h3>
          {todos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} />
          ))}
          <h3>Incomplete:</h3>
          {todos.map((todo, index) => (
            <TodoListItem todo={todo} key={index} />
          ))}
        </>
      )}
    </div>
  );
}

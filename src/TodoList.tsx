import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

export default function TodoList({ completedTodos, incompleteTodos }) {
  return (
    <div>
      <NewTodoForm onCreateClicked={(text) => console.log(text)} />
      <h3>Completed:</h3>
      {completedTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  );
}

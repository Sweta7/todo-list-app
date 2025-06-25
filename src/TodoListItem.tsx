type Todo = {
  text: string;
  isCompleted: boolean;
};

type TodoListItemProps = {
  todo: Todo;
  onCompletedClicked: (text: string) => void;
  onDeleteClicked: (text: string) => void;
};

export default function TodoListItem({
  todo,
  onCompletedClicked,
  onDeleteClicked,
}: TodoListItemProps) {
  return (
    <>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Completed </p>}
      {todo.isCompleted ? (
        <button onClick={() => onDeleteClicked(todo.text)}>Delete Item</button>
      ) : (
        <button onClick={() => onCompletedClicked(todo.text)}>
          Mark as Completed
        </button>
      )}
    </>
  );
}

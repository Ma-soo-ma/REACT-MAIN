import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoDate={item.dueDate} todoName={item.name} />
      ))}
    </div>
  );
}

export default TodoItems;

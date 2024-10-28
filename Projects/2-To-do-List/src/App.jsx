import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import AddToDo from "./components/AddTodo";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Pray fajar",
      dueDate: "4/10/24",
    },
    {
      name: "Wake up",
      dueDate: "4/10/24",
    },
    {
      name: "Go to School",
      dueDate: "3/10/24",
    },
  ];

  return (
    <div className="todo-container">
      <AppName />
      <AddToDo />
      <TodoItems todoItems={todoItems} />
    </div>
  );
}

export default App;

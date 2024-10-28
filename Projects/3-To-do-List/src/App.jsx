import { useState } from "react";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import AddToDo from "./components/AddTodo";
import "./App.css";
import WlcmMsg from "./components/WlcmMsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName}, Date: ${itemDueDate}`);

    setTodoItems([...todoItems, { name: itemName, dueDate: itemDueDate }]);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
    console.log(`Item Deleted :${todoItemName} `);
  };
  return (
    <div className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WlcmMsg />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </div>
  );
}

export default App;

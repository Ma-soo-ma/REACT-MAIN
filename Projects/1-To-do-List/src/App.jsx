import AppName from "./components/AppName";
import AddToDo from "./components/AddTodo";
import AddItem1 from "./components/AddItem1";
import AddItem2 from "./components/AddItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <AddToDo />
      <div className="items-container">
        <AddItem1 />

        <AddItem2 />
      </div>
    </center>
  );
}

export default App;

import styles from "./AddTodo.module.css";
import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        <div className="col">
          <input
            type="text"
            placeholder="Enter Todo Item"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col">
          <button
            type="button"
            className={`btn btn-success ${styles["btn-success"]}`}
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row row-cols-3">
        <div className="col">
          <input type="text" placeholder="Enter Todo Item" />
        </div>
        <div className="col">
          <input type="date" />
        </div>
        <div className="col">
          <button
            type="button"
            className={`btn btn-success ${styles["btn-success"]}`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

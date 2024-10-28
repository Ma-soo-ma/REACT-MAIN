function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row row-cols-3">
        <div className="col">{todoName}</div>
        <div className="col">{todoDate}</div>
        <div className="col">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;

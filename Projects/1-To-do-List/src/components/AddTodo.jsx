function AddToDo() {
  return (
    <div class="container text-center">
      <div class="row row-cols-3">
        <div class="col">
          <input type="text" placeholder="Enter Todo App" />
        </div>
        <div class="col">
          <input type="date" />
        </div>
        <div class="col">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;

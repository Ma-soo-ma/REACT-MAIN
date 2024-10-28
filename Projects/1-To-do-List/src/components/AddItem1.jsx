function AddItem1() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2024";
  return (
    <div class="container">
      <div class="row row-cols-3">
        <div class="col">{todoName}</div>
        <div class="col">{todoDate}</div>
        <div class="col">
          <button type="button" class="btn btn-danger">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddItem1;

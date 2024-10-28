function ErrorMsg({ foodItems }) {
  return foodItems.length === 0 ? <h3>Food is not available</h3> : null;
}
export default ErrorMsg;

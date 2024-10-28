import styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter dish Name"
      className={styles.Input}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;

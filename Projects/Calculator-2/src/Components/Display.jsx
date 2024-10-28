import styles from "./display.module.css";

const Display = ({ DisplayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={DisplayValue}
      readOnly
    /> // Readonly means we only wants value from the Keyboard and not from the Input box directly
  );
};
export default Display;

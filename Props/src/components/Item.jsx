import styles from "./Item.module.css";
function Item({ foodItem, bought, handleBuyButton }) {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"} `}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onChange={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;

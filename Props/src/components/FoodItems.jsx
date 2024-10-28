import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item, event) => {
    const newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)} // Pass the event
        />
      ))}
    </ul>
  );
};

export default FoodItems;

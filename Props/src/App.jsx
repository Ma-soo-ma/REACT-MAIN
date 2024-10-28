import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      const newFoodItem = event.target.value;
      setFoodItems([...foodItems, newFoodItem]);
      event.target.value = ""; // to clear the input
    }
  };

  return (
    <>
      <Container>
        <h1 className="item-heading">Favourite Foods</h1>
        <ErrorMsg foodItems={foodItems} />
        <FoodInput handleKeyDown={onKeyDown} />

        <FoodItems foodItems={foodItems} />
      </Container>
      <Container>
        <p>
          This is the container which contains all my favorite foods which are
          not healthy.
        </p>
      </Container>
    </>
  );
}

export default App;

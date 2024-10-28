import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";

function App() {
  // set useState for input box and add it in the display.
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display DisplayValue={calVal} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;

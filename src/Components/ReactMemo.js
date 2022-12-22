import React, { useState } from "react";
import Home from "../pages/Home/Home";
import styles from "../module.css";

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("blue");
  console.log("App render");
  const Increment = () => {
    setCount(count + 1);
    setTheme("red");
  };
  const Decrement = () => {
    setCount(count - 1);
    setTheme("blue");
  };
  return (
    <div className={styles.container}>
      <h1>Count:{count}</h1>
      <h1>Theme:{theme}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      {/* <div>
        <Home title="hello there" />
      </div> */}
    </div>
  );
};

export default ReactMemo;

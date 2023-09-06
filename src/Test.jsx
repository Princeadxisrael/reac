import React, { useState } from "react";

const Test = () => {
  const [number, setNumber] = useState(0);
  let newNumber;
  const clickHandler = () => {
    newNumber = setNumber(number + 5);
    setTimeout(() => {
      alert(newNumber);
    }, 10000);
  };
  return (
    <div>
      <h1>{newNumber}</h1>
      <button onClick={clickHandler}>+5</button>
    </div>
  );
};

export default Test;

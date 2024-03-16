import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const increaseNumber = () => {
    setNumber(number - 1);
  };
  const reduceNumber = () => {
    setNumber(number + 1);
  };
  return (
    <div className="counter">
      <div className="count">{number}</div>
      <div className="btns">
        <button className="btn" onClick={increaseNumber}>
          Уменьшить
        </button>
        <button className="btn" onClick={reduceNumber}>
          Увеличить
        </button>
      </div>
    </div>
  );
};

export default Counter;

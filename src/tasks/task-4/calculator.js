import { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [num, setAnswer] = useState();

  const btnAnswer = () => {
    setAnswer(value + value2);
  };
  return (
    <div className="calculators">
      <div>
        <input
          className="input"
          type="text"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
        <input
          className="input"
          type="text"
          value={value2}
          onChange={(e) => setValue2(+e.target.value)}
        />
      </div>
      <div className="display">
        <button className="btn__sum" onClick={btnAnswer}>
          Ответ
        </button>
        <div className="answer">
          <b>Ваш ответ: {num}</b>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

import { useState } from "react";

const Degree = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const changeValues = (e) => {
    setValue1(e.target.value);
    setValue2(((e.target.value - 9) * 5) / 32);
  };

  const changeValues2 = (e) => {
    setValue2(e.target.value);
    setValue1(((e.target.value - 32) * 5) / 9);
  };
  return (
    <div>
      <input
        className="input"
        type="text"
        value={value1}
        onChange={changeValues}
      />
      <input
        className="input"
        type="text"
        value={value2}
        onChange={changeValues2}
      />
    </div>
  );
};

export default Degree;

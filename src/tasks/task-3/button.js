import { useState } from "react";

const Button = () => {
  const colors = ["red", "black", "blue"];
  const [color, setColor] = useState(0);

  const switchColor = () => {
    setColor((color + 1) % colors.length);
  };
  return (
    <div>
      <div
        style={{ backgroundColor: `${colors[color]}` }}
        className="main"
      ></div>
      <button className="btn__color" onClick={switchColor}>
        {" "}
        Переключить на другой цвет
      </button>
    </div>
  );
};

export default Button;

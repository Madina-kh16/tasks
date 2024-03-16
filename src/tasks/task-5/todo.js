import { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const btnTasks = () => {
    setTasks([...tasks, { value }]);
  };
  console.log(tasks);

  return (
    <div className="to-do__list">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="button" onClick={btnTasks}>
        Click me
      </button>
      <div> Задачи:</div>
      <ol className="list">
        {tasks.map(({ value }) => (
          <div className="tasks">
            <li className="item">{value}</li>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Todo;

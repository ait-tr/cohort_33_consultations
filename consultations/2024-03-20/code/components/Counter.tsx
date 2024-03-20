import { ChangeEvent, useState } from "react";
import "./styles.css";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  const Increment = () => {
    setCount((prevValue) => prevValue + step);
  };
  const Descriment = () => {
    setCount((prevValue) => prevValue - step);
  };

  const Reset = () => {
    setCount(0);
  };

  const handleStep = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumberStep = parseInt(event.target.value);
    setStep(newNumberStep);
  };
  console.log(step);

  return (
    <div className="counter_wrapper">
      <div className="plus" onClick={Increment}>
        +
      </div>
      <div className="value_container">
        <div className="value">{count}</div>
      </div>
      <div className="minus" onClick={Descriment}>
        -
      </div>
      <div>
        <button type="button" onClick={Reset}>
          Reset
        </button>
      </div>
      <div>
        <input
          type="number"
          defaultValue={1}
          value={step}
          onChange={handleStep}
        />
      </div>
    </div>
  );
}

export default Counter;

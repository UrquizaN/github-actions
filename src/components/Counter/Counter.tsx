import { useState } from "react";
import Button from "../Button/Button";

// import { Container } from './styles';

function Counter() {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter(counter + 1);
  }

  function minus() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <Button onClick={() => minus()}>-</Button>
      <span>{counter}</span>
      <Button onClick={() => add()}>+</Button>
    </div>
  );
}

export default Counter;

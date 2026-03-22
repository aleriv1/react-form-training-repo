import styles from "./UseRef.module.scss";
import { useState, useRef } from "react";

export const UseRef2 = () => {
  const [stateCounter, setStateCounter] = useState(0);
  const refCounter = useRef(0);

  const incrementRefCounter = () => {
    refCounter.current += 1;
    console.log("refCounter.current = ", refCounter.current);
  };

  const incrementStateCounter = () => {
    setStateCounter(stateCounter + 1);
    console.log(stateCounter + 1);
  };
  return (
    <>
      <p>refCounter: {refCounter.current}</p>
      <button onClick={incrementRefCounter}>Add refCounter</button>
      <p>stateCounter: {stateCounter}</p>
      <button onClick={incrementStateCounter}>Add statefCounter</button>
    </>
  );
};

import React, { useEffect, useRef, useState } from "react";
//Assignment: Implement a reset button to reset the timer and the timer id ref
const About = () => {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  console.log(timerIdRef);
  console.log(count);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => {
      clearInterval(timerIdRef.current);
    };
  }, []);

  return (
    <>
      <h2>ABOUT </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sint
        eligendi, quo nobis nulla commodi magnam natus officiis dolor a,
        architecto minima id dolorum aperiam sit reiciendis ducimus quos itaque.
      </p>
      <div>
        <div>Timer : {count}</div>
        <div>
          <button onClick={startHandler}>start </button>
          <button onClick={stopHandler}>stop </button>
        </div>
      </div>
    </>
  );
};

export default About;

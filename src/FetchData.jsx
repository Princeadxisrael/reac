import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //side effects: retrieving from an api, directing updating the DOM, timers
  //no deps- runs on every render
  //pass an empty array- run only on the first render

  //addeventlistener-removeeventlistener, setTimeout-clearTimeout, setinterval-clearInterval

  //   useEffect(() => {
  //     let timer = setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   }, []);
  //abortContoller API

  const KEY = "39d8f54d";

  useEffect(() => {
    const abortContoller = new AbortController();
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=john wick`, {
      signal: abortContoller.signal,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    return () => {
      abortContoller.abort();
    };
  });

  const clickHandler = () => {
    setCount(count + 1);
  };

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h3>this has been rendered {count} times</h3>
      <button onClick={clickHandler}>i have been clicked {count} times</button>
      <input
        type="text"
        placeholder="type something here"
        value={text}
        onChange={inputHandler}
      />
    </div>
  );
};

export default FetchData;

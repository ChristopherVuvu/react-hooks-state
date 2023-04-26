import React, { useState } from "react";

//set counter function that increaments count
function Counter() {
  //declare count
  const [count, setCount] = useState(0);

  //set increament function
  function increment() {
    setCount(count + 1);
  }

  //create button to execute counter on browser
  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;

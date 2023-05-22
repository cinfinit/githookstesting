import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
function Sample() {
  const [counter, setCounter] = useState(0);
  const [textData, setTextData] = useState("");

  const APIcall = () => {
    const thedata = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (response) => response.json()
    );
    return thedata;
  };

  useEffect(() => {
    console.log("useeffect call ", counter, textData);
  }, [counter, textData]);

  const buttonHandler = async () => {
    const data = await APIcall();
    setCounter(counter + 1);
    setTextData(data.title);
  };
  // const buttonHandler = () => {
  //   setCounter(counter + 1);
  //   setTextData("some random data");
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter {counter}</p>
        <button onClick={buttonHandler}>Increment</button>
      </header>
    </div>
  );
}

export default Sample;

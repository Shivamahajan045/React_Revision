import { useState } from "react";
import Child from "./Child";
function App() {
  const [userName, setUserName] = useState("");
  const getData = (data) => {
    setUserName(data);
  };
  return (
    <div className="app">
      <h1>Parent component</h1>
      <p>Data from the Child - {userName}</p>
      <hr />

      <Child getData={getData} />
    </div>
  );
}

export default App;

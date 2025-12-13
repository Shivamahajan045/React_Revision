import { useState } from "react";
import Child from "./Child";
function App() {
  const [message, setMessage] = useState("");

  const handleDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div className="app">
      <h1>Lifting State up - Parent component</h1>
      <p>{`Message from the child - ${message}`}</p>
      <hr />
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default App;

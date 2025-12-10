import { useState } from "react";
import Counter from "./Counter";
import OnChange from "./OnChange";
import ColorPicker from "./ColorPicker";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [isEmployed, setIsEmployed] = useState(false);
  const handleName = () => {
    setName("Shiva");
  };
  return (
    <div>
      <h1>React Hooks</h1>
      <h2>useState Hook</h2>
      <p>Name: {name}</p>
      <button onClick={handleName}>SetName</button>
      <hr />
      <p>Age: {age}</p>
      <button onClick={() => setAge(24)}>SetAge</button>
      <hr />
      <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={() => setIsEmployed(!isEmployed)}>SetEmployed</button>

      <Counter />

      <OnChange />

      <ColorPicker />
    </div>
  );
}

export default App;

import { useState } from "react";
import Child from "./Child";
import { createContext } from "react";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState("Shiva");

  return (
    <div>
      <h1>UseContext Hook - Parent Component</h1>
      <userContext.Provider value={user}>
        <Child />
      </userContext.Provider>
    </div>
  );
}

export default App;

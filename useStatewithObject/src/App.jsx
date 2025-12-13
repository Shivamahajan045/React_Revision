import { useState } from "react";

function App() {
  const data = {
    firstName: "Shiva",
    lastName: "Mahajan",
  };

  const [allValues, setAllValues] = useState(data);

  const handleUpdate = () => {
    setAllValues({ ...allValues, firstName: "Arvind" });
  };
  return (
    <div className="app">
      <h1>useState Hook With Objects</h1>
      <h2>
        FirstName: {allValues.firstName} <br /> Lastname : {allValues.lastName}
      </h2>
      <button onClick={handleUpdate}>update</button>
    </div>
  );
}

export default App;

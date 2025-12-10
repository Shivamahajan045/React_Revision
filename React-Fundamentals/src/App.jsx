import { useState } from "react";
import Cars from "./Cars";
import Todo from "./Todo";
function App() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState("");
  const handleOnChange = (e) => {
    setNewCar(e.target.value);
  };
  const handleNewCar = () => {
    setCars((cars) => [...cars, newCar]);
    setNewCar("");
  };

  const handleRemoveCar = (i) => {
    setCars(cars.filter((car, index) => index != i));
  };
  return (
    <div>
      <h1>Objects Updation in State</h1>
      <input type="text" value={newCar} onChange={handleOnChange} />
      <button onClick={handleNewCar}>Add</button>
      <ul>
        <li>
          {cars.map((car, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car}
            </li>
          ))}
        </li>
      </ul>

      <hr />

      <Cars />

      <hr />

      <Todo />
    </div>
  );
}

export default App;

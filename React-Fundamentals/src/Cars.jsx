import { useState } from "react";

const Cars = () => {
  const [car, setCar] = useState({
    year: 2025,
    make: "Hyundai",
    model: "Creta",
  });
  const handleYearChange = (e) => {
    setCar((car) => ({ ...car, year: e.target.value }));
  };

  const handleMakeChange = (e) => {
    setCar((car) => ({ ...car, make: e.target.value }));
  };

  const handleModelChange = (e) => {
    setCar((car) => ({ ...car, model: e.target.value }));
  };
  return (
    <div>
      <h1>Your favorite car</h1>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <p>
        {car.year} - {car.make} - {car.model}
      </p>
    </div>
  );
};

export default Cars;

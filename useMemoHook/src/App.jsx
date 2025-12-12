import { useMemo, useState } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const handleAdd = () => {
    setAdd((a) => a + 1);
  };

  const handleSubstract = () => {
    setMinus((m) => m - 1);
  };

  const multiplication = useMemo(() => {
    console.log("*********************");
    return add * 10;
  }, [add]);

  return (
    <div className="usememoHook">
      {multiplication}
      <h1>useMemo Hook</h1>
      <span>{add}</span>
      <br />
      <br />
      <button onClick={handleAdd}>Add</button>
      <br />
      <br />
      <span>{minus}</span>
      <br />
      <br />
      <button onClick={handleSubstract}>Substract</button>
    </div>
  );
}

export default App;

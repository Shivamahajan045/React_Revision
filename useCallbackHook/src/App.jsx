import { useCallback, useState } from "react";
import ChildA from "./ChildA";

function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const Learning = useCallback(() => {}, [count]);

  const handleAdd = () => {
    setAdd((a) => a + 1);
  };

  return (
    <div>
      <h1>UseCallBackHook</h1>
      <ChildA Learning={Learning} count={count} />
      <p>{add}</p>
      <button onClick={handleAdd}>Addition</button>

      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Count</button>
    </div>
  );
}

export default App;

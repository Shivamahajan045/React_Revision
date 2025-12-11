import { useRef } from "react";
function App() {
  let inputRef = useRef("");
  console.log(inputRef);
  const handleInput = () => {
    inputRef.current.style.backgroundColor = "blue";
    inputRef.current.style.color = "red";
  };

  return (
    <div>
      <h1>useRef Hook</h1>
      <input ref={inputRef} onChange={handleInput} />
    </div>
  );
}

export default App;

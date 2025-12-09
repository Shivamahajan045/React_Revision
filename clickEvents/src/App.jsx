function App() {
  const handleClick = () => {
    console.log("button clicked");
  };

  const handleClick2 = (name) => {
    console.log(`${name} stop clicking me!`);
  };
  return (
    <div>
      <h1>Click Events</h1>
      <button onClick={() => handleClick2("Bro")}>click me</button>
    </div>
  );
}

export default App;

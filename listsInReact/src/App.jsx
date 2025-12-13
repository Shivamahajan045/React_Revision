function App() {
  const ipl = ["RCB", "CSK", "MI"];
  const result = ipl.map((team, index) => <h1 key={index}>{team}</h1>);
  return (
    <div className="app">
      <h1>Lists in React</h1>
      <div>{result}</div>
    </div>
  );
}

export default App;

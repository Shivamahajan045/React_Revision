import { useState } from "react";
import UseRef from "./UseRef";
function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (e) => {
    if (e.target.name == "firstName") {
      const capName = e.target.value.toUpperCase();
      setName(capName);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.firstName.value;
    console.log(username);
    const password = e.target.password.value;
    console.log(password);
  };
  return (
    <div className="app">
      <h1>Controlled component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={name}
          onChange={handleInputChange}
          placeholder="username"
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="password"
        />
        <br />
        <br />

        <button
          type="submit"
          style={{ margin: "10px", padding: "5px", borderRadius: "10px" }}
        >
          Submit
        </button>
      </form>

      <hr />
      <UseRef />
    </div>
  );
}

export default App;

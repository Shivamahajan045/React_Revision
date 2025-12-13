import { useEffect, useState } from "react";

function App() {
  const data = {
    username: "",
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.username || !inputData.password || !inputData.email) {
      alert("All fields are required!");
    } else {
      setFlag(true);
    }
  };

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <pre className="alert-pop">
        {flag
          ? `Hello ${inputData.username}, You've Registered Successfully!`
          : ""}
      </pre>
      <div className="app">
        <h1>Registration form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleInputChange}
            value={inputData.username}
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            value={inputData.email}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            value={inputData.password}
          />
          <br />
          <br />
          <button type="submit" className="register">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

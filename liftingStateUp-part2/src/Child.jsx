import { useState } from "react";

const Child = ({ getData }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getData(name);
  };
  return (
    <div>
      <h1>Child component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Child;

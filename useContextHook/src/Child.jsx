import { userContext } from "./App";
import { useContext } from "react";

const Child = () => {
  const user = useContext(userContext);
  return (
    <div>
      <h1>Child Component</h1>
      <p>User: {user}</p>
    </div>
  );
};

export default Child;

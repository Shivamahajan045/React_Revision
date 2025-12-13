import { useRef } from "react";
const UseRef = () => {
  const inputRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };
  return (
    <div className="use-ref">
      <h1>uncontrolled components</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="username"
          ref={inputRef}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UseRef;

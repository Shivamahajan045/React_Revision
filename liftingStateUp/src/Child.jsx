const Child = ({ sendDataToParent }) => {
  const handleClick = () => {
    const message = "Hello Parent";
    sendDataToParent(message);
  };

  return (
    <div>
      <h1>Child component</h1>
      <button onClick={handleClick}>send data to parent</button>
    </div>
  );
};

export default Child;

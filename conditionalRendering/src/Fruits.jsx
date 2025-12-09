const Fruits = () => {
  const fruits = ["Apple", "Banana", "Mango"];

  const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

  return (
    <div>
      <h1>List Of Fruits</h1>
      <ul>{listItems}</ul>
      <ol type="a">{listItems}</ol>
    </div>
  );
};

export default Fruits;

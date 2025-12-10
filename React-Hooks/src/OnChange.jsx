import { useState } from "react";

const OnChange = () => {
  const [inputValue, setInputValue] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleSelect = (e) => {
    setPayment(e.target.value);
  };

  const handleOnShipping = (e) => {
    setShipping(e.target.value);
  };
  return (
    <div>
      <h1>Onchange Event</h1>
      <input value={inputValue} onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>

      <label htmlFor="payment">Payment : </label>
      <select
        name="payment"
        id="payment"
        value={payment}
        onChange={handleSelect}
      >
        <option value="">select an option</option>
        <option value="Upi">UPI</option>
        <option value="Credit card">Credit card</option>
        <option value="Debit card">Debit card</option>
      </select>
      <p>Payment: {payment}</p>

      <input
        type="radio"
        value={"pickup"}
        checked={shipping == "pickup"}
        onChange={handleOnShipping}
        id="pickup"
      />
      <label htmlFor="pickup">Pick up</label>

      <input
        type="radio"
        value={"delivary"}
        checked={shipping == "delivary"}
        onChange={handleOnShipping}
        id="delivary"
      />
      <label htmlFor="delivary">Delivary</label>

      <p>Shipping : {shipping}</p>
    </div>
  );
};

export default OnChange;

import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("hsla(0, 0%, 100%, 1.00)");
  return (
    <div>
      <h1>Color Picker</h1>

      <div className="color-picker" style={{ backgroundColor: color }}></div>
      <label htmlFor="color">Select Color: {color}</label>
      <input
        type="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;

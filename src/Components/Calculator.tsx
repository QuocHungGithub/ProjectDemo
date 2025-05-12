import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const clearImmediate = () => setInputValue("");
  return (
    <form className="calculator" name="calculator">
      <input type="text" className="value" value={inputValue} />
      <span className="numClear" onClick={() => clearImmediate()}>
        Delete
      </span>
    </form>
  );
};

export default Calculator;

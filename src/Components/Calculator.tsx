import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const display = (value: string) => setInputValue(inputValue + value);
  const calculate = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      setInputValue("Error");
    }
  };
  const clearImmediate = () => setInputValue("");
  return (
    <div className="calculator-container">
      <form className="calculator" name="calculator">
        <input type="text" className="value" value={inputValue} readOnly />
        <span className="num clear" onClick={() => clearImmediate()}>
          C
        </span>
        <span className="num operator" onClick={() => display("/")}>
          /
        </span>
        <span className="num operator" onClick={() => display("*")}>
          ×
        </span>
        <span className="num" onClick={() => display("7")}>
          7
        </span>
        <span className="num" onClick={() => display("8")}>
          8
        </span>
        <span className="num" onClick={() => display("9")}>
          9
        </span>
        <span className="num operator" onClick={() => display("-")}>
          -
        </span>
        <span className="num" onClick={() => display("4")}>
          4
        </span>
        <span className="num" onClick={() => display("5")}>
          5
        </span>
        <span className="num" onClick={() => display("6")}>
          6
        </span>
        <span className="num operator plus" onClick={() => display("+")}>
          +
        </span>
        <span className="num" onClick={() => display("1")}>
          1
        </span>
        <span className="num" onClick={() => display("2")}>
          2
        </span>
        <span className="num" onClick={() => display("3")}>
          3
        </span>
        <span className="num" onClick={() => display("0")}>
          0
        </span>
        <span className="num" onClick={() => display("00")}>
          00
        </span>
        <span className="num" onClick={() => display(".")}>
          .
        </span>
        <span className="num equal" onClick={() => calculate()}>
          =
        </span>
      </form>
    </div>
  );
};

export default Calculator;

import { useState } from "react";
import "./ToggleBackgroundColor.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "white" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };

  return (
    <div
      className="theme-container"
      style={{ backgroundColor, color: textColor }}
    >
      <button
        className="theme-toggle"
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Light Theme" : "Dark Theme"}
      </button>
      <section className="content">
        <h1 className="title">
          Welcome To A <br />
          <span className="highlight">Read</span> World...
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;

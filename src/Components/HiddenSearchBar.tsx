import { useState } from "react";
import "../Components/style/HiddenSearchBar.css";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white");
    }
  };

  //   const handleSearchClick = (e) => {
  //     e.stopPropagation(); // Prevent event from bubbling up to container
  //     setShowInput(true);
  //     setBgColor("#1a1a1a");
  //   };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          onClick={(e) => e.stopPropagation()} // Prevent hiding when clicking on input
          autoFocus
        />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;

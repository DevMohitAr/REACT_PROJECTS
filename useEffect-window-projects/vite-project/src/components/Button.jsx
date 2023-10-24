import React from "react";

export default function Button({ children, handleClick, style,isSelected,handleEnter,handleLeave }) {
  const initialStyle = {
    padding: "1rem 2rem",
    border: "none",
    color: isSelected ? "#eef2ff" : "#312e81",
    fontSize: "24px",
    cursor: "pointer",
    backgroundColor: isSelected ? "#312e81" : "#eef2ff",
  };

  return (
    <button style={{ ...initialStyle, ...style }} onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
    </button>
  );
}

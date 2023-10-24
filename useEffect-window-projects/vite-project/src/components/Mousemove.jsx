import React, { useState } from "react";
import useMouse from "../customHooks/useMouse";

export default function Mousemove() {
  const [isEnabled, setIsEnabled] = useState(true);

  const display = useMouse(isEnabled);
  const handleClick = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          gap: "140px",
          marginTop: "3rem",
          
        }}
      >
        <button
          style={{
            padding: "2rem 4rem",
            fontSize: "1.5rem",
            textTransform: "capitalize",
            backgroundColor: "#86198f",
            color: "#f5d0fe",
            alignSelf: "center",
            fontSize:'32px',
            cursor:"pointer"
          }}
          onClick={handleClick}
        >
          {isEnabled ? "stop" : "start"}
        </button>

        <div
          style={{
            width: "400px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            fontSize: "48px",
            border: "2px solid #7e22ce ",
            backgroundColor: "#fae8ff",
            boxSizing: "border-box",
            color: "#a21caf",
          }}
        >
          <span>{display.width}</span>
          <span>{display.height}</span>
        </div>
      </div>
    </>
  );
}

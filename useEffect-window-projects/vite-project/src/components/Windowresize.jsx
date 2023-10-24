import React from 'react'
import useResize from '../customHooks/useResize';

export default function Windowresize() {
    const display = useResize()
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        fontSize: "34px",
        border: "2px solid #4a044e",
        backgroundColor: "#fae8ff",
        color: "#701a75",
        fontSize: "40px",
        marginTop: "3rem",
        boxShadow:"2px 4px 8px rgba(0,0,0,0.25)"
      }}
    >
      <p>{display.x}</p>
      <p>{display.y}</p>
    </div>
  );
}

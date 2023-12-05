import React from 'react'
import { NavLink } from 'react-router-dom'
export const AppNav = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          paddingLeft: "2rem",
          marginBottom: "2rem",
        }}
      >
        <li>
          <NavLink to="Cities" style={{ color: "white",fontSize:"32px",textTransform:"capitalize" }}>
            cities
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
}

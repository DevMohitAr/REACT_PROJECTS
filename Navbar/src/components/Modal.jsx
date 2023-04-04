import React from 'react'
import {FaBars} from 'react-icons/fa'
import { FaWindowClose } from "react-icons/fa";
import { links } from '../data';
export const Modal = () => {
    const [value,setValue]= React.useState(false);
    const containerRef = React.useRef(null);
    const linksRef = React.useRef(null);
    const linkStyles = {
      height:value?`${linksRef.current.getBoundingClientRect().height}px`:'0px'
    }
  return (
    <section className="hero">
      <main className="box">
        <section
          className="wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h4 className="main-head" style={{ fontWeight: "bold" }}>
            my logo
          </h4>
          <FaBars
            onClick={(e) => setValue(!value)}
            style={{ fontSize: "1.5rem", color: "#CC623C" }}
            className="openBtn"
          />
        </section>
        <div ref={containerRef} className="links-container" style={linkStyles}>
          <ul className="iconsList" ref={linksRef}>
            {links.map((link) => (
              <li key={link.id}>
                <p className='para'
                  style={{
                    padding: "8px",
                    fontWeight:"bold"
                  }}
                >
                  {link.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
}

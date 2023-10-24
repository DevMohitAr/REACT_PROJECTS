import React from "react";
import useScroll from "../customHooks/useScroll";

export default function Scrolltrigger() {
  const divRef = React.useRef();
  const transform = useScroll(divRef);

  return (
    <main>
      <header style={{ position: "relative" }}>
        <div
          style={{
            maxWidth: "90%",
            height: "900px",
            margin: "1rem auto",
          }}
        >
          <img
            src="./src/assets/ai.jpg"
            alt="ai image"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
      </header>
      <section>
        <div
          style={{ maxWidth: "70%", margin: "0 auto", lineHeight: "1.5" }}
        ></div>
      </section>

      <div
        ref={divRef}
        style={{
          position: "absolute",
          background: "#0ea5e9",
          color: "#e0f2fe",
          right: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "200px",
          height: "200px",
          transform: `translateX(${transform}%) `,
          transition: "transform 0.4s ease",
          marginRight: "100px",
          border: "none",
          overflow: "hidden",
          boxSizing: "border-box",

          clipPath:
            "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
          backgroundColor: "#3b0764",
          width: "500px",
          height: "100px",
          marginTop: "3rem",
        }}
      ></div>
      <div
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "transparent",
          marginTop: "10rem",
        }}
      ></div>
    </main>
  );
}

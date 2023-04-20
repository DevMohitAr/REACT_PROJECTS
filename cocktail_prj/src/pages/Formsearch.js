import React from "react";
import { useGlobalAppContext } from "../context";
import { Link } from "react-router-dom";

export const FormSearch = () => {
  const { term, handleSubmit, value, setValue } = useGlobalAppContext();

  return (
    <section className="mySec">
      <form className="myForm" onSubmit={handleSubmit}>
        <input
          name="myInput"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          style={{
            background: "#DB4633",
            color: "white",
            border: "none",
            fontSize: "1.25rem",
          }}
        >
          Search cocktail
        </button>
      </form>
      <Link
        to="/"
        style={{
          alignSelf: "center",
          gridColumn: "3/-1",
          display: "grid",
          placeContent: "center",
        }}
      >
        <span
          style={{
            textTransform: "capitalize",
            border: 0,
            padding: 0,
            fontSize: "1rem",
            background: "#070808",
            color:"white",
            padding:"8px 12px"
          }}
        >
          back to home
        </span>
      </Link>
    </section>
  );
};

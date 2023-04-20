import React from "react";
import { Link } from "react-router-dom";
import { useGlobalAppContext } from "../context";

export const AllCocktails = ({
  strDrink,
  idDrink,
  strInstructions,
  strDrinkThumb,
}) => {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <article>
      <h2
        className="title"
        style={{
          textAlign: "center",
          color: "#DB4634",
        }}
      >
        {strDrink}
      </h2>

      <img src={strDrinkThumb} alt={strDrink} />

      <p className="readPara" style={{ maxWidth: "45ch", margin: "0 auto" }}>
        {readMore ? strInstructions : `${strInstructions.substring(0, 100)}...`}
        <span style={{ color: "blue" }} onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "show more"}
        </span>{" "}
      </p>

      <Link style={{ alignSelf: "end" }} to={`/products/${idDrink}`}>
        <p className="btn" style={{ alignSelf: "end",background:"#070808",color:"white" }}>
          more info
        </p>
      </Link>
    </article>
  );
};

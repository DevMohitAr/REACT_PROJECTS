import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalAppContext } from "../context";

export const SingleCocktail = () => {
  const useId = useParams();
  const { products } = useGlobalAppContext();
  const myItem = products.find((product) => {
    return product.idDrink === useId.id;
  });
  const { strDrink, strDrinkThumb, strInstructions } = myItem;
  return (
    <main style={{display:"grid",placeContent:"center",height:"100vh"}}>
      <section style={{display:"flex",maxWidth:"880px",margin:"0 auto",justifyContent:"center",alignItems:"center",gap:"20px",boxShadow:"2px 4px 8px rgba(0,0,0,.25)",marginBottom:"2rem"}}>
        <img className="drinkImg" src={strDrinkThumb}  alt={strDrink} />
        <div>
          <h1>{strDrink}</h1>
          <p>{strInstructions}</p>
        </div>
      </section>
      <Link to="/products"><button className="homeBtn">all products</button></Link>
    </main>
  );
};

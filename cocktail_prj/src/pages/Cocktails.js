import React from "react";
import { Link } from "react-router-dom";
import { useGlobalAppContext } from "../context";
import { AllCocktails } from "./AllCocktails";
import { FormSearch } from "./Formsearch";

export const Cocktails = () => {
  const {
    products,
    isLoading,
    getData,
    term,
    noItem,
   
  
  } = useGlobalAppContext();
 


  React.useEffect(() => {
    getData(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`);
  }, [term]);

  if (isLoading) {
    return <h2>loading......</h2>;
  }

  return (
    <>
      <FormSearch />
      
      <section className="container">
        {products &&
          products.map((item) => {
            return <AllCocktails key={item.idDrink} {...item} />;
          })}

        {noItem && <p className="noItem">no item found</p>}
        
      </section>
    </>
  );
};

import React from "react";
import axios from "axios";
const AppContext = React.createContext();

const Appprovider = ({ children }) => {
  const [products, setProducts] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
  const [term, setTerm] = React.useState("margarita");
  const [value, setValue] = React.useState("");
  const [noItem, setNoItem] = React.useState(false);

  const getData = async (url) => {
    const { data } = await axios.get(url);

    if (data.drinks === null) {
      setNoItem(true);
    }

    setProducts(data.drinks);
    setIsLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (e.target.elements.myInput.value === "") {
      
      setIsLoading(false);
    } else {
      setTerm(e.target.elements.myInput.value);
      setIsLoading(false);
    }

   
  };
  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        setIsLoading,
        term,
        handleSubmit,
        getData,
        setTerm,
        value,
        setValue,
        setNoItem,
        noItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalAppContext = () => {
  return React.useContext(AppContext);
};
export default Appprovider;

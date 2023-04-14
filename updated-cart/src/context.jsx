import React from "react";
import cartItems from "./data";
import { reducer } from "./reducer";
import { getTotals } from "./utils";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: new Map(
    cartItems.map((item) => {
      return [item.id, item];
    })
  ),
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = ()=>{
    dispatch({type:"CLEAR_CART"})
  }

  const remove = (id)=>{
    dispatch({type:"REMOVE",payload:{id}})
  }
  const increase = (id)=>{
    dispatch({type:"INCREASE",payload:{id}})
  }
  const decrease =(id)=>{
    dispatch({type:"DECREASE",payload:{id}})
  }
  return (
    <AppContext.Provider value={{ ...state ,clearCart,remove,increase,decrease,totalAmount,totalCost}}>{children}</AppContext.Provider>
  );
};
export const useGlobalAppContext = () => {
  return React.useContext(AppContext);
};
export default AppProvider;

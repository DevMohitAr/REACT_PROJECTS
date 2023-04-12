import React from 'react';
import { CartItem } from './CartItem';
import cartItems from '../data';
import { FaShoppingCart } from "react-icons/fa";

export const CartContainer = () => {
const [value,setValue]  = React.useState({data:cartItems})
const [amount,setAmount] = React.useState(1)
const [total,setTotal] = React.useState(null)
const getTotals = (cart)=>{
  let myAmount = 0;
  let myTotal = 0;
  let newN=0
  cart.map((item)=>{  
    myAmount += item.amount; 
    myTotal +=item.amount * item.price
    newN = myTotal.toFixed(2);

  })
setTotal(newN)
 setAmount(myAmount)
} 
React.useEffect(()=>{
getTotals(value.data)

})
  return (
    <>
      <div className="myNav">
        <h1 style={{ color: "#181E22", textTransform: "capitalize" }}>
          myCart
        </h1>
        <button tyle={{ color: "#181E22" }} className="btn">
          <FaShoppingCart />
        </button>
        <p className="amount">{amount}</p>
      </div>

      <section className="mySec">
        <div className="basicSec">
          <h3 style={{ color: "#B6BAC0" }}>product</h3>
          <p style={{ color: "#B6BAC0" }}>price</p>
        </div>
        {total > 1 ? (
          value.data.map((item) => {
            return (
              <CartItem
                key={item.id}
                {...item}
                value={value}
                setValue={setValue}
              />
            );
          })
        ) : (
          <h2 style={{textAlign:"center"}}>No item left in your cart</h2>
        )}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 style={{ textTransform: "capitalize", position: "relative" }}>
            {total > 1 ? "total" : ""}
          </h3>
          <h3>{total > 0 ? `${total}$` : ""}</h3>
        </div>
      </section>
    </>
  );
}


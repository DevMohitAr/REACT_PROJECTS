import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export const CartItem = ({ title, id, price, value, amount, setValue,img }) => {
    
  const increaseValue = (id) => {
    const newArray = value.data.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    setValue({ data: newArray });
  };
  const decreaseValue = (id) => {
    const newArray = value.data.map((item) => {
      if (item.id === id) {
        if (item.amount === 1) {
 
          return {...item,amount:0};
        } else {
          return { ...item, amount: item.amount - 1 };
        }
      } else {
        return item;
      }
    });
    setValue({ data: newArray });
  };

  return (
    <article className="myCart">
      <img src={img} alt={title} style={{border:"none"}} className="myImg" />
      <div className="priceBox">
        <p className="title">{title}</p>
        <h4>{price}</h4>
      </div>

      <div className={amount>=1?"btnDetails":"btnDetails btnHide"}>
        {amount >= 1 ? (
          <button className="iconBtn" onClick={() => decreaseValue(id)}>
            <FaArrowDown />
          </button>
        ):<p>item out of stock</p>}
        <h3>{amount>=1&& amount}</h3>
        {amount >= 1 && (
          <button className="iconBtn" onClick={() => increaseValue(id)}>
            <FaArrowUp />
          </button>
        )}
      </div>
    </article>
  );
};

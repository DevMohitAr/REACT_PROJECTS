import { nanoid } from 'nanoid';
import React from 'react'
import { DisplayItems } from "./DisplayItems";
import { ShowAll } from './ShowAll';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = ({items,setItems}) => {

const [item, setItem] = React.useState({completed:false,name:"",id:""});
const handleInput = (e)=>{
setItem({completed:false,name:e.target.value,id:nanoid()})

}

const handleSubmit = (e)=>{
e.preventDefault();
 let itemsList=JSON.parse(localStorage.getItem("items")) || [];
itemsList.push(item);
 localStorage.setItem("items",JSON.stringify(itemsList))
 setItems(itemsList)
 setItem({completed:"",name:"",id:""})
 
 
}
  return (
    <>
      <ToastContainer />
      <form
        style={{
          width: "480px",
          display: "flex",
          justifyContent: "center",
          padding: "1rem 1.5rem",
          alignSelf: "center",
          marginBottom: "5rem",
          marginTop: "3rem",
          boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          backgroundColor: "#91E6F6",
          borderRadius: "10px",
          
        }}
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="textInput"
          style={{ fontSize: "1.5rem", alignSelf: "center", color: "#00000E" }}
        >
          Checklists:-
        </label>
        <input
          type="text"
          id="textInput"
          name="textInput"
          value={item.name}
          onChange={handleInput}
          style={{ flex: 3 }}
        />
        <button
          type="submit"
          style={{
            flex: 1,
            textTransform: "capitalize",
            color: "#F6FEB1",
            borderColor: "#F6FEB1",
            background: "#00000E",
          }}
        >
          submit
        </button>
      </form>

      <ShowAll items={items} setItems={setItems} />
    </>
  );
}

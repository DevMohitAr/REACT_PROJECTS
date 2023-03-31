import React from 'react';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

export const DisplayItems = ({name,id,items,setItems,completed}) => {
   
   const handleClick = (id)=>{
    const myLists = items.filter((item)=>item.id!==id)
    setItems(myLists)
    localStorage.setItem('items',JSON.stringify(myLists))
    console.log(items.length);
    if (items.length === 1) {
      console.log(items.length);
      console.log(items);
      console.log("done");
      toast.success("all checklist done");
    }
   }

   const handleChange = (id)=>{
    let newItems = items.map((item)=>{
       if(item.id===id){
        return {...item,completed:!completed}
      }else{
        return item
      }
    })
 
     setItems(newItems)
    localStorage.setItem("items",JSON.stringify(newItems))
   }
  return (
    <section
      style={{
        display: "flex",
        maxWidth: "480px",
        padding: "1rem ",
        width: "100%",
        margin: "1rem auto",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.25)",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#6238CE",
        borderRadius: "10px",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChange(id)}
        style={{ alignSelf: "center" }}
      />
      <div style={{ display: "flex", gap: "1rem" }}>
        <h4
          style={{
            textDecoration: completed && "line-through",
            textTransform: "capitalize",
            alignSelf: "center",
            color: "#E3DBDE",
            fontSize: "1.5rem",
          }}
        >
          {name}
        </h4>
        <button
          style={{
            alignSelf: "start",
            backgroundColor: "#EA7DBC",
            color: "#0E011B",
            borderRadius: ".25rem",
            border: "none",
            padding: "0.5rem ",
            textTransform: "capitalize",
          }}
          onClick={() => handleClick(id)}
        >
          delete
        </button>
      </div>
    </section>
  );
}

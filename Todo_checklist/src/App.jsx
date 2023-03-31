import React from "react";
import { Form } from "./components/Form";
export const App = () => {
  
  const [items,setItems] = React.useState(JSON.parse(localStorage.getItem("items")) || [])
  
  return (
    <section
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Form items={items} setItems={setItems} />
    </section>
  );
};

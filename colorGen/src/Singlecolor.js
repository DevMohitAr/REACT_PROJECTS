import React from "react";
import Values from "values.js";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

export const Singlecolor = () => {
  const [color, setColor] = React.useState("#333152");
  const [colors, setColors] = React.useState(new Values('#333152').all(10));
  const handleSubmit = (e) => {
e.preventDefault();
setColors(new Values(color).all(8));
  };
const saveClip =async (hex)=>{
    if(navigator.clipboard){
        try {
            await navigator.clipboard.writeText(hex);
            toast.success("copy to clipboard")
        } catch (error) {
            console.log(error);
        }
    }
}
  return (
    <>
      <section
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", width: "420px", justifySelf: "center" }}
        >
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ flexGrow: "1",border:"none" }}
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ width: "200px", flexGrow: "5",color:color }}
          />
          <button type="submit"  style={{ flexGrow: "2",textTransform:"capitalize",border:"none",background:color,color:"#c6c4c8" }}>
            submit
          </button>
        </form>
      </section>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          maxWidth: "1040px",
          margin: "0 auto",
        }}
      >
        {colors.map((color,index) => {
          const { hex, weight } = color;
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: `#${hex}`,
                width: "200px",
                height: "120px",
              }}
              onClick={() => saveClip(hex)}
            >
              <ToastContainer />
              <p className={index > 10 ? "color-light" : "color-dark"}>#{hex}</p>
              <p className={index > 10 ? "color-light" : "color-dark"}>{weight}%</p>
            </div>
          );
        })}{" "}
      </div>
    </>
  );
};

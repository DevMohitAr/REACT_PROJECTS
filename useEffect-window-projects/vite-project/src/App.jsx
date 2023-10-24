import React from "react";

import Mousemove from "./components/Mousemove";
import Windowresize from "./components/Windowresize";
import Scrolltrigger from "./components/Scrolltrigger";
import Button from "./components/Button";

function App() {
  const [selection, setSelection] = React.useState(1);

  const handleClick = (id) => {
    setSelection(id);
  };


  return (
    <div style={{ backgroundColor: "#ddd6fe" }}>
      <div
        style={{
          maxWidth: "70%",
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
          marginTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <Button handleClick={() => handleClick(1)} isSelected={selection === 1}>
          Window Resize
        </Button>
        <Button handleClick={() => handleClick(2)} isSelected={selection === 2}>
          Window Mousemove
        </Button>
        <Button handleClick={() => handleClick(3)} isSelected={selection === 3}>
          Scroll Trigger
        </Button>
      </div>
      <div style={{ display: "grid", placeContent: "center" }}>
        {selection === 1 ? (
          <Windowresize />
        ) : selection === 2 ? (
          <Mousemove />
        ) : (
          <Scrolltrigger />
        )}
      </div>

      {/* <div>
        <h1>project-1 Mouse Move</h1>
        <p>Uncomment useEffect in the code to make this projet work</p>
        <Mousemove />
        <h1>project-2 window resize</h1>
        <p>Uncomment useEffect in the code to make this projet work</p>
        <Windowresize />
        <h1>project-3 Scroll trigger</h1>
        <p>Uncomment useEffect in the code to make this projet work</p>
        <Scrolltrigger />
      </div> */}
    </div>
  );
}

export default App;

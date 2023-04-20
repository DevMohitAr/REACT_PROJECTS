import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cocktails } from "./pages/Cocktails";
import { SingleCocktail } from "./pages/SingleCocktail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Cocktails />} />
          <Route path="products/:id" element={<SingleCocktail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

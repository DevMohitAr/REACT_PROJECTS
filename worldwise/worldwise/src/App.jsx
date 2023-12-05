import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Pricing } from "./components/Pricing";
import { Product } from "./components/Product";
import { Login } from "./components/Login";
import { Cities } from "./components/Cities";
import { Countries } from "./components/Countries";
import { AppLayout } from "./components/AppLayout";
import {Form} from "./components/Form"
import { ContextProvider } from "./components/Context";
import { useGlobalContext } from "./components/Context";
import { City } from "./components/City";
function App() {
  
  return (
    <ContextProvider>
      <BrowserRouter>
        <ul style={{ display: "flex", gap: "40px" }}>
          <li>
            <Link to="pricing">pricing</Link>
          </li>
          <li>
            <Link to="product">product</Link>
          </li>
          <li>
            <Link to="login">login</Link>
          </li>
        </ul>
        <Routes>
          <Route index element={<Cities />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<p>List of cities</p>} />
            <Route path="cities" element={<Cities  />} />
            <Route path="cities/:id" element={<City  />} />
            <Route path="countries" element={<Countries />} />
            <Route path='form' element={<Form/>}/>
          </Route>
          <Route path="*" element={<p>page not found</p>}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;

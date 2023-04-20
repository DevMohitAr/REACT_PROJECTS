import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <section className="wrapper">
      <Link to="products" className="allProductsBtn">products</Link>
      <Outlet />
    </section>
  );
};

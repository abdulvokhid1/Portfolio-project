import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search for products"></input>
      </div>
      <nav>
        <Link to="featured">Featured</Link>
      </nav>
      <nav>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;

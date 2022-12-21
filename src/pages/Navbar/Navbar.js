import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserDetails from "../../Components/UserDetails";
import About from "../About/About";
import BookList from "../BookList/BookList";
import Contact from "../Contact/Contact";
import { Container } from "./Navstyle";

function Navbar() {
  const NavStyle = ({ isActive }) => {
    return {
      Text: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "black" : "",
      // width: isActive ? "100px" : "0",
    };
  };
  return (
    <Container>
      {/* <NavLink to="/" style={NavStyle}>
          Home
        </NavLink> */}
      <NavLink to="/about" style={NavStyle}>
        About
      </NavLink>
      <NavLink to="/booklist" style={NavStyle}>
        BookList
      </NavLink>
      <NavLink to="/contact" style={NavStyle}>
        Contact
      </NavLink>
      <NavLink to="/products" style={NavStyle}>
        Products
      </NavLink>
      <NavLink to="/users" style={NavStyle}>
        users
      </NavLink>
    </Container>
  );
}

export default Navbar;

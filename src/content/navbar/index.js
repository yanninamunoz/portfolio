import React from "react";
import { Nav, Link } from "./styles"
const Navbar = ({}) => {
    const title= "Hi, my name is Yannina."
    const body= "I'm a web developer & programmer living in Montevideo, Uruguay."
  return (
    <Nav>
    <Link href="#home">Home</Link>
    <Link href="#news">News</Link>
    <Link href="#contact">Contact</Link>
  </Nav>
  );
};

export default Navbar;

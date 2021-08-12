import React from "react";
import { Nav, Link } from "./styles";
const Navbar = () => (
  <Nav>
    <Link href="#home">Home</Link>
    <Link href="#news">News</Link>
    <Link href="#contact">Contact</Link>
  </Nav>
);

export default Navbar;

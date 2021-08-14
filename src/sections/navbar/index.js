import React from "react";
import { Nav, Link } from "./styles";
import {
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Navbar = () => (
  <Nav>
    <Link href="#home">Home</Link>
    <Link href="#news">News</Link>
    <Link href="#contact">Contact</Link>
  </Nav>
);

export default Navbar;

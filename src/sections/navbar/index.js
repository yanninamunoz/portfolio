import React from "react";
import Body from "../../components/texts/body";
import { Nav, Link } from "./styles";

const Navbar = ({ home, technologies, skills, footer }) => {
  return (
    <Nav>
      <Link onClick={footer}>
        <Body text="Contact me" />
      </Link>{" "}
      <Link onClick={skills}>
        <Body text="Skills" />
      </Link>
      <Link onClick={technologies}>
        <Body text="Technologies" />
      </Link>
      <Link onClick={home}>
        <Body text="Home" />
      </Link>
    </Nav>
  );
};

export default Navbar;

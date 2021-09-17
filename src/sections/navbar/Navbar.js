import React from "react"
import Body from "../../components/texts/body";
import { Link, NavbarWrapper } from "./styles";

function Navbar({ home, technologies, skills, testimonials, footer, open }) {
  return (
    <NavbarWrapper open={open}>
      <Link onClick={home}>
        <Body size="small" weight="bold" text="Home" />
      </Link>
      <Link onClick={technologies}>
        <Body size="small" weight="bold" text="Technologies" />
      </Link>
      <Link onClick={skills}>
        <Body size="small" weight="bold" text="Skills" />
      </Link>
      <Link onClick={testimonials}>
        <Body size="small" weight="bold" text="Testimonials" />
      </Link>
      <Link onClick={footer}>
        <Body size="small" weight="bold" text="Contact me" />
      </Link>
    </NavbarWrapper>
  )
}

export default Navbar
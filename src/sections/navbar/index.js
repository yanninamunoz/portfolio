import React, { useState } from "react";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";
import { HeaderWrapper } from "./styles";

const Nav = ({ home, technologies, skills, testimonials, footer }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <HeaderWrapper>
      <MenuButton open={open} handleClick={handleClick} />
      <Navbar open={open} home={home} technologies={technologies} skills={skills} testimonials={testimonials} footer={footer}/>
    </HeaderWrapper>
  );
};

export default Nav;

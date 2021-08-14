import React, { useState } from "react";
import Header from "./sections/header";
import Navbar from "./sections/navbar";
import Technologies from "./sections/technologies";
import Footer from "./sections/footer";
import Skills from "./sections/skills"

export default function Home(props) {
  const [formTopOffset, setFormTopOffset] = useState(0);

  const scrollToOffset = (topOffset) => {
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  };

  const executeScrollForm = () => scrollToOffset(formTopOffset);
  return (
    <>
      <Navbar />
      <Header executeScrollForm={executeScrollForm} />
      <Technologies />
      <Skills />
      <Footer setFormOffset={setFormTopOffset} />
    </>
  );
}

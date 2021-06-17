import React from "react";
import Header from "./content/header";
import Navbar from "./content/navbar";
import About from "./content/about";

export default function Home(props) {
  const text = "home";

  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
}

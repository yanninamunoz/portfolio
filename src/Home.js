import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import About from "./components/about";

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

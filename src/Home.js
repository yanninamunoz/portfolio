import React from "react";
import Header from "./sections/header";
import Navbar from "./sections/navbar";
import Technologies from "./sections/technologies";
import Footer from "./sections/footer";
import OthersSkills from "./sections/skills"

export default function Home(props) {
  return (
    <>
      <Navbar />
      <Header />
      <Technologies />
      <Footer />
      <OthersSkills />
    </>
  );
}

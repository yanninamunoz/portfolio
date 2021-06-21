import React from "react";
import Header from "./sections/header";
import Navbar from "./sections/navbar";
import Technologies from "./sections/technologies";
import Footer from "./sections/footer";

export default function Home(props) {
  const text = "home";

  return (
    <>
      <Navbar />
      <Header />
      <Technologies />
      <Footer />
    </>
  );
}

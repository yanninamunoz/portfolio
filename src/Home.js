import React, { useState } from "react";
import Header from "./sections/header";
import Nav from "./sections/navbar/index";
import Technologies from "./sections/technologies";
import Footer from "./sections/footer";
import Skills from "./sections/skills"
import Testimonials from "./sections/testimonials"

export default function Home() {
  const [scrollToForm, setScrollToForm] = useState(0);
  const [scrollToHome, setScrollToHome] = useState(0);
  const [scrollToTechnologies, setScrollToTechnologies] = useState(0);
  const [scrollToSkills, setScrollToSkills] = useState(0);
  const [scrollToTestimonials, setScrollToTestimonials] = useState(0);

  const scroll = (topOffset) => {
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  };

  const executeScrollForm = () => scroll(scrollToForm);
  const executeScrollHome = () => scroll(scrollToHome);
  const executeScrollTechnologies = () => scroll(scrollToTechnologies);
  const executeScrollSkills = () => scroll(scrollToSkills);
  const executeScrollTestimonials = () => scroll(scrollToTestimonials);

  return (
    <>
      <Nav home={executeScrollHome} technologies={executeScrollTechnologies} skills={executeScrollSkills} testimonials={executeScrollTestimonials} footer={executeScrollForm} />
      <Header setScroll={setScrollToHome} executeScrollForm={executeScrollForm} />
      <Technologies setScroll={setScrollToTechnologies} />
      <Skills setScroll={setScrollToSkills} />
      <Testimonials setScroll={setScrollToTestimonials} />
      <Footer setScroll={setScrollToForm} />
    </>
  );
}

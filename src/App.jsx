import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import WorkExperience from "./components/WorkExperience";
import Service from "./components/Service";
import Package from "./components/Package";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <WorkExperience />
      <Testimonials />
      <Service />
      <Package />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

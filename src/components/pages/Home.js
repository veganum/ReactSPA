import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import History from "../History";

function Home() {
  return (
    <>
      <HeroSection />
      <History />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

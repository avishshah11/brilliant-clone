import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import Hero from "../../components/HeroSection/HeroSection";
import Subjects from "../../components/Subjects/Subjects";
import Socials from "../../components/Socials/Socials";

const LandingPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Subjects />
      <Socials />
    </>
  );
};

export default LandingPage;

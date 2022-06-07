import React from "react";

// sections
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import FourthSection from "./sections/FourthSection";
import Footer from "./sections/Footer";

// scss
import "./scss/app.scss";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </main>
      <Footer />
    </>
  );
}

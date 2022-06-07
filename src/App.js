import React from "react";

// sections
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import FourthSection from "./sections/FourthSection";

// scss
import "./scss/app.scss";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </main>
  );
}

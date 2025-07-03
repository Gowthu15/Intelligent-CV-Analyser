import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import PillarsSection from "./components/PillarsSection";
import ComparisonSection from "./components/ComparisonSection";
import ValueSection from "./components/ValueSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProblemSection />
      <PillarsSection />
      <ComparisonSection />
      <ValueSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./style.scss";
import { Customize } from "./Components/Customization/Customize";
import { Extension } from "./Components/Extension/Extension";
import { Footer } from "./Components/Footer/Footer";
import { FreeTrial } from "./Components/FreeTrial/FreeTrial";
import { HeroSection } from "./Components/Hero-Section/HeroSection";
import { Navbar } from "./Components/Navbar/Navbar";
import { Pricing } from "./Components/Pricing/Pricing";
import { Software } from "./Components/Software/Software";
import { Testimonial } from "./Components/Testimonial/Testimonial";
import { WorkManagement } from "./Components/WorkManagement/WorkManagement";
import { YourData } from "./Components/YourData/YourData";
import { Work } from "./Components/YourWork/Work";

export const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WorkManagement />
      <Extension />
      <Customize />
      <Pricing />
      <Work />
      <YourData />
      <Software />
      <Testimonial />
      <FreeTrial />
      <Footer />
    </div>
  );
};

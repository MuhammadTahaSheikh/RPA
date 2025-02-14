import React, { useEffect, useState } from "react";
import "./Component.css";
import Header_main from "../Header/Header_main";
import Header_navbar from "../Header/Header_navbar";
import Ideas from "../BigIdeas/ideas";
import Footer from "../FooterRpa/Footer";
import Faq from "../Faqs/faq";
import WhyUs from "../WhyUs/whyUs";
import Counter from "../Count/Counter";
import OurStudies from "../Studies/OurStudies";
import ClientReviews from "../Reviews/ClientReviews";
import DataIdea from "../Data/DataIdea";
import Pricing_rpa from "../Pricing/Pricing_rpa";
function Component() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Show the scroll-to-top button when the user has scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    scrollToTop();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  {
    isVisible && (
      <button onClick={scrollToTop} className="scroll-to-top-button">
        <span>&uarr;</span>
      </button>
    );
  }
  return (
    <div>
      <div className="sticky-header">
        <Header_main />
        <Header_navbar />
      </div>
      <Ideas />
      <DataIdea />
      <Counter />
      <WhyUs />
      <Pricing_rpa/>
      <OurStudies />
      <ClientReviews />
      <Faq />
      <Footer />
    </div>
  );
}

export default Component;

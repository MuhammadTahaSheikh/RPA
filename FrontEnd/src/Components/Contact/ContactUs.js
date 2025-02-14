import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import Header_main from "../Header/Header_main";
import Header_navbar from "../Header/Header_navbar";
import line from "../../Assets/Studies/loading_line.svg";
import email from "../../Assets/ContactUs/email.svg";
import location from "../../Assets/ContactUs/phone_num.svg";
import Faq from "../Faqs/faq";
import Footer from "../FooterRpa/Footer";
function ContactUs() {
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
      <div className="contact_back">
        <div className="container">
          <p className="contact_head">Contact Us:</p>
        </div>
      </div>
      <div className="contact_info_back pt-5">
        <div className="container">
          <div className="main_contact">
            <p className="contact_bac">
              INTO THE FUTURE{" "}
              <span className="line_contact">
                <img src={line} alt="line" className="line_css_contact" />
              </span>
            </p>
          </div>
          <h1 className="head_content">
            Contact for any <br />
            kindly of Information
          </h1>

          <div className="contact_box pb-5">
            <div class="box">
              <p className="mb-5">
                <img src={location} alt="location" />
              </p>
              <p className="box_head ">Location</p>
              <hr />
              <p className="box_content">
                Bots can verify the accuracy and completene ss of data sets,
                reducing errors and ensuring data integrity. 
              </p>
            </div>

            <div class="box">
              <p className="mb-5">
                <img src={email} alt="location" />
              </p>
              <p className="box_head pt-2">Email</p>
              <hr />
              <p className="box_content">
                <ul className="ul_style">
                  <li>xyx@email.com</li>
                  <li>xyx@email.com</li>
                  <li>xyx@email.com</li>
                </ul>
              </p>
            </div>

            <div class="box">
              <p className="mb-5">
                <img src={location} alt="location" />
              </p>
              <p className="box_head">Contact Number</p>
              <hr />
              <p className="box_content">
                <ul className="ul_style">
                  <li>032 154 4454</li>
                  <li>032 154 4454</li>
                  <li>032 154 4454</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
}

export default ContactUs;

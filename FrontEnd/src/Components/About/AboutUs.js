import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import Header_main from "../Header/Header_main";
import Header_navbar from "../Header/Header_navbar";
import ClientReviews from "../Reviews/ClientReviews";
import Faq from "../Faqs/faq";
import Footer from "../FooterRpa/Footer";
import line from "../../Assets/Studies/loading_line.svg";
import TeamMember from "./TeamMember";
import volk_block from "../../Assets/About/volk_block.svg";
import col6 from "../../Assets/About/aboutcol.svg";
import card from "../../Assets/About/card_data/pana.svg";
import card1 from "../../Assets/About/card_data/pana1.svg";
import card2 from "../../Assets/About/card_data/pana2.svg";
import card3 from "../../Assets/About/card_data/pana3.svg";
import line1 from "../../Assets/faq/arrow_up.svg";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
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
  const cards = [
    {
      title: "Customer Centricity",
      content:
        "We prioritize our clients, ensuring we exceed their expectations and meet their unique needs with unwavering dedication.",
      imgSrc: card,
    },
    {
      title: "Innovation",
      content:
        "Our quest for novel and enhanced methods to make our RPA solutions more potent and streamlined never ceases. We are at the vanguard of innovation.",
      imgSrc: card1,
    },
    {
      title: "Collaboration",
      content:
        "We foster a culture of collaboration, working hand-in-hand with our clients, partners, and team members, ensuring we achieve stellar results together.",
      imgSrc: card2,
    },
    {
      title: "Integrity",
      content:
        "We are firmly committed to maintaining integrity at our core, ensuring that honesty and ethical conduct permeate all our actions.",
      imgSrc: card3,
    },
  ];
  return (
    <div>
      <div className="sticky-header">
        <Header_main />
        <Header_navbar />
      </div>
      <div className="contact_back">
        <div className="container">
          <p className="contact_head">About Us:</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <p className="today_climate">
              In today's climate, many businesses are stagnating, as valuable
              time is daily wasted on tedious tasks - tasks that could readily
              be automated. We envision a future where this doesn't have to be
              the norm.
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h1 className="unleash_business">
              Unleash your business <br />
              potential,{" "}
              <span className="unleash_business_clr">
                empower it
                <br /> with automation!
              </span>
            </h1>
            <p className="today_climate">
              At Robotic Process Automation, we envisage a future where
              businesses harness advanced automation technologies to amplify
              efficiency and productivity. Our vision is to spearhead the RPA
              industry, providing pioneering solutions that streamline business
              processes and unlock untapped growth potential.
            </p>

            <h1 className="unleash_business">Who we are:</h1>
            <p className="today_climate">
              Born from a collective passion for technology and business
              efficiency, Robotic Process Automation was founded by seasoned
              industry professionals. Our pioneers, deeply rooted in automation
              and the IT sector, came together with an audacious mission: to
              revolutionize how businesses operate, unlocking their potential
              through the power of RPA.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <img src={col6} alt="img" className="img_col" />
          </div>
        </div>
        <div className="main_contact">
          <p className="about_bac">
            OUR TEAM{" "}
            <span className="line_about">
              <img src={line} alt="line" className="line_css_about" />
            </span>
          </p>
        </div>
        <h1 className="head_content">
          Contact for any <br />
          kindly of Information
        </h1>
        <TeamMember />
      </div>
      <div className="volks_back">
        <div className="container">
          <div className="pt-3">
            <p className="about_costumer_back">
              Our Customers{" "}
              <span className="line_customer">
                <img src={line1} alt="line" className="line_css_customer" />
              </span>
            </p>
          </div>
          <h1 className="answer_need">Answer Your Needs</h1>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
              <div className="volk_block mt-5 mb-0">
                <div className="volk_block_img">
                  <img src={volk_block} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
              <div className="volk_block mt-5 mb-0">
                <div className="volk_block_content">
                  <p className="volk_p">
                    Our experience with Robotic Process Automation (RPA) and
                    Korper ICT has been a pivotal shift in our operational
                    framework. RPA, with its ability to automate monotonous
                    tasks, has played a vital role in improving our overall
                    operational efficiency and significantly reducing manual
                    labor. The transition from manual to automated processes has
                    saved us valuable time and has led to a remarkable decrease
                    in errors.{" "}
                  </p>
                  <p className="volk_p">
                    Our experience with Robotic Process Automation (RPA) and
                    Korper ICT has been a pivotal shift in our operational
                    framework. RPA, with its ability to automate monotonous
                    tasks, has played a vital role in improving our overall
                    operational efficiency and significantly reducing manual
                    labor. The transition from manual to automated processes has
                    saved us valuable time and has led to a remarkable decrease
                    in errors.{" "}
                  </p>
                  <p className="volk_p">
                    Our experience with Robotic Process Automation (RPA) and
                    Korper ICT has been a pivotal shift in our operational
                    framework. RPA, with its ability to automate monotonous
                    tasks, has played a vital role in improving our overall
                    operational efficiency and significantly reducing manual
                    labor. The transition from manual to automated processes has
                    saved us valuable time and has led to a remarkable decrease
                    in errors.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
              <div className="volk_block mt-5 mb-0">
                <div className="volk_block_content">
                  <p className="volk_p">
                    Our experience with Robotic Process Automation (RPA) and
                    Korper ICT has been a pivotal shift in our operational
                    framework. RPA, with its ability to automate monotonous
                    tasks, has played a vital role in improving our overall
                    operational efficiency and significantly reducing manual
                    labor. The transition from manual to automated processes has
                    saved us valuable time and has led to a remarkable decrease
                    in errors.{" "}
                  </p>
                  <p className="volk_p">
                    Our experience with Robotic Process Automation (RPA) and
                    Korper ICT has been a pivotal shift in our operational
                    framework. RPA, with its ability to automate monotonous
                    tasks, has played a vital role in improving our overall
                    operational efficiency and significantly reducing manual
                    labor. The transition from manual to automated processes has
                    saved us valuable time and has led to a remarkable decrease
                    in errors.{" "}
                  </p>
                  <p className="volk_p">
                    Our experience with Robotic Process Automation (RPA) and
                    Korper ICT has been a pivotal shift in our operational
                    framework. RPA, with its ability to automate monotonous
                    tasks, has played a vital role in improving our overall
                    operational efficiency and significantly reducing manual
                    labor. The transition from manual to automated processes has
                    saved us valuable time and has led to a remarkable decrease
                    in errors.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
              <div className="volk_block mt-5 mb-0">
                <div className="volk_block_img">
                  <img src={volk_block} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row last_volk">
            <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
              <div className="volk_block mt-5 mb-5">
                <div className="volk_block_img">
                  <img src={volk_block} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
              <div className="volk_block mt-5 mb-5">
                <div className="volk_block_content">
                  <p className="volk_p">
                    Our experience with Robotic Process Automation (RPA) and
                    Korper ICT has been a pivotal shift in our operational
                    framework. RPA, with its ability to automate monotonous
                    tasks, has played a vital role in improving our overall
                    operational efficiency and significantly reducing manual
                    labor. The transition from manual to automated processes has
                    saved us valuable time and has led to a remarkable decrease
                    in errors.{" "}
                  </p>
                  <p className="volk_p">
                    Our experience with Robotic Process Automation (RPA) and
                    Korper ICT has been a pivotal shift in our operational
                    framework. RPA, with its ability to automate monotonous
                    tasks, has played a vital role in improving our overall
                    operational efficiency and significantly reducing manual
                    labor. The transition from manual to automated processes has
                    saved us valuable time and has led to a remarkable decrease
                    in errors.{" "}
                  </p>
                  <p className="volk_p">
                    Our experience with Robotic Process Automation (RPA) and
                    Korper ICT has been a pivotal shift in our operational
                    framework. RPA, with its ability to automate monotonous
                    tasks, has played a vital role in improving our overall
                    operational efficiency and significantly reducing manual
                    labor. The transition from manual to automated processes has
                    saved us valuable time and has led to a remarkable decrease
                    in errors.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our_values">
        <div className="container">
          <div className="pt-5 pb-4">
            <p className="about_box_back">
              Our Values{" "}
              <span className="line">
                <img src={line} alt="line" className="line_css_values" />
              </span>
            </p>
          </div>
          <div className="card-grid">
            {cards.map((card, index) => (
              <div key={index} className="card">
                <h3 className="card_title">{card.title}</h3>
                <hr />
                <p className="card_content">{card.content}</p>
                <img src={card.imgSrc} className="card_img" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ClientReviews />
      <Faq />
      <Footer />
    </div>
  );
}

export default AboutUs;

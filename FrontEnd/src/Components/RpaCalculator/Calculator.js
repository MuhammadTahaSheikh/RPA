import React, { useState, useEffect } from "react";
import Header_main from "../Header/Header_main";
import Header_navbar from "../Header/Header_navbar";
import Faq from "../Faqs/faq";
import line from "../../Assets/Studies/loading_line.svg";

import "./Calculator.css";
import Footer from "../FooterRpa/Footer";
function Calculator() {
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
  const items = [
    {
      id: 1,
      name: "Business Process",
      content:
        "Number of business processes taken into account into this calculation",
    },
    {
      id: 2,
      name: "FTE workers",
      content: "Number of salaried workers currently operating the process",
    },
    {
      id: 3,
      name: " % Daily Time",
      content:
        "Percentages of time salaried workers spent on these business processes",
    },
    {
      id: 4,
      name: "Average salary",
      content: "Average workers salary that works on these processes",
    },
    {
      id: 5,
      name: "Cost per Bot",
      content: "One time development costs per bot",
    },
    {
      id: 6,
      name: " Estimated maintenance",
      content: "Estimated yearly costs for maintaining the bot",
    },
    {
      id: "*",
      name: " Calculation",
      content: "Full gross employer expenses incl. pension, premiums etc",
    },
  ];
  return (
    <div>
      <div className="sticky-header">
        <Header_main />
        <Header_navbar />
      </div>
      <div className="rpa_calc_back">
        <div className="container">
          <p className="rpa_calc_head">RPA ROI Calculator:</p>
        </div>
      </div>

      <div className="container">
        <div className="main_contact mt-5">
          <p className="calc_bac">
            OUR TEAM{" "}
            <span className="line_calc">
              <img src={line} alt="line" className="line_css_calc" />
            </span>
          </p>
        </div>
      </div>

      <div className="rpa_roi_calculator_back">
        <div className="container">
          <h2 className="rpa_roi_calculator_content mb-5">
            RPA ROI Calculator
          </h2>
          <h2 className="rpa_roi_calculator_content">Definitions</h2>
          <table className="rpa_calc_table">
            <tbody>
              {items.map((row) => (
                <tr key={row.id}>
                  <td>
                    {row.id}. {row.name}
                  </td>
                  <td>{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <ul>
            {items.map((index)=>(
                <div key={index} className="list-item-def"> <span className="list-item-name">{index.id}.{index.name}:</span><div>{index.content}</div> </div>
            //   <span className="list-item-name">{index.id}.{index.name}:</span> {index.content}
            ))}
        </ul> */}
        </div>
      </div>

      <Faq />
      <Footer />
    </div>
  );
}

export default Calculator;

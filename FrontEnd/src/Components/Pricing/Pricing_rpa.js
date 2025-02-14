import React, { useState } from "react";
import "./Pricing_rpa.css";
import line from "../../Assets/Studies/loading_line.svg";

function Pricing_rpa() {
  const [activeContainer, setActiveContainer] = useState("a");

  const items = [
    "Basic data analysis and visualization",
    "Pre-built machine learning models",
    "Access to public datasets",
    "Simple natural language processing",
    "Basic image recognition",
    "Basic data analysis and visualization",
    "Pre-built machine learning models",
    "Access to public datasets",
    "Simple natural language processing",
    "Basic image recognition",
  ];

  const handleClick = (e) => {
    setActiveContainer(e);
  };

  return (
    <div className="pricing_main">
      <div className="price_btn_main">
        <div className="main_pricing pt-5">
          <p className="pricing_back">
            Pricing{" "}
            <span className="line">
              <img src={line} alt="line" className="line_css" />
            </span>
          </p>
        </div>
        <h1 className="choose_best_pack">Choose Your Best Packs</h1>
        <div className="price_btn_wrap">
          <button
            className="two_pricing_btn"
            onClick={() => handleClick("a")}
            style={
              activeContainer === "a"
                ? {
                    background:
                      "linear-gradient(90deg, #230FBF 0%, #B42BD1 100%)",
                    color: "#ffffff",
                    border: "1px",
                  }
                : {} 
            }
          >
            Monthly
          </button>
          <button
            className="two_pricing_btn"
            onClick={() => handleClick("b")}
            style={
              activeContainer === "b"
                ? {
                    background:
                      "linear-gradient(90deg, #230FBF 0%, #B42BD1 100%)",
                    color: "#ffffff",
                    border: "1px",
                  }
                : {}
            }
          >
            Yearly
          </button>
        </div>
      </div>
      {activeContainer === "a" && (
        <div className="container pricing_cont">
          <div className="pricing_boxp">
            <h2 className="robot_service">ROBOT AS A SERVICE</h2>
            <p className="free_registration">Free Upon Registration</p>
            <hr />
            <h2 className="free_pmonth">Free / per month</h2>
            <hr />
            <ul className="list_ul mb-4">
              {items.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
            <button className="contact_pricing mt-5">Contact Us</button>
          </div>
          <div className="pricing_boxp">
            <h2 className="robot_service">
              RPA ACQUISITION <br />
              GUIDANCE
            </h2>
            <hr />
            <h2 className="free_pmonth">$299/ per month</h2>
            <hr />
            <ul className="list_ul mb-4">
              {items.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
            <button className="contact_pricing mt-5">Contact Us</button>
          </div>
          <div className="pricing_boxp">
            <h2 className="robot_service">
              INTERIM RPA <br />
              DEVELOPERS
            </h2>
            <hr />
            <h2 className="free_pmonth">$500/ per month</h2>
            <hr />
            <ul className="list_ul mb-4">
              {items.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
            <button className="contact_pricing mt-5">Contact Us</button>
          </div>
        </div>
      )}

      {activeContainer === "b" && (
        <div className="container pricing_cont">
          <div className="pricing_boxp">
            <h2 className="robot_service">ROBOT AS A SERVICE1</h2>
            <p className="free_registration">Free Upon Registration</p>
            <hr />
            <h2 className="free_pmonth">Free / per month</h2>
            <hr />
            <ul className="list_ul mb-4">
              {items.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
            <button className="contact_pricing mt-5">Contact Us</button>
          </div>
          <div className="pricing_boxp">
            <h2 className="robot_service">
              RPA ACQUISITION <br />
              GUIDANCE
            </h2>
            <hr />
            <h2 className="free_pmonth">$299/ per month</h2>
            <hr />
            <ul className="list_ul mb-4">
              {items.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
            <button className="contact_pricing mt-5">Contact Us</button>
          </div>
          <div className="pricing_boxp">
            <h2 className="robot_service">
              INTERIM RPA <br />
              DEVELOPERS
            </h2>
            <hr />
            <h2 className="free_pmonth">$500/ per month</h2>
            <hr />
            <ul className="list_ul mb-4">
              {items.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
            <button className="contact_pricing mt-5">Contact Us</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pricing_rpa;

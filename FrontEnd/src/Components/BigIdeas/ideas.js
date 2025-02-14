import React from "react";
import "./ideas.css";
import line from "../../Assets/Studies/loading_line.svg";
import cube from "../../Assets/Header/cube.svg";
import robot_hand from "../../Assets/Header/robot_hand.svg";
import { Link } from "react-router-dom";
function ideas() {
  return (
    <div className="cont_idea">
      <div className="container content">
        <div className="container content_cony">
          <div className="main_ideas">
            <p className="ideas_back">
              INTO THE FUTURE{" "}
              <span className="line_idea">
                <img src={line} alt="line" className="line_css_idea" />
              </span>
            </p>
          </div>
          <p className="ideas_heading">Big Ideas</p>
          <p className="ideas_heading">Re AI</p>
          <p className="ideas_sunheading">
            Better data leads to more performant models. Performant models lead
            to faster deployment. Deliver value from your AI investments.
          </p>
          <p className="btn_position_idea">
            <Link to="/contact-us">
              {" "}
              <button className="btn_idea">Get In Touch</button>
            </Link>
          </p>
        </div>
      </div>
      <div className="image-container_idea">
        <img src={cube} alt="cube" className="cube_img" />
        <div className="abccc">
          <img src={robot_hand} alt="Your Image" className="image_idea" />
        </div>
      </div>
    </div>
  );
}

export default ideas;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./TeamMember.css";
import sirbilal from "../../Assets/About/team/sirbilal.svg";
import sirhayee from "../../Assets/About/team/sirhayee.svg";
import sirsami from "../../Assets/About/team/sirsami.svg";
import fb from "../../Assets/ContactUs/icons/facebook.svg";
import twitter from "../../Assets/ContactUs/icons/twitter.svg"
import lnkdn from "../../Assets/ContactUs/icons/linkdin.svg"

const teamMembers = [
  {
    id: 1,
    name: "Muhammad Bilal",
    designation: "CEO",
    imgSrc: sirbilal,
    twitter: "",
    linkedin: "",
    github: "",
  },
  {
    id: 2,
    name: "Abdul Hayee",
    designation: "CEO",
    imgSrc: sirhayee,
    twitter: "",
    linkedin: "",
    github: "",
  },
  {
    id: 3,
    name: "Abdul Sami",
    designation: "CEO",
    imgSrc: sirsami,
    twitter: "",
    linkedin: "",
    github: "",
  },
];

const TeamMember = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="team-container">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="team-member"
          onMouseEnter={() => setHoveredMember(member.id)}
          onMouseLeave={() => setHoveredMember(null)}
        >
          <img
            src={member.imgSrc}
            alt={member.name}
            className="team-member-img"
          />
          <h3 className="member_name">{member.name}</h3>
          <p>{member.designation}</p>
          {hoveredMember === member.id && (
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
              <div className="social-icons">
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fb} alt="twitter"/>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <img src={twitter} alt="twitter"/>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={lnkdn} alt="twitter"/>
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TeamMember;

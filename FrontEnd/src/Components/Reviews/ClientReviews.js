import React, { useState } from "react";
import "./ClientReviews.css";
import line from "../../Assets/Studies/loading_line.svg";
import arrows from "../../Assets/Reviews/arrows.svg";
import client_img from "../../Assets/Reviews/client_img.svg";
import arrow_front from "../../Assets/Reviews/front_arrow.svg";
import arrow_back from "../../Assets/Reviews/back_arrow.svg";
const testimonialData = [
  {
    id: 1,
    name: "Katarina Sìne",
    review:
      "A iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapien pellentesque habitant morbi Cras lacinia euismod urna, eget semper magna venenatis sed. Aenean et cursus nulla,id molestie quam. Phasellus a est ac lorem sollicitudin maximus. Aliquam laoreet ipsum at nulla fringilla, quis finibus felis viverra. In non magna vitae mi egestas ullamcorper. Cras lacinia euismod urna, eget semper magna venenatis sed. Aenean et cursus nulla, id molestie quam.",
    image: client_img,
    role: "Ui Deisgner",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "A iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapien A iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapienA iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapienA iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapienA iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapienA iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapienA iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapienA iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapienA iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapienA iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapienA iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapienpellentesque habitant morbi Cras lacinia euismod urna, eget semper magna venenatis sed. Aenean et cursus nulla,id molestie quam. Phasellus a est ac lorem sollicitudin maximus. Aliquam laoreet ipsum at nulla fringilla, quis finibus felis viverra. In non magna vitae mi egestas ullamcorper. Cras lacinia euismod urna, eget semper magna venenatis sed. Aenean et cursus nulla, id molestie quam.",
    image: client_img,
    role: "Ui Deisgner",
  },
  {
    id: 3,
    name: "Alice Johnson",
    review:
      "A iaculis at erat pellentesque adipiscing commodo elit.Condimentum vitae sapien pellentesque habitant morbi Cras lacinia euismod urna, eget semper magna venenatis sed. Aenean et cursus nulla,id molestie quam. Phasellus a est ac lorem sollicitudin maximus. Aliquam laoreet ipsum at nulla fringilla, quis finibus felis viverra. In non magna vitae mi egestas ullamcorper. Cras lacinia euismod urna, eget semper magna venenatis sed. Aenean et cursus nulla, id molestie quam.",
    image: client_img,
    role: "Ui Deisgner",
  },
];

const ClientReviews = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="review_back">
      <div className="container">
        <div className="mt-5">
          <p className="studies_back">
            OUR REVIEWS{" "}
            <span className="line">
              <img src={line} alt="line" className="line_css" />
            </span>
          </p>
        </div>
        <div className="testimonial-slider">
          <div className="d-flex">
            <h2 className="client_reviews">
              What <span className="client_reviews1">They Say</span>
            </h2>
            <p className="arrow_reviews">
              <img src={arrows} alt="arrow" />
            </p>
          </div>
          <div className="testimonial" key={currentTestimonial} style={{ animation: "slideInFromLeft 0.5s ease" }}>
  <p className="review_client">
    {testimonialData[currentTestimonial].review}
  </p>
  <span className="d-flex">
    {testimonialData[currentTestimonial].image && (
      <img
        src={testimonialData[currentTestimonial].image}
        alt="testimonial"
      />
    )}
    <div className="client_author">
      <p className="client_name">
        {testimonialData[currentTestimonial].name}
      </p>
      <p className="client_role">
        {testimonialData[currentTestimonial].role}
      </p>
    </div>
  </span>
</div>



          <div className="buttons">
            <button onClick={handlePrev} className="btn_arrow">
              <img src={arrow_front} />
            </button>

            <button onClick={handleNext} className="btn_arrow1">
              <img src={arrow_back} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;

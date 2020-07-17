import React from "react";
import image from "../Image/Captura21.JPG";
import "animate.css";

const About = () => {
  return (
    <div className=" container row ">
      <div className="col-xs-12 col-sm-6 col-md-6 about">
        <h5 class="animate__animated  animate__bounce">About</h5>
        <hr className="lineTitle" />
        <p className="aboutme">
          I am in love with technology, my professional profile is health, I am
          a Biomedical Engineer, this career is closely related to technology,
          so I fell in love with it, therefore I began to study it until I
          became a front end developer. <br />
          <br />I also made a bootcamp with Make it real, there I learned a lot
          of technologies like React js, Html5, Css, mongo DB and Javascript.
          This task does not end and I continue learning more every day.
        </p>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 ">
        <figure class="figure">
          <img
            src={image}
            className="figure-img img-fluid rounded pic "
            alt="..."
          />
        </figure>
      </div>
    </div>
  );
};

export default About;

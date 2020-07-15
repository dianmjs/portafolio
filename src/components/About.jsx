import React from "react";
import image from "../Image/Captura21.JPG";

const About = () => {
  return (
    <div className="row ">
      <div className="col-6">
        <figure class="figure">
          <img src={image} class="figure-img img-fluid rounded" alt="..." />
        </figure>
      </div>
      <div className=" col-6 ">
        <h5>About me</h5>
        <hr />
        <p>
          Soy una desarrolladora front-end de experiencias web memorables para
          el cliente. Tengo conocimiento sobre JavaScript, HTML5 y CSS. Además,
          tengo experiencia trabajando en equipos ágiles dealtorendimiento
          endiferentes marcos{" "}
        </p>
      </div>
    </div>
  );
};

export default About;

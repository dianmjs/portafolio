import React from "react";
import image from "../Image/Html5.png";
import imageJava from "../Image/Javascript.png";
import css from "../Image/css.png";
import react from "../Image/react.png";
import git from "../Image/git.png";
import bootstrap from "../Image/bootstrap.png";
import mongo from "../Image/mongo.png";

const Principal = () => {
  return (
    <div class="container  principal">
      <h1 className="TitlePrin">Hello world I'm diana!</h1>
      <p class="lead" className="lettler">
        <br /> Welcome to my page, here you can
        <br /> learn a little about me and my career in the world of web
        development.
      </p>
      <div className="languagesTodo row ">
        <img className="languages " src={image} alt="" />
        <img className="languages" src={imageJava} alt="" />
        <img className="languages" src={css} alt="" />
        <img className="languages" src={react} alt="" />
        <img className="languages" src={git} alt="" />
        <img className="languages" src={bootstrap} alt="" />
        <img className="languages" src={mongo} alt="" />
      </div>
    </div>
  );
};

export default Principal;
import React from "react";
import image from "../Image/Html5.png";
import imageJava from "../Image/Javascript.png";
import css from "../Image/css.png";
import react from "../Image/react.png";
import git from "../Image/git.png";
import bootstrap from "../Image/bootstrap.png";
import mongo from "../Image/mongo.png";
import "animate.css";

const Principal = () => {
  return (
    <div className="container  principal">
      <div className="titleLine">
        <h1 class="animate__animated  animate__bounce" className="TitlePrin">
          Hello world. I'm Diana!
        </h1>
        <hr className="line" />
        <p class="lead" className="lettler">
          <br /> Welcome to my page, here you can
          <br /> learn a little about me and my career in the world of web
          development.
        </p>
      </div>
      <div className="languagesTodo  row ">
        <figure>
          <img className="languages " src={image} alt="" />
        </figure>
        <figure>
          {" "}
          <img className="languages" src={imageJava} alt="" />
        </figure>
        <figure>
          {" "}
          <img className="languages" src={css} alt="" />
        </figure>
        <figure>
          {" "}
          <img className="languages" src={react} alt="" />{" "}
        </figure>
        <figure>
          {" "}
          <img className="languages" src={git} alt="" />
        </figure>
        <figure>
          <img className="languages" src={bootstrap} alt="" />{" "}
        </figure>
        <figure>
          {" "}
          <img className="languages" src={mongo} alt="" />{" "}
        </figure>
      </div>
    </div>
  );
};

export default Principal;

import React from "react";
import git from "../Image/git.png";
import gmail from "../Image/gmail.svg";
import linkedin from "../Image/linkedin.svg";
import twitter from "../Image/twitter.svg";
import "animate.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="row contact">
        <div className="iconConta">
          <a href="https://github.com/dianmjs" target="_blank">
            <img
              className="contactGit mr-2 animate__animated animate__swing"
              src={git}
              alt=""
            />
            <p className="titleContact">dianmjs</p>
          </a>
        </div>
        <div className="gmail">
          <a href="mailto:dianamjs69@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail">
            <img
              className="contactIconG mr-2 animate__animated animate__swing"
              src={gmail}
              alt=""
            />
            <p className="titleContact">dianamjs69@gmail.com</p>
          </a>
        </div>

        <div className="linkedin">
          <a href="https://www.linkedin.com/in/dianamarcelajs/" target="_blank">
            <img
              className="linke mr-2 animate__animated animate__swing"
              src={linkedin}
              alt=""
            />
            <p className="titleContact">dianamarcelajs</p>
          </a>
        </div>

        <div>
          <a href="https://twitter.com/dianamjs07" target="_blank">
            <img
              className="contactIcon mr-2 animate__animated animate__swing"
              src={twitter}
              alt=""
            />
            <p className="titleContact">@dianamjs07</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "animate.css";
import post from "../Image/post.JPG";
import poke from "../Image/poke.JPG";
import lista from "../Image/lista.JPG";
import crono from "../Image/crono.JPG";

const Projects = () => {
  return (
    <div className="container ">
      <div className="projects col-xs-12 col-sm-12 col-md-12 ">
        <h5 class="animate__animated  animate__bounce projects">Projects</h5>
        <hr className="lineproject " />
      </div>
      <div class="row">
        <div class=" col-xs-12 col-sm-12 col-md-6">
          <div class="card">
            <div className="card-body body">
              <h5 class="card-title">Most Voted Posts</h5>
              <img src={post} class="card-img-top imageProject" alt="..." />
              <p class="card-text parr">
                Organize posts in ascending or descending order and you can
                vote, for this project use{" "}
                <b>Reactjs, Javascript and Material-Ui</b>
                for style.
              </p>
              <a
                href="https://dianmjs.github.io/posts/"
                target="_blank"
                class="btn btn-primary button"
              >
                View project
              </a>
            </div>
          </div>
        </div>
        <div class=" col-xs-12 col-sm-12 col-md-6">
          <div class="card">
            <div class="card-body body">
              <h5 class="card-title">ToDo App</h5>
              <img src={lista} class="card-img-top imageProject" alt="..." />
              <p class="card-text parr">
                You can add tasks, edit and delete, the important thing in this
                practice was to use
                <b> Firebase for storage, React js and Boostrap 4 </b>.
              </p>
              <a
                href="https://crud-react-efaf9.web.app/"
                target="_blank"
                class="btn btn-primary button"
              >
                View project
              </a>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-6 mt-2">
          <div class="card">
            <div class="card-body body">
              <h5 class="card-title">Pokemon Api</h5>
              <img src={poke} class="card-img-top imageProject" alt="..." />
              <p class="card-text parr">
                This project is very interesting because the pokemon <b>Api</b>{" "}
                is consumed and <b>firebase authentication</b> is used, I also
                worked with
                <b> Redux, React js with Hook and Boostrap4</b>.
              </p>
              <a
                href="https://api-pokemones.firebaseapp.com/"
                target="_blank"
                class="btn btn-primary button"
              >
                View project
              </a>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-6 mt-2">
          <div class="card">
            <div class="card-body body">
              <h5 class="card-title">Chronometer</h5>
              <img src={crono} class="card-img-top imageProject" alt="..." />
              <p class="card-text parr">
                Stopwatch, played with CSS styles and effects, worked with
                <b> React js with Hooks, Material-Ui and Javascript </b>.
              </p>
              <a
                href="https://happy-engelbart-b193b9.netlify.app/"
                target="_blank"
                class="btn btn-primary button"
              >
                View project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Principal from "./components/Principal";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route component={Principal} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Projects} path="/projects" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

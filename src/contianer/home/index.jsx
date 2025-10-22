import React from "react";
import "./style.scss";

import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import About from "../about";
import ResumePge from "../resume";
import ProjectsPage from "../projects";
import MySkillPge from "../skills";
import Contact from "../contact";
const Home = () => {
  const navigate = useNavigate();
  const handleNavigateTocontactMe = () => {
    navigate("/contact");
  };
  return (
    <>
      <section id="home" className="home">
        <div className="home__text__wrapper">
          <h1>
            Hello, I'm Jemberu kassie
            <br />
            fullstack developer
          </h1>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="home__contact-me">
            <button onClick={handleNavigateTocontactMe}>hire me</button>
          </div>
        </Animate>
      </section>
      <About />
      <MySkillPge />
      <ResumePge />

      <ProjectsPage />
      <Contact />
    </>
  );
};
export default Home;

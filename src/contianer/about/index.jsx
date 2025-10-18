import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageheaderContent";
import { Animate } from "react-simple-animate";
import { DiDart } from "react-icons/di";
import { FaJava, FaDatabase, FaReact, FaNode } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import Image from "../../images/image.jpg";

import "./style.scss";
const personalDetial = [
  {
    label: "Name",
    value: "Jemberu Kassie",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Bahir Dar",
  },
  {
    label: "Email",
    value: "jemberu0970@gmail.com",
  },
  {
    label: "Mobile No",
    value: "0970013586",
  },
];
const aboutMEsummery = `
`;

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__image">
          <img alt="dummy data" src={Image} />
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information{" "}
            </h3>
            <ul>
              {
                //use map to create the array inside li
                personalDetial.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.label} :</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Fullstack Developer</h3>
            <p>
              I am a Full - Stack Developer specializing in Django and React. I
              graduated with a Bachelor's degree in Software Engineering from
              Bahir Dar University.I’m passionate about building scalable web
              applications, crafting clean APIs, and delivering seamless user
              experiences from front - end to back - end. .I am currently
              working with Bahir Dar University and Safaricom Talent Cloud,
              where I apply my skills in web development to build innovative and
              impactful solutions.Over the years, I have developed and worked on
              a range of exciting projects, which you can explore further in the
              Projects section.These projects showcase my passion for technology
              and problem - solving, as well as my ability to tackle complex
              challenges in both front - end and back - end development, with
              Acadamic Learng process.
            </p>
          </Animate>
        </div>
        <div className="about__content__serviceWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            {" "}
            <h3>I spend my time to mastering Technologies like:</h3>
            <div className="about__content__serviceWrapper__innerContent">
              <div>
                <FaJava size={60} color="blue" />
              </div>
              <div>
                <SiDjango size={60} color="blue" />
              </div>
              <div>
                <FaReact size={60} color="blue" />
              </div>
              <div>
                <FaNode size={60} color="blue" />
              </div>
              <div>
                <FaDatabase size={60} color="blue" />
              </div>
              <div>
                <DiDart size={60} color="blue" />
              </div>
            
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;

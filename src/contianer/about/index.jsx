import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageheaderContent";
import { DiDart } from "react-icons/di";
import { FaJava, FaDatabase, FaReact, FaNode } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import Image from "../../images/profileImg.png";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ x: 100, opacity: 0 }} // Starting position (off-screen)
            whileInView={{ x: 0, opacity: 1 }} // End position when visible
            transition={{ duration: 1, delay: 0.5 }} // Match your timing
            viewport={{ once: true, amount: 0.3 }} // Triggers once when 30% visible
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>

            <ul>
              {personalDetial.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label} :</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Start far left
          whileInView={{ x: 0, opacity: 1 }} // Slide in to position
          transition={{ duration: 1, delay: 0.5 }} // Match your timing
          viewport={{ once: true, amount: 0.3 }}
          className="about__content__personalWrapper"
        >
          <h3>Fullstack Developer</h3>
          <p>
            I am a Full-Stack Developer specializing in Django and React. I
            graduated with a Bachelor's degree in Software Engineering from
            Bahir Dar University. I’m passionate about building scalable web
            applications, crafting clean APIs, and delivering seamless user
            experiences from front-end to back-end.
          </p>

          <p>
            I am currently working with Bahir Dar University and Safaricom
            Talent Cloud, where I apply my skills in web development to build
            innovative and impactful solutions.
          </p>

          <p>
            Over the years, I have developed and worked on a range of exciting
            projects, which you can explore further in the Projects section.
            These projects showcase my passion for technology and
            problem-solving, as well as my ability to tackle complex challenges
            in both front-end and back-end development, alongside continuous
            academic learning.
          </p>
        </motion.div>

        <div className="about__content__serviceWrapper">
          <motion.div
            initial={{ x: 100, opacity: 0 }} // start from the right
            whileInView={{ x: 0, opacity: 1 }} // slide in to position
            transition={{ duration: 1, delay: 0.5 }} // Match your timing
            viewport={{ once: true, amount: 0.3 }} // trigger when 30% visible, once only
          >
            <h3>Technologies I’m mastering:</h3>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

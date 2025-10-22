import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageheaderContent";
import { skillsData } from "./skills";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./style.scss";
import { motion } from "framer-motion";
const MySkillPge = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            key={i}
            className="skills__content-wrapper__inner-content"
          >
            
              <h4 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h4>
              <div>
                {item.data.map((skillsItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity:1", "opacity:0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={j}>
                      <p>
                        {skillsItem.icon && <span>{skillsItem.icon}</span>}
                        {skillsItem.skillName}
                      </p>
                      <Line
                        percent={skillsItem.percentage}
                        strokewidth="2"
                        strokeColor="blue"
                        trailwidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default MySkillPge;

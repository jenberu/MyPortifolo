import React from "react";
import { BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageheaderContent";
const About = () => {
  return (
    <section id='about' className="about">
      <PageHeaderContent headerText='About me'
        icon={<BsInfoCircleFill size={40}/>}
      />

    
    </section>
  );
};

export default About;

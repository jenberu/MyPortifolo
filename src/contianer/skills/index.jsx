import React from "react";
import { BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageheaderContent";
const MySkillPge = () => {
    return (
        <section id="skills" className="skills">
        <PageHeaderContent
          headerText="My Skills"
          icon={<BsInfoCircleFill size={40} />}
        />
      </section>
    );
}
export default MySkillPge;
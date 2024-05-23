import React from "react";
import { BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageheaderContent";
const PortifoloPage = () => {
    return (
        <section id="portfolo" className="portfolo">
      <PageHeaderContent
        headerText="My Portfolo"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
    );
}
export default PortifoloPage;
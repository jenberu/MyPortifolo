import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageheaderContent";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaArrowCircleDown } from "react-icons/fa";
import { data } from "./utils";
import "react-vertical-timeline-component/style.min.css";
import "./style.scss";
import { MdWork } from "react-icons/md";
const ResumePge = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      {/* ✅ Download CV Button */}
      <div className="download_cv">
        <a
          href="/Jemberu_Kassie_Resume.pdf"
          download="Jemberu_Kassie_Resume.pdf"
          className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-md hover:bg-pink-700 transition duration-300"
        >
          <span>Download My Resume </span>

           <FaArrowCircleDown size={24} />
        </a>
      </div>
      <div className="timeline">
        <div className="timeline__expreince">
          <h3 className="timeline__expreince__header-text"> Experience</h3>
          <VerticalTimeline layout={"1-column"} lineColor="blue">
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__expreince__vertical-timelene-element"
                contentStyle={{
                  background: "none",
                  color: "white",
                  border: "1.5px solid pink",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "yellow",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <div className="expreince-titles">
                    <div>
                      <h3 className="vertical-timeline-element-title">
                        {item.title}
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        {item.link ? (
                          <a href={item.link} rel="noreferrer" target="_blank">
                            {item.subTitle}
                          </a>
                        ) : (
                          item.subTitle
                        )}{" "}
                      </h4>
                    </div>
                    <div>
                      <p className="duration">{item.duration}</p>
                    </div>
                  </div>

                  <p>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline__education">
          <h3 className="timeline__education__header-text"> Education</h3>
          <VerticalTimeline layout={"1-column"} lineColor="blue">
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__expreince__vertical-timelene-element"
                contentStyle={{
                  background: "none",
                  color: "white",
                  border: "1.5px solid pink",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "yellow",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.link ? (
                      <a href={item.link} rel="noreferrer" target="_blank">
                        {item.subTitle}
                      </a>
                    ) : (
                      item.subTitle
                    )}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default ResumePge;

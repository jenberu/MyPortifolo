import React from "react";
import { BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageheaderContent";
import { Animate } from 'react-simple-animate';
import { DiDart } from 'react-icons/di';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import Image from "../../images/image.jpg";



import './style.scss';
const personalDetial = [
  {
    label: 'Name',
    value: 'Jemberu Kassie',
  },
  {
    label: 'Age',
    value: '24',
  },
  {
    label: 'Address',
    value: 'Bahir Dar',
  },
  {
    label: 'Email',
    value: 'jemberu0970@gmail.com',
  },
  {
    label: 'Mobile No',
    value: '0970013586',
  },
];
const aboutMEsummery=' BSC in Software Engineering 4th year student in Poly Institute of technology, Bahir Dar University'

const About = () => {
  return (
    <section id='about' className="about">
      <PageHeaderContent headerText='About me'
        icon={<BsInfoCircleFill size={40}/>}
      />
      <div className="about__content">
      <div className="about__content__image">
        <img alt="dummy data" src={Image} />
          </div>
        <div className="about__content__personalWrapper">
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-900px)",
        }
        }
        end={{
          transform: "translatex(0px)",
        }}
      >
        <h3>fullstack Developer</h3>
          <p>{aboutMEsummery}</p>
        </Animate>
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(500px)",
        }
        }
        end={{
          transform: "translatex(0px)",
        }}
      >
        <h3 className="personalInformationHeaderText">Personal Information </h3>
        <ul>
              {
                //use map to create the array inside li
            personalDetial.map((item, i)=>(
              <li key={i}>
                <span className="title">
                  {item.label}
                </span>
                <span className="value">
                  {item.value}
              </span>
            </li>
            ))
          }
          </ul>
          </Animate>
        </div>
        <div className="about__content__serviceWrapper">
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(600px)",
        }
        }
        end={{
          transform: "translatex(0px)",
        }}
      >
          <div className="about__content__serviceWrapper__innerContent">
          <div><FaJava size={60} color="blue" />
          </div>
          <div><SiDjango size={60} color="blue" /></div>
          <div><FaDatabase size={60} color="blue" /></div>
          <div><DiDart size={60} color="blue" /></div>
          </div>
        </Animate>
        </div>

        

      
</div>
    
    </section>
  );
};

export default About;

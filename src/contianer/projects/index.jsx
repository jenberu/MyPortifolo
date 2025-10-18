import React from "react";
import PageHeaderContent from "../../components/pageheaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
// import ImageOne from "../../images/image1.jpg";
// import ImageTwo from "../../images/image2.jpg";
// import ImageThree from "../../images/image3.jpg";
// import ImageFour from "../../images/image4.jpg";
// import ImageFive from "../../images/african-country.jpg";
// import ImageSix from "../../images/internship-portal.jpg";
// import ImageSeven from "../../images/shop2.jpg";

import ImgAfrica from "../../images/projects/african-country.jpg";
import ImgInternshipPortal from "../../images/projects/internship-portal.jpg";
import ImgShop from "../../images/projects/shop.jpg";
import ImgMovie from "../../images/projects/movie1.jpg";
import ImgE_learnig from "../../images/projects/E-learnig.jpg";
import Imghotel from "../../images/projects/hotel.jpg";
import ImgPlp from "../../images/projects/plp.png";
import ImgTeamwork from "../../images/projects/teamwork.jpg";
import ImgFakestore from "../../images/projects/fake-store.jpg";
import ImgDrugSearch from "../../images/projects/drugSearch.jpg";
import ImgCompiler from "../../images/projects/compiler.jpg";
import ImgAdmin from "../../images/projects/admin.png";
import "./style.scss";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    name: "Location Based Drug Search platform",
    image: ImgDrugSearch,

    link: "https://lbdspfrontend.vercel.app",
  },
  {
    id: 2,
    name: "Personalized Learning platform",
    image: ImgPlp,

    link: "",
  },
   {
    id: 3,
    name: "HuluGebeya Online shoping",
    image: ImgShop,
    link: "https://hulugebaya.onrender.com/",
  },
   {
    id: 4,
    name: "ICT4D internship Portal",
    image: ImgInternshipPortal,
    link: "",
  },
  {
    id: 5,
    name: "Role Based File Sharing system",
    image: ImgTeamwork,

    link: "",
  },
  {
    id: 6,
    name: "React Admin Dashboard",
    image: ImgAdmin,
    link: "https://jem-admin-dashboard.vercel.app",
  },
   {
    id: 7,
    name: "African Countries Data",
    image: ImgAfrica,

    link: "",
  },
  {
    id: 8,
    name: "fake store E-commerce",
    image: ImgFakestore,

    link: "https://inter-tec-hub-fake-store.vercel.app",
  },
 
  {
    id: 9,
    name: "Movie Review web app",
    image: ImgMovie,
    link: "https://github.com/jenberu/movie-reviews-app",
  },
  {
    id: 10,
    name: "Hotel management APP",
    image: Imghotel,
    link: "https://github.com/jenberu/java-Hotel-Management-Project",
  },
  {
    id: 11,
    name: "Compiler development",
    link: "https://github.com/jenberu/Java-compiler-Development",
    image: ImgCompiler,
  },
 
  {
    id: 12,
    name: "E-Learnig app",
    image: ImgE_learnig,

    link: "https://github.com/jenberu/Flutter-E_Learning-App",
  },

 
];

const ProjectsPage = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index) {
    setHoveredValue(index);
  }
  function handleVistButtonClicked() {
    alert("This App is not deployed yet");
  }

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {projectsData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={handleVistButtonClicked}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsPage;

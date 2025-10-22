import React, { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "HOME",
    to: "/MyPortifolo",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKIILS",
    to: "/skill",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PROJECTS",
    to: "/projects",
  },
  {
    label: "CONTACT ME",
    to: "/contact",
  },
];
const NavBar = () => {
  // array destructuring
  const [toggleIcon, setToggleIcon] = useState(false); //this is used to handle the state of object the
  //first argument(toggleIcon is vraible and the second argumwent(settoggleIcon is the function to set toggleIcon))
  //the intial value for toggleIcon is false
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__continar">
          <Link to={"/MyPortifolo"} className="navbar__continar__logo">
            <FaHome size={30} />
          </Link>
        </div>
        <ul className={`navbar__continar__menu ${toggleIcon ? "active" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav_icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

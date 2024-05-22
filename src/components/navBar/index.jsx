import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "HOME",
    to: "/",
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
    label: "PORTFOLO",
    to: "/portfolo",
  },
  {
    label: "CONTACT ME",
    to: "/contact",
  },
];
const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__continar">
          <Link to={"/"} className="navbar__continar__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ui
          className={`navbar__continar__menu ${toggleIcon ? "active" : ""}`}

        >
          {data.map((item, key) => (
            <li key={key} className="navbar__continar__menu__item">
              <Link
                className="navbar__continar__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ui>
        <div className="nav_icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

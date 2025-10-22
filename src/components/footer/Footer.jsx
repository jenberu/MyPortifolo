import "./style.scss";
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a href="https://web.facebook.com/jenberu.kasie.7" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://t.me/I_Love_my_lovers" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <FaTelegramPlane />
        </a>
        <a href="https://www.instagram.com/jemberukassie" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://github.com/jenberu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jemberu-kassie-82355235a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Jemberu Kassie. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

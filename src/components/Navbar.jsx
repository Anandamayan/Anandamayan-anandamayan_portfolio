import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import "./navbar.css"
import github from "../public/images/social github.png";
import linkedin from "../public/images/linkedin.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <div className="nav-container">
        <h2 className="logo">&lt;Anandamayan/&gt;</h2>

        <div className="nav-links">
          <Link to="hero" smooth={true} duration={500}>
            About
          </Link>
          <Link to="skills" smooth={true}>
            Skills
          </Link>
          <Link to="experience" smooth={true}>
            Experience
          </Link>
          <Link to="projects" smooth={true}>
            Projects
          </Link>
          <Link to="contact" smooth={true}>
            Contact
          </Link>

          <a href="https://github.com/Anandamayan" target="_blank">
            <img src={github} alt="GitHub" />
          </a>

          <a href="https://www.linkedin.com/in/ananda-mayan/" target="_blank">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </nav>
  );
}

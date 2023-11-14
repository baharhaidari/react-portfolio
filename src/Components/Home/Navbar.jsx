import { useState, useEffect } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./languageSelector";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 3 &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(section.getAttribute("id"));
        }
      });

      if (window.innerWidth <= 786) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="#home" className="logo">
          Bahar.
        </a>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <ul id="navbar">
            <li>
              <a
                href="#home"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => {
                  handleLinkClick("home");
                }}
              >
                {t("NAVBAR.home")}
              </a>
            </li>

            <li>
              <a
                href="#about"
                className={activeLink === "about" ? "active" : ""}
                onClick={() => {
                  handleLinkClick("about");
                }}
              >
                {t("NAVBAR.about")}
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className={activeLink === "skills" ? "active" : ""}
                onClick={() => {
                  handleLinkClick("skills");
                }}
              >
                {t("NAVBAR.skills")}
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className={activeLink === "projects" ? "active" : ""}
                onClick={() => {
                  handleLinkClick("projects");
                }}
              >
                {t("NAVBAR.projects")}
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={activeLink === "contact" ? "active" : ""}
                onClick={() => {
                  handleLinkClick("contact");
                }}
              >
                {t("NAVBAR.contact")}
              </a>
            </li>
          </ul>
        </div>

        <div className="lang-menu">
          <LanguageSelector></LanguageSelector>
          <span className="menu-toggle" onClick={toggleMenu}>
            <i className="bx bx-menu-alt-right menu-icon"></i>
          </span>
        </div>
      </nav>
    </>
  );
}

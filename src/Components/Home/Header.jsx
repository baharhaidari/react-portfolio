import "./Header.css";
import CV from "../../CV/Bahar Haidari.pdf";
import { withTranslation } from "react-i18next";
import image from "../../assets/Images/my profile.jpg";
import ScrollReveal from "scrollreveal";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faPhone,
  faSquarePhoneFlip,
} from "@fortawesome/free-solid-svg-icons";

function Header({ t }) {
  ScrollReveal({
    reset: true,
    distance: "70px",
    duration: 2500,
    delay: 200,
  });

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".home-image", {
      origin: "bottom",
    });
  }, []);

  return (
    <section id="home" className="homeSection">
      <div className="home-content">
        <div className="contents">
          <h3>{t("HEADER.greet")}</h3>
          <h1>{t("HEADER.name")}</h1>
          <h3 className="profession">{t("HEADER.profession")}</h3>
          <p>{t("HEADER.desc")}</p>
        </div>

        <div className="buttons-containers">
          <a href={CV} download="Bahar Haidari Resume">
            <button className="btns btn-download">
              <span className="btn-icons">
                <i className="bx bxs-download"></i>
              </span>

              <span className="btn-text">{t("HEADER.cv-button")} </span>
            </button>
          </a>

          <a href="#contact">
            <button className="btns ">
              <span className="btn-icons">
                <FontAwesomeIcon icon={faPhone} />
              </span>

              <span className="btn-text">{t("HEADER.contact-button")} </span>
            </button>
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={image} className="img" alt={t("HEADER.image-alt")}></img>
      </div>
    </section>
  );
}

export default withTranslation()(Header);

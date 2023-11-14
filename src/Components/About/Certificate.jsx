import React from "react";
import certificate1Image from "../../assets/Images/certificate.png";
import certificate2Image from "../../assets/Images/certificate2.png";
import "./Certificate.css";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Certificates() {
  const { t } = useTranslation();
  const certificatesData = t("ABOUT.certificates", { returnObjects: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          vertical: true,
        },
      },
    ],
  };

  return (
    <div className="certificates">
      <Slider {...settings}>
        {certificatesData.map((certificate, index) => {
          let image;
          if (index === 0) {
            image = certificate1Image;
          } else if (index === 1) {
            image = certificate2Image;
          } else if (index === 2) {
            image = certificate1Image;
          } else if (index === 3) {
            image = certificate2Image;
          } else if (index === 4) {
            image = certificate1Image;
          } else if (index === 5) {
            image = certificate2Image;
          }

          return (
            <div className="certificate" key={index}>
              <img
                className="certificate-image"
                src={image}
                alt={certificate.imageAlt}
              />
              <h2 className="certificate-title">{certificate.title}</h2>
              <p className="certificate-description">
                {certificate.description}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

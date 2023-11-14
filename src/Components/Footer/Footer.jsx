import { useEffect, useState } from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { t } = useTranslation();
  const links = t("FOOTER.LINKS.links-data", { returnObjects: true });
  const copyRightText = t("FOOTER.FOOTER_TEXT.copy-right-text", {
    year: currentYear,
  });

  return (
    <section className="footer-section">
      <footer>
        <div className="map-social">
          <div className="social-media">
            <div className="more-info">
              <h3 className="links-title">{t("FOOTER.LINKS.heading")}: </h3>

              <div>
                {links.map((link, index) => (
                  <div className="Links-text" key={index}>
                    {link.lable}:
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.desc}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="social-media-links">
              <h2>{t("FOOTER.SOCIAL_MEDIA.heading")}: </h2>
              <a
                href="https://www.facebook.com/BaharHaidari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-facebook icons"></i>
              </a>
              <a
                href="https://www.twitter.com/bahar_h1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-twitter icons"></i>
              </a>
              <a
                href="https://www.instagram.com/bahar._.haidari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram-alt icons"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bahar-haidari-24b550254"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin icons"></i>
              </a>
              <a
                href="https://github.com/BaharHaidary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github icons"></i>
              </a>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4467.95786695905!2d62.20649318931145!3d34.352585227875615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695816540044!5m2!1sen!2s"
              width="400"
              height="250"
              style={{ border: "10" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-map"
            ></iframe>
          </div>
        </div>

        <div className="footer-text">
          <p>{copyRightText}</p>
        </div>
      </footer>
    </section>
  );
}

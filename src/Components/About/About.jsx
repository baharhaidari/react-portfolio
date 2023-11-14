import "./About.css";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div>
        <h1 className="heading">{t("ABOUT.heading")}</h1>

        <Tabs></Tabs>
      </div>
    </section>
  );
}

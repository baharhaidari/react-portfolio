import React from "react";
import SkillBar from "./SkillBars";
import "./MySkills.css";
import { useTranslation } from "react-i18next";

export default function MySkills() {
  const { t } = useTranslation();
  const personalSkills = t("SKILLS.PERSONAL_SKILLS", { returnObjects: true });
  const technicalSkills = t("SKILLS.TECHNICA_SKILLS", { returnObjects: true });

  return (
    <section id="skills" className="skills-section">
      <h1 className="heading">{t("SKILLS.heading")}</h1>

      <div className="skills">
        <div className="personal-skills">
          <h3 className="skills-title">
            {t("SKILLS.TECHNICA_SKILLS_SUB_TITLE")}
          </h3>
          {technicalSkills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>

        <div className="technical-skills">
          <h3 className="skills-title">
            {t("SKILLS.PERSONAL_SKILLS_SUB_TITLE")}
          </h3>
          {personalSkills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

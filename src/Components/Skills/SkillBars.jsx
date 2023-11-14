import React, { useEffect, useState } from "react";
import "./SkillBars.css";

const SkillBar = ({ skill, percentage }) => {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setBarWidth(percentage);
  }, [percentage]);

  return (
    <div className="skill-bar">
      <div className="skill-name">
        <span>{skill}</span>
        <div className="skill-percentage">{percentage}%</div>
      </div>

      <div className="bar-container">
        <div className="fill" style={{ width: `${barWidth}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;

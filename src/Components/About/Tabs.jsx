import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Timeline from "./Timeline";
import Certificates from "./Certificate";
import "./Tabs.css";
import { useTranslation } from "react-i18next";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("aboutMe");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const { t } = useTranslation();

  return (
    <div className="tabs-container">
      <div className="button-container">
        <button
          onClick={() => handleTabChange("aboutMe")}
          className={`tab ${
            activeTab === "aboutMe" ? "active-tab" : "unactive"
          }`}
        >
          {t("ABOUT.fisrt-tab")}
        </button>

        <button
          onClick={() => handleTabChange("timeline")}
          className={`tab ${
            activeTab === "timeline" ? "active-tab" : "unactive"
          }`}
        >
          {t("ABOUT.second-tab")}
        </button>

        <button
          onClick={() => handleTabChange("certificate")}
          className={`tab ${
            activeTab === "certificate" ? "active-tab" : "unactive"
          }`}
        >
          {t("ABOUT.third-tab")}
        </button>
      </div>

      <div className="content-container">
        {activeTab === "aboutMe" && <AboutMe />}
        {activeTab === "timeline" && <Timeline />}
        {activeTab === "certificate" && <Certificates />}
      </div>
    </div>
  );
};

export default Tabs;

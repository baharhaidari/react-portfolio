import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  const { t } = useTranslation();

  const timelineData = t("ABOUT.timeline", { returnObjects: true });
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleModalOpen = (item) => {
    setSelectedItem(item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  const getDate = (item) => {
    const formattedDate = `${item.startDate} - ${item.endDate}`;
    return formattedDate;
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = timelineData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <label>{t("ABOUT.SEARCH.label")}: </label>
        <input
          type="text"
          placeholder={t("ABOUT.SEARCH.placeholder")}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="timeline">
        {filteredData.map((item, index) => (
          <div
            className={`container ${index % 2 === 0 ? "left" : "right"} ${
              index % 2 === 0 ? "animate-left" : "animate-right"
            }`}
            key={index}
          >
            <div className="content" onClick={() => handleModalOpen(item)}>
              <h2>
                <span>{getDate(item)}</span>
              </h2>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
        {selectedItem && (
          <div className="modal" onClick={handleModalClose}>
            <div className="modal-content">
              <span className="close" onClick={handleModalClose}>
                &times;
              </span>
              <h2>
                <span>{getDate(selectedItem)}</span>
              </h2>
              <p className="modal-title">{selectedItem.title}</p>
              <p className="modal-desc">{selectedItem.desc}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Timeline;

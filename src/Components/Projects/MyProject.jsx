import React, { useState, useEffect } from "react";
import "./MyProjects.css";
import ReactPaginate from "react-paginate";
import StarRating from "./StarRating";

import image1 from "../../assets/Images/img-1.webp";
import image2 from "../../assets/Images/img-2.jfif";
import image3 from "../../assets/Images/img-3.jfif";
import image4 from "../../assets/Images/img-4.jpg";
import image5 from "../../assets/Images/work-1.jpg";

import { useTranslation } from "react-i18next";

const MyProjects = () => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemsPerPage = 3;
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  let data = t("PROJECTS.projectDetails", { returnObjects: true });

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPage(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, t]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = data.map((project) => project.category);
  const allCategories = ["All", ...new Set(categories)];

  const filterItems = (category) => {
    if (category === "All") {
      setFilteredItems(data);
    } else {
      const filtered = data.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
    setCurrentPage(0);
    setSearchTerm("");
    setActiveCategory(category);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getImageByProjectId = (projectId) => {
    switch (projectId) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      case 4:
        return image4;
      case 5:
        return image5;
      default:
        return "";
    }
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = filteredItems.slice(offset, offset + itemsPerPage);

  return (
    <section className="projects-section" id="projects">
      <h1>{t("PROJECTS.heading")}</h1>

      <div className="wrapper">
        <div className="search-filter">
          <div className="project-filters">
            <div className={`filter-menu ${isMenuOpen ? "open" : ""}`}>
              {allCategories.map((category) => (
                <span
                  className={`work-item ${
                    category === activeCategory ? "active" : ""
                  }`}
                  onClick={() => filterItems(category)}
                  key={category}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="search-input">
            <div>
              <span className="filter-menu-toggle" onClick={toggleMenu}>
                <i className="bx bx-menu-alt-left filter-menu-icon">
                  <span>Filter</span>
                </i>
              </span>
            </div>

            <div className="search">
              <label htmlFor="searchInput" className="input-label">
                {t("PROJECTS.search-input-lable")}:
              </label>
              <input
                id="searchInput"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>
        </div>

        <div className="work-container">
          {paginatedItems.map((item) => (
            <div className="work-box" key={item.id}>
              <img
                src={getImageByProjectId(item.id)}
                alt="work images"
                className="work-image"
              />
              <div className="projects-layer">
                <h4>{item.title}</h4>
                <p>{item.category}</p>

                <div className="star-link">
                  <StarRating projectId={item.id} />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    <i className="bx bx-link-external projects-link"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-container">
          <ReactPaginate
            previousLabel={t("PROJECTS.previous-lable")}
            nextLabel={t("PROJECTS.next-lable")}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </section>
  );
};

export default MyProjects;

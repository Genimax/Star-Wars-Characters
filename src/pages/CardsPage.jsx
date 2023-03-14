import React, { useState } from "react";

import Header from "../components/header/Header";
import CardsFilter from "../components/cards-page/CardsFilter";
import CardsList from "../components/cards-page/CardsList";
import { filters } from "../assets/filters";

const CardsPage = () => {
  const [language, setLanguage] = useState("en");
  const [activeFilters, setActiveFilters] = useState({});
  const [searchCount, setSearchCount] = useState("");

  const setFilters = (filterObject) => {
    const newFilter = { ...activeFilters };
    newFilter[filterObject.name] = filterObject.value;

    setActiveFilters(newFilter);
  };

  const renderFilters = () => {
    return filters.map((filter) => {
      return (
        <CardsFilter
          filter={filter}
          setFilters={setFilters}
          key={filter.name}
        />
      );
    });
  };

  return (
    <>
      <Header />
      <div className="cards-page-container">
        <div className="cards-page-widecutter">
          <p className="language-label">{"language: " + language}</p>
          <h1 className="cards-title">
            <span>{searchCount} People</span> for you to choose your
            favorite
          </h1>
          <div className="card-filters-container">
            {renderFilters(filters)}
          </div>
          <CardsList
            filters={activeFilters}
            setSearchCount={setSearchCount}
          />
        </div>
      </div>
    </>
  );
};

export default CardsPage;

import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="homepage-body">
        <div className="homepage-block">
          <div className="home-left-container">
            <h1 className="home-title">
              <span className="title-bold">Find</span> all your
              favorite <span className="title-bold">characters</span>
            </h1>
            <h2 className="home-description">
              You can find out all the information about your favorite
              characters
            </h2>
            <Link to={"/characters"}>
              <button className="basic-button">See more...</button>
            </Link>
          </div>
          <img
            className="home-image"
            src="/images/yoda-banner.png"
            alt="yoda picture"
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;

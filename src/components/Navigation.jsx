import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/" onClick={(e) => setActive(e.currentTarget)}>
        <span
          className={"nav-option" + classNameRender(homeRef)}
          ref={homeRef}
        >
          Home
        </span>
      </Link>
      <Link
        to="/characters"
        onClick={(e) => setActive(e.currentTarget)}
      >
        <span
          className={"nav-option" + classNameRender(cardsRef)}
          ref={cardsRef}
        >
          Characters
        </span>
      </Link>
    </nav>
  );
};

export default Navigation;

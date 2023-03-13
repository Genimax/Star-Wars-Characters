import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [path, setPath] = useState("");

  const classRender = (linkTo) => {
    const defaultClass = "nav-option";

    if (window.location.pathname === linkTo) {
      return defaultClass + " nav-active";
    }
    return defaultClass;
  };

  const onNavigationClick = (e) => setPath(e.target);

  return (
    <nav>
      <Link
        to="/"
        onClick={onNavigationClick}
        className={classRender("/")}
      >
        Home
      </Link>
      <Link
        to="/characters"
        onClick={onNavigationClick}
        className={classRender("/characters")}
      >
        Characters
      </Link>
    </nav>
  );
};

export default Navigation;

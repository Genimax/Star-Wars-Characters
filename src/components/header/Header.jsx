import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-block">
        <Link to="/">
          <img className="header-logo" src="./images/logo.svg" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="header-block">
        <img
          className="header-logo"
          src="../../public/images/logo.svg"
        />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

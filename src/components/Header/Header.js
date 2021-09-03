import TeslaLogo from "../../assets/icons/TeslaLogo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <TeslaLogo />
      </div>
      <nav className="header__carModels">
        <a href="/">
          <span>Model S</span>
        </a>
        <a href="/">
          <span>Model 3</span>
        </a>
        <a href="/">
          <span>Model X</span>
        </a>
        <a href="/">
          <span>Model Y</span>
        </a>
        <a href="/">
          <span>Solar Roof</span>
        </a>
        <a href="/">
          <span>Solar Panels</span>
        </a>
      </nav>
      <nav className="header__right">
        <a href="/">
          <span>Shop</span>
        </a>
        <a href="/">
          <span>Account</span>
        </a>
        <a href="/">
          <span>Menu</span>
        </a>
      </nav>
    </div>
  );
};

export default Header;

import hamburger from "@/images/hamburger.png";
import headerRight from "@/images/header-right.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img className="hamburger" alt="hamburger" src={hamburger} />
      <img className="header-right" alt="header-right" src={headerRight} />
    </div>
  );
};

export default Header;

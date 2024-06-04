import logo from "../assets/images/logo.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
function Header() {
  const navLinks = ["About", "Services", "Projects", "Contact"];

  return (
    <header>
      <div className="nav-contents">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <nav>
          {navLinks.map((link, index) => (
            <a
              href={`#${link}`}
              key={index}
              className={
                index === navLinks.length - 1 ? "last-nav-item" : "nav-item"
              }
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <h1 className="page-title"> We are creatives</h1>
      <div className="arrow-down">
        <img src={arrowDown} alt="arrow down" />
      </div>
    </header>
  );
}
export default Header;

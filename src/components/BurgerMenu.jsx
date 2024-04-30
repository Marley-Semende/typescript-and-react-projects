import { bubble as Menu } from "react-burger-menu";
import logo from "../images/logo.svg";

function BurgerMenu({ buttonsLabel, isOpen, onStateChange }) {
  return (
    <Menu isOpen={isOpen} onStateChange={onStateChange} width={"100%"} right>
      <div className="logo-wrapper">
        <img src={logo} alt="loopstudio logo" className="mobile-logo" />
      </div>
      {buttonsLabel.map((label, index) => (
        <a key={index} className="menu-item" href={`/${label.toLowerCase()}`}>
          {label}
        </a>
      ))}
    </Menu>
  );
}

export default BurgerMenu;

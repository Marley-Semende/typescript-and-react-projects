import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

function Footer({ logo, buttonsLabel }) {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="loopstudios logo" />

        <div className="social-media">
          <img src={facebook} alt="facebook icon" className="icon" />
          <img src={twitter} alt="twitter icon" className="icon" />
          <img src={pinterest} alt="pinterest icon" className="icon" />
          <img src={instagram} alt="instagram icon" className="icon" />
        </div>
      </div>
      <div className="footer-btns">
        <div className="footer-btns-wrapper">
          {buttonsLabel.map((button, index) => (
            <button key={index} className="footer-btns">
              {button}
            </button>
          ))}
        </div>
        <p>
          ©2024 coded with 🫶🏾 by {""}
          <a href="https://github.com/Marley-Semende" target="_blank">
            Marley_Marl
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

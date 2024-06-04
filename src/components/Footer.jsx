import logoFooter from "../assets/images/logo-footer.svg";
import faceBook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoFooter} alt="logo" className="logo-footer" />
        </div>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>
        <div className="footer-social">
          <a href="#">
            <img src={faceBook} alt="icon" className="footer-icon" />
          </a>
          <a href="#">
            <img src={instagram} alt="icon" className="footer-icon" />
          </a>
          <a href="#">
            <img src={twitter} alt="icon" className="footer-icon" />
          </a>
          <a href="#">
            <img src={pinterest} alt="icon" className="footer-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;

import interactiveDesktop from "../images/desktop/image-interactive.jpg";
import interactiveMobile from "../images/mobile/image-interactive.jpg";
import deepEarth from "../images/desktop/image-deep-earth.jpg";
import nightArcade from "../images/desktop/image-night-arcade.jpg";
import soccerTeam from "../images/desktop/image-soccer-team.jpg";
import theGrid from "../images/desktop/image-grid.jpg";
import upAbove from "../images/desktop/image-from-above.jpg";
import pocket from "../images/desktop/image-pocket-borealis.jpg";
import theCuriosity from "../images/desktop/image-curiosity.jpg";
import fishEye from "../images/desktop/image-fisheye.jpg";
import deepEarthMobile from "../images/mobile/image-deep-earth.jpg";
import nightArcadeMobile from "../images/mobile/image-night-arcade.jpg";
import soccerTeamMobile from "../images/mobile/image-soccer-team.jpg";
import theGridMobile from "../images/mobile/image-grid.jpg";
import upAboveMobile from "../images/mobile/image-from-above.jpg";
import pocketMobile from "../images/mobile/image-pocket-borealis.jpg";
import theCuriosityMobile from "../images/mobile/image-curiosity.jpg";
import fishEyeMobile from "../images/mobile/image-fisheye.jpg";

function MainContent() {
  const isMobile = window.innerWidth <= 768;

  const desktopImages = [
    { src: deepEarth, title: "Deep earth" },
    { src: nightArcade, title: "Night Arcade" },
    { src: soccerTeam, title: "Soccer Team Vr" },
    { src: theGrid, title: "The Grid" },
    { src: upAbove, title: "From up above vr" },
    { src: pocket, title: "Pocket borealis" },
    { src: theCuriosity, title: " The curiosity" },
    { src: fishEye, title: " Make it fisheye" },
  ];

  const mobileImages = [
    { src: deepEarthMobile, title: "Deep earth" },
    { src: nightArcadeMobile, title: "Night Arcade" },
    { src: soccerTeamMobile, title: "Soccer Team Vr" },
    { src: theGridMobile, title: "The Grid" },
    { src: upAboveMobile, title: "From up above vr" },
    { src: pocketMobile, title: "Pocket borealis" },
    { src: theCuriosityMobile, title: " The curiosity" },
    { src: fishEyeMobile, title: " Make it fisheye" },
  ];

  const imageGallery = isMobile ? mobileImages : desktopImages;

  return (
    <div className="main-content">
      <div className="section-one">
        <div className="interactive-img-container">
          {isMobile ? (
            <img
              src={interactiveMobile}
              alt="interavtive vr"
              className="interactive-mobile"
            />
          ) : (
            <img
              src={interactiveDesktop}
              alt="interactive vr"
              className="interactive-img"
            />
          )}
        </div>
        <div className="section-one-txt">
          <h2>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <div className="section-two">
        <div className="section-two-heading">
          <h3>Our creations</h3>
          <div className="see-all-wrapper">
            <button className="button">
              <span>See all</span>
            </button>
          </div>
        </div>
        <div className="gallery">
          {imageGallery.map((image, index) => (
            <div key={index} className="img-wrapper">
              <img src={image.src} alt={image.title} className="img" />
              <div className="overlay"></div>
              <p className="img-title">{image.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;

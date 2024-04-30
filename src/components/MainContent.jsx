import interactive from "../images/desktop/image-interactive.jpg";
import deepEarth from "../images/desktop/image-deep-earth.jpg";
import nightArcade from "../images/desktop/image-night-arcade.jpg";
import soccerTeam from "../images/desktop/image-soccer-team.jpg";
import theGrid from "../images/desktop/image-grid.jpg";
import upAbove from "../images/desktop/image-from-above.jpg";
import pocket from "../images/desktop/image-pocket-borealis.jpg";
import theCuriosity from "../images/desktop/image-curiosity.jpg";
import fishEye from "../images/desktop/image-fisheye.jpg";

function MainContent() {
  const imageGallery = [
    { src: deepEarth, title: "Deep earth" },
    { src: nightArcade, title: "Night Arcade" },
    { src: soccerTeam, title: "Soccer Team Vr" },
    { src: theGrid, title: "The Grid" },
    { src: upAbove, title: "From up above vr" },
    { src: pocket, title: "Pocket borealis" },
    { src: theCuriosity, title: " The curiosity" },
    { src: fishEye, title: " Make it fisheye" },
  ];

  return (
    <div className="main-content">
      <div className="section-one">
        <div className="interactive-img-container">
          <img
            src={interactive}
            alt="interactive vr"
            className="interactive-img"
          />
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
          <button>See all</button>
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

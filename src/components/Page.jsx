import emilyAvatar from "../assets/images/image-emily.jpg";
import thomasAvatar from "../assets/images/image-thomas.jpg";
import jennieAvatar from "../assets/images/image-jennie.jpg";

function Page() {
  return (
    <div className="page-container">
      <div className="page-grid-container">
        <div className="text-box">
          <h2> Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="btn1">Learn more</button>
        </div>
        <div className="image-box1"></div>
        <div className="image-box2"></div>
        <div className="text-box">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="btn2">Learn more</button>
        </div>
        <div className="image-box-with-text-graphic-design">
          <h3>Graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="image-box-with-text-photography">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>

      <div className="testimonials">
        <h4>Client testimonials</h4>
        <div className="testimonial-flex-container">
          <div className="testimonial-box">
            <div className="avatar">
              <img src={emilyAvatar} alt="Emily R." />
            </div>
            <p className="testimony">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h5 className="name">Emily R.</h5>
            <p className="title">Marketing Director</p>
          </div>
          <div className="testimonial-box">
            <div className="avatar">
              <img src={thomasAvatar} alt="" />
            </div>
            <p className="testimony">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <h5 className="name">Thomas S.</h5>
            <p className="title">Chief Operating Officer</p>
          </div>
          <div className="testimonial-box">
            <div className="avatar">
              <img src={jennieAvatar} alt="" />
            </div>
            <p className="testimony">
              Incredible end result. Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h5 className="name">Jennie F.</h5>
            <p className="title">Business Owner</p>
          </div>
        </div>
        <div className="page-grid-container2">
          <div className="grid-item1"></div>
          <div className="grid-item2"></div>
          <div className="grid-item3"></div>
          <div className="grid-item4"></div>
        </div>
      </div>
    </div>
  );
}
export default Page;

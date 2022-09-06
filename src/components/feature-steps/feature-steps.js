import "./feature-steps.css";
import icon1 from "../../assets/images/icon-1.png";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/Vector.png";
import group from "../../assets/images/group.png";

function FeatureSteps() {
  return (
    <div className="feature__container">
      <div className="feature__sub-container">
        <img src={icon1} alt="icon" />
        <p className="feature__name">Search</p>
        <p className="feature__text">
          Simply add a keyword or a term related to your business in the slogan
          maker search box. Wait for the magic to happen.
        </p>
      </div>
      <div className="feature__sub-container">
        <img src={icon2} alt="icon" />
        <p className="feature__name">Select</p>
        <p className="feature__text">
          Choose from thousands of options generated by the slogan maker that
          fit your needs.
        </p>
      </div>
      <div className="feature__sub-container">
        <div className="last__feature">
          <img src={icon3} alt="icon" />
          <img src={group} alt="icon-arrow" />
        </div>
        <p className="feature__name">Stand out</p>
        <p className="feature__text">
          Congrats on your new slogan. It's time to win the world!
        </p>
      </div>
    </div>
  );
}

export { FeatureSteps };

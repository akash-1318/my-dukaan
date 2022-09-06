import "./footer.css";
import logo from "../../assets/svgs/white.svg";
import pride from "../../assets/images/pride.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__list-container">
          <div className="list__sub-container">
            <ul className="footer__list">
              <li>Contact</li>
              <li>FAQs</li>
            </ul>
            <ul className="footer__list">
              <li>Tutorials</li>
              <li>Blog</li>
            </ul>
            <ul className="footer__list">
              <li>Privacy</li>
              <li>Banned Items</li>
            </ul>
            <ul className="footer__list">
              <li>About</li>
              <li className="flex">
                Jobs{" "}
                <span className="job__count flex">
                  <p>3</p>
                </span>
              </li>
            </ul>
            <ul className="footer__list">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer__hr" />
      <div className="footer__bottom">
        <p>Dukaan 2020, All rights reserved.</p>
        <div className="footer__bottom-right">
          <p>Made in </p>
          <img src={pride} alt="flag" />
        </div>
      </div>
    </footer>
  );
}

export { Footer };

import { socialIcons } from "../../utils/dummyData";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <div className="footer__logo-pack">
              <h2>Where Have You Been?</h2>
            </div>
            <p className="description">Dream | Travel | Explore</p>
          </div>

          <div className="copyright">
            <p>Copyright {year}, developed by marroos. All rights reserved. </p>
            <ul className="copyright__social">
              {socialIcons.map((item, index) => (
                <li className="copyright__social-icon" key={index}>
                  {item.icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

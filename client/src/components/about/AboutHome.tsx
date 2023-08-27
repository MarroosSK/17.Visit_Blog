import "./AboutHome.css";
import profilePic from "../../assets/profilePic.jpg";
import { socialIcons } from "../../utils/dummyData";
import { NavLink } from "react-router-dom";

const AboutHome = () => {
  return (
    <section className="about__home">
      <NavLink to="/about">
        <div className="about__home-wrapper">
          <div className="about__home-top">
            <h2>
              About <span style={{ color: "#fff" }}>Me</span>
            </h2>
            <img src={profilePic} alt="" />
          </div>
          <div className="about__home-bottom">
            <p>
              Hey there! I'm marroos, Slovak with a passion for adventure, the
              outdoors, and all things travel.
            </p>
          </div>

          <ul className="about__home-social">
            {socialIcons.map((item, index) => (
              <li className="about__home-social-icon" key={index}>
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </NavLink>
    </section>
  );
};

export default AboutHome;

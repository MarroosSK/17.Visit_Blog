import Marquee from "react-fast-marquee";
import "./GalleryHome.css";
import galleryImg from "../../assets/thanksImg.jpg";
import galleryImg2 from "../../assets/santorini.jpg";
import galleryImg3 from "../../assets/canyon.jpg";
import galleryImg4 from "../../assets/mountains.jpg";
import galleryImg5 from "../../assets/polynesia.jpg";
import galleryImg6 from "../../assets/suspension-bridge.jpg";
import galleryImg7 from "../../assets/utah.jpg";
import { NavLink } from "react-router-dom";

const GalleryHome = () => {
  return (
    <section className="gallery__home">
      <div className="container">
        <div className="gallery__home-wrapper">
          <div className="gallery__home-top">
            <h2>
              {" "}
              <span className="highlight">Gallery</span>
            </h2>
            <p>- Pictures from the World! -</p>
          </div>
          <div className="gallery__home-bottom">
            <NavLink to="/gallery">
              <Marquee>
                <img src={galleryImg} alt="" />
                <img src={galleryImg2} alt="" />
                <img src={galleryImg3} alt="" />
                <img src={galleryImg4} alt="" />
                <img src={galleryImg5} alt="" />
                <img src={galleryImg6} alt="" />
                <img src={galleryImg7} alt="" />
              </Marquee>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHome;

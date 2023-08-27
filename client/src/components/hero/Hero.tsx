import "./Hero.css";
import bgVideo from "../../assets/videoBg.mp4";

const Hero = () => {
  return (
    <section className="hero">
      {/* video */}
      <video className="hero-video" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="hero-pic"></div>
      <div className="hero__wrapper">
        <h2>Where Have You Been?</h2>
        <p>Dream | Travel | Explore</p>
        <a href="#blogs">
          <button className="primary__btn">Start Exploring</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;

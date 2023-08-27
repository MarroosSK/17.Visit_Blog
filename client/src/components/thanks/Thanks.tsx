import "./Thanks.css";
import thanksImg from "../../assets/thanksImg.jpg";
import { NavLink } from "react-router-dom";

const Thanks = () => {
  return (
    <section className="thanks">
      <div className="container">
        <div className="thanks__wrapper">
          <div className="thanks__left">
            <img src={thanksImg} alt="" />
          </div>

          <div className="thanks__right">
            <h2>
              Thanks for <span style={{ color: "#fff" }}>Looking</span>
            </h2>
            <p>
              I'm marroos, the travel blogger behind this website. I started
              this travel blog in 2023 to document my own international travels
              and help others learn how to travel the world on a budget. I'm
              Slovak and I write about all kinds of destinations. I wasn't
              everywhere, but it's on my List. I hope this world travel blog can
              help and inspire you in your own journeys as well!
            </p>
            <NavLink to="/about">
              <button className="secondary__btn">Read More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thanks;

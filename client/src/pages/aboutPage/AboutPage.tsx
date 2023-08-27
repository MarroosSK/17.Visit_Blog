import "./AboutPage.css";
import { galleryData, socialIcons } from "../../utils/dummyData";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
  return (
    <section className="aboutPage">
      <div className="aboutPage-hero">
        <h2>About</h2>
      </div>
      <div className="container">
        <div className="aboutPage__wrapper">
          <div className="aboutPage-top">
            <div className="aboutPage-left">
              <h5>marroos</h5>
              <p>
                I'm marroos, the travel blogger behind this website. I started
                this travel blog in 2023 to document my own international
                travels and help others learn how to travel the world on a
                budget. I'm Slovak and I write about all kinds of destinations.
                I wasn't everywhere, but it's on my List. I hope this world
                travel blog can help and inspire you in your own journeys as
                well!
              </p>
              <ul className="aboutPage-left-social">
                {socialIcons.map((item, index) => (
                  <li className="aboutPage-left-social-icon" key={index}>
                    {item.icon}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aboutPage-right">
              {galleryData.map((galleryImg) => (
                <img src={galleryImg.img} key={galleryImg.id} />
              ))}
            </div>
          </div>
          <div className="aboutPage-bottom">
            <div className="aboutPage-bottom-left">
              {galleryData.reverse().map((galleryImg) => (
                <img src={galleryImg.img} key={galleryImg.id} />
              ))}
            </div>
            <div className="aboutPage-bottom-right">
              <h5>Collabs</h5>
              <p>
                As an experienced traveler with a modest budget and a passion
                for hiking and photography, my work meshes with millennials and
                young people, backpackers, couples, and other important travel
                demographics.
              </p>
              <p>
                Together with your brand, we can create engaging experiences
                that will reach like-minded travelers and help you sell your
                products or promote your travel destination. This blog gets
                350,000 monthly page views and growing. My goal is to create
                unique and fresh travel content and photos from around the
                world, with an emphasis on quality over quantity.
              </p>
              <NavLink to="/contact">
                <button className="primary__btn">Let's Talk</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

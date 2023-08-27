import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__top">
            <h2>
              {" "}
              <span className="highlight">Newsletter</span>
            </h2>
            <p>- Subscribe to my newsletter and stay updated! -</p>
          </div>
          <div className="newsletter__bottom">
            <input type="text" placeholder="Email..." required />
            <button className="primary__btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

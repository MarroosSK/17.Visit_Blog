import "./Contact.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__wrapper">
        <div className="contact__text">
          <h2 style={{ color: "#fff" }}>
            Get in <span className="highlight">Touch</span>
          </h2>
          <p style={{ color: "#fff" }}>
            Feel free to{" "}
            <NavLink to="/contact" className="contact__link">
              contact me
            </NavLink>
            !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

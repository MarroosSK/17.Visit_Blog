import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contactPage">
      <div className="contactPage-hero">
        <h2>Contact</h2>
      </div>
      <div className="container">
        <div className="contactPage__wrapper">
          <form className="contactPage__form">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Subject" required />
            <textarea name="" id="" rows={4}></textarea>
            <button className="secondary__btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

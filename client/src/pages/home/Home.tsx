import Blogs from "../../components/blogs/Blogs";
import Hero from "../../components/hero/Hero";
import Destinations from "../../components/destinations/Destinations";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Contact from "../../components/contact/Contact";
import RecentBLogs from "../../components/recentBlogs/RecentBLogs";
import AboutHome from "../../components/about/AboutHome";
import "./Home.css";
import Thanks from "../../components/thanks/Thanks";
import GalleryHome from "../../components/gallery/GalleryHome";

const Home = () => {
  return (
    <section>
      <Hero />
      <Blogs />
      <Destinations />
      <div className="container about__recent__box">
        <div className="about__recent__box-left">
          <RecentBLogs />
        </div>
        <div className="about__recent__box-right">
          <AboutHome />
        </div>
      </div>
      <Contact />
      <GalleryHome />
      <Thanks />
      <NewsLetter />
    </section>
  );
};

export default Home;

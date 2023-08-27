import { useContext } from "react";
import "./Destinations.css";
import { NavLink, useNavigate } from "react-router-dom";
import { destinationsData } from "../../utils/dummyData";
import { SearchContext } from "../../context/searchContext";

const Destinations = () => {
  const navigate = useNavigate();
  const { categoryPicked, setCategoryPicked } = useContext(SearchContext);

  const handleCategory = (cat: string) => {
    setCategoryPicked(cat);
    if (categoryPicked.length !== 0) {
      navigate("/blogs");
    }
  };
  return (
    <section className="destinations">
      <div className="container">
        <div className="destinations__wrapper">
          <div className="destinations__top">
            <h2>
              {" "}
              <span className="highlight">Destinations</span>
            </h2>
            <p>- Blog Categories -</p>
          </div>
          <div className="destinations__bottom">
            {destinationsData.map((blog) => (
              <div
                key={blog.id}
                className="destinations__box"
                onClick={() => handleCategory(blog.destinationName)}
              >
                <img src={blog.destinationImg} alt="" />
                <h6>{blog.destinationName}</h6>
              </div>
            ))}
          </div>
          <NavLink to="/blogs">
            <button className="primary__btn">See More</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Destinations;

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "./Blogs.css";
import { NavLink } from "react-router-dom";
import { BlogTypes } from "../../types/types";

const Blogs = () => {
  const { data, isLoading } = useQuery(["blogs"], () =>
    axios
      .get("https://17-visit-blog-xhqm.vercel.app/blogs", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data;
      })
  );

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: "auto",
        }}
      >
        Loading...
      </div>
    );

  return (
    <section id="blogs" className="blogs">
      <div className="container">
        <div className="blogs__wrapper">
          <div className="blogs__top">
            <h2>
              {" "}
              <span className="highlight">Blogs</span>
            </h2>
            <p>- Popular Blog Posts -</p>
          </div>
          <div className="blogs__bottom">
            {data &&
              data.map((blog: BlogTypes) => (
                <div key={blog.id} className="blogs__box">
                  <NavLink to={`/blogs/${blog.id}`}>
                    <img
                      src={blog.imageUrl}
                      alt=""
                      height="250px"
                      width="250px"
                    />
                    <h6>{blog.title}</h6>
                  </NavLink>
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

export default Blogs;

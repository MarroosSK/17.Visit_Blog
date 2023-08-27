import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import "./RecentBlogs.css";
import { NavLink } from "react-router-dom";
import { BlogTypes } from "../../types/types";

const RecentBlogs = () => {
  const { data } = useQuery(["blogs"], () =>
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

  return (
    <section className="recent">
      <div className="recent__wrapper">
        <div className="recent__top">
          <h2>
            {" "}
            <span className="highlight">Recently</span> added
          </h2>
          <p>- Latest Blogs -</p>
        </div>
        <div className="recent__bottom">
          {data &&
            data.map((blog: BlogTypes) => (
              <div key={blog.id} className="recent__box">
                <img src={blog.imageUrl} alt="" height="250px" width="200px" />
                <h6>{blog.title}</h6>
                <p>{moment(blog.createdAt).fromNow()}</p>
                <NavLink to={`/blogs/${blog.id}`}>
                  <button className="secondary__btn">Read More</button>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;

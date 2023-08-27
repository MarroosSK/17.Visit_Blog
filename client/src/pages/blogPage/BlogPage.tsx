import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import DOMPurify from "dompurify";
import "./BlogPage.css";

const BlogPage = () => {
  const { id } = useParams();

  const { data } = useQuery(["blog"], () =>
    axios
      .get(`https://17-visit-blog-xhqm.vercel.app/blogs/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data;
      })
  );

  return (
    <section className="blogPage">
      {data && (
        <div className="container" key={data.id}>
          <div className="blogPage-top">
            <img src={data.imageUrl} alt="" />
            <h6>{data.title}</h6>
          </div>
          <div className="blogPage-middle">
            <div className="blogPage-middle-top">
              <h5>{data.author}</h5>
              <p>{moment(data.createdAt).fromNow()}</p>
            </div>
            <div className="blogPage-middle-bottom">
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.text),
                }}
              ></p>
            </div>
          </div>
          <div className="blogPage-bottom">
            {/* <h5 className="highlight">Similiar</h5> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPage;

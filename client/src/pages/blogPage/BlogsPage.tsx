import { useContext } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "./BlogsPage.css";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";
import { BlogTypes } from "../../types/types";

const BlogsPage = () => {
  const { searchWord, setSearchWord, categoryPicked, setCategoryPicked } =
    useContext(SearchContext);

  //use query
  //const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["blogs"], () =>
    axios
      .get(
        "http://localhost:3001/blogs", // Previesť dáta na JSON reťazec
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        return res.data;
      })
  );
  /*
  //delete
  const deleteMutation = useMutation(
    (postId) => {
      return axios.delete("http://localhost:3001/blogs/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["blogs"]);
      },
    }
  );

  const handleDelete = (blogId: string) => {
    deleteMutation.mutate(blogId);
  };
*/
  // Filter data
  let filteredData: BlogTypes[] = [];
  if (data) {
    filteredData = data.filter(
      (blog: BlogTypes) =>
        blog.title.toLowerCase().includes(searchWord.toLowerCase()) &&
        (categoryPicked === "" ||
          blog.category.toLowerCase() === categoryPicked.toLowerCase())
    );
  }

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
    <section className="blogsPage">
      <div className="blogsPage-hero">
        <h2>Blogs</h2>
      </div>
      <div className="container">
        <div className="blogsPage__wrapper">
          <div className="blogsPage__top">
            <input
              type="text"
              placeholder="Search Blog"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <select
              value={categoryPicked}
              onChange={(e) => setCategoryPicked(e.target.value)}
            >
              <option value="">All</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
            </select>
          </div>
          <div className="blogsPage__bottom">
            {filteredData &&
              filteredData.map((blog: BlogTypes) => (
                <div key={blog.id} className="blogsPage__box">
                  <p>{blog.title}</p>
                  <h5>{blog.category}</h5>
                  <NavLink to={`/blogs/${blog.id}`}>
                    <img
                      src={blog.imageUrl}
                      alt=""
                      height="250px"
                      width="250px"
                    />
                  </NavLink>
                  <button
                    //onClick={() => handleDelete(blog.id)}
                    className="danger__btn"
                    disabled
                  >
                    delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;

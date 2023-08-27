import { useState, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdOutlineCloudUpload } from "react-icons/md";
//quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Create.css";

export interface BlogDataType {
  title: string;
  text: string;
  author: string;
  category: string;
  imageUrl: File | null;
}
const Create = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [blogData, setBlogData] = useState<BlogDataType>({
    title: "",
    text: "",
    author: "",
    category: "",
    imageUrl: null,
  });

  const postDataMutation = useMutation(
    async () => {
      const formData = new FormData();

      formData.append("title", blogData.title);
      formData.append("text", blogData.text);
      formData.append("author", blogData.author);
      formData.append("category", blogData.category);
      if (blogData.imageUrl) {
        formData.append("image", blogData.imageUrl);
      }
      await axios.post("https://17-visit-blog-xhqm.vercel.app/blogs", formData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["blogs"]);
        navigate("/");
      },
    }
  );

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setBlogData({
        ...blogData,
        imageUrl: e.target.files[0],
      });
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    postDataMutation.mutate();
    setBlogData({
      title: "",
      text: "",
      author: "",
      category: "",
      imageUrl: null,
    });
  };

  return (
    <section className="create__blog">
      <div className="create-hero">
        <h2>Create</h2>
      </div>
      <div className="container">
        <div className="create__wrapper">
          <div className="create-top">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              value={blogData.author}
              onChange={handleInputChange}
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={blogData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="create-middle">
            <ReactQuill
              theme="snow"
              value={blogData.text}
              onChange={(value) => setBlogData({ ...blogData, text: value })}
              placeholder="text here..."
              style={{ height: "300px" }}
              id="editor-container"
            />
          </div>
          <div className="create-bottom">
            <label>Pick Picture</label>
            <label htmlFor="file">
              <MdOutlineCloudUpload className="icon" />
            </label>
            <input
              type="file"
              id="file"
              name="image"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
              required
            />
            {blogData.imageUrl && (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(blogData.imageUrl)}
                  alt="Image Preview"
                />
              </div>
            )}
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={blogData.category}
              onChange={handleInputChange}
            >
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            style={{ margin: "20px" }}
            className="secondary__btn"
          >
            Create
          </button>
        </div>
      </div>
    </section>
  );
};

export default Create;

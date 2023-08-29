import { useState, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdOutlineCloudUpload } from "react-icons/md";
import DOMPurify from "dompurify";
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
  const [showValidation, setShowValidation] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageUrl(e.target.files[0]);
    }
  };

  const postDataMutation = useMutation(
    async () => {
      const sanitizedText = DOMPurify.sanitize(text);
      const formData = new FormData();

      formData.append("title", title);
      formData.append("text", sanitizedText);
      formData.append("author", author);
      formData.append("category", category);
      if (imageUrl) {
        formData.append("image", imageUrl);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!author || !title || !category || !imageUrl || !text) {
      setShowValidation(true);
      return;
    }

    postDataMutation.mutate();
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            {showValidation && !author && (
              <p className="validation-message">Author is required.</p>
            )}
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            {showValidation && !title && (
              <p className="validation-message">Title is required.</p>
            )}
          </div>
          <div className="create-middle">
            <label htmlFor="text">Text</label>
            <ReactQuill
              theme="snow"
              value={text}
              onChange={setText}
              placeholder="text here..."
              id="editor-container"
            />
            {showValidation && !text && (
              <p className="validation-message">Text is required.</p>
            )}
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
            {showValidation && !imageUrl && (
              <p className="validation-message">Image is required.</p>
            )}
            {imageUrl && (
              <div className="image-preview">
                <img src={URL.createObjectURL(imageUrl)} alt="Image Preview" />
              </div>
            )}
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">-- pick --</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
            </select>
            {showValidation && !category && (
              <p className="validation-message">Category is required.</p>
            )}
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

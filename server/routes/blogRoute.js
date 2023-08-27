import express from "express";
import {
  getAllBlogs,
  get1Blog,
  createBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: "/tmp",
  filename: function (req, file, cb) {
    const modifiedFilename = file.originalname.replace(/\s+/g, "");
    cb(null, Date.now() + modifiedFilename);
  },
});

const upload = multer({
  storage: storage,
});

const blogRoute = express.Router();

blogRoute.get("/blogs", getAllBlogs);
blogRoute.get("/blogs/:id", get1Blog);
blogRoute.post("/blogs", upload.single("image"), createBlog);
blogRoute.delete("/blogs/:id", deleteBlog);

export default blogRoute;

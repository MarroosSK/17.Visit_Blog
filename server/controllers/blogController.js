import { PrismaClient } from "@prisma/client";
import moment from "moment";
import cloudinary from "cloudinary";
import fs from "fs";

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_PASSWORD,
  api_secret: process.env.CLOUDINARY_SECRET,
});

/*
    GET ALL
*/

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (blogs.length === 0) {
      return res.status(404).json("Blogs not found!");
    }

    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/*
    GET 1 BLOG
*/

export const get1Blog = async (req, res) => {
  const userIq = req.params.id;
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: userIq },
    });

    if (!blog) {
      return res.status(404).json("Blog not found!");
    }

    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/*
    CREATE BLOG
*/
const validCategories = [
  "Africa",
  "Asia",
  "Australia",
  "Europe",
  "North America",
  "South America",
];

export const createBlog = async (req, res) => {
  console.log("Create Blog Request Received");
  const { title, text, author, category } = req.body;
  console.log("Received text:", req.body.text);
  console.log("Received category:", category);

  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: "Invalid category." });
  }

  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided." });
    }
    // Upload the image to Cloudinary
    const { path } = req.file;
    const result = await cloudinary.uploader.upload(path);
    const imgUrl = result.secure_url;

    // Delete the uploaded file from the server's temp folder
    fs.unlinkSync(path);

    // Create a new post with the image URL
    const newBlog = await prisma.blog.create({
      data: {
        title,
        text,
        author,
        imageUrl: imgUrl, // Save the Cloudinary URL as the img field
        createdAt: moment().toISOString(),
        category,
      },
    });

    return res.status(200).json(newBlog);
  } catch (error) {
    console.error("Error Creating Blog:", error);
    return res.status(500).json({ error: "Error while adding a new blog." });
  }
};

/*
    UPDATE BLOG
*/

/*
    DELETE BLOG
*/
export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const delete1Blog = await prisma.blog.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json("Blog has been deleted.");
  } catch (error) {
    return res.status(500).json(error);
  }
};

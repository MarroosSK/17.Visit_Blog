import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import blogRoute from "./routes/blogRoute.js";
dotenv.config();

const port = process.env.PORT || 3002;
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3001",
      "http://localhost:3002",
      "https://17-visit-blog-xhqm.vercel.app",
      "https://17-visit-blog.vercel.app",
    ],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", blogRoute);
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

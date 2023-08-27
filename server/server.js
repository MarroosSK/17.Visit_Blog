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
      "https://api-blog-yourself.vercel.app",
      "https://blog-yourself.vercel.app",
    ],
    credentials: true,
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

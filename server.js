import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

//Basic Middlewares
app.use(cors()); // allow cross domains
app.use(morgan("dev")); // show logs
app.use(express.json()); // for read body

//Routing GET, POST, PUT, PATCH, DELETE
// http://localhost:8000
// app.get("/", (req, res) => {
//   // code body
//   res.json({ message: "Hei ! CC20" });
// });
app.use("/api", userRouter);
app.use("/auth", authRouter);

// Error Handling
app.use((err, req, res, next) => {
  //code body
  console.log(err.message);
  res
    .status(err.code || 500)
    .json({ message: err.message || "Something Wrong!!" });
});

const PORT = 8000;
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

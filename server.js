import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";

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

const PORT = 8000;
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

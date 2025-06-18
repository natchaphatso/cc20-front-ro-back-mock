import express from "express";

//Controllers
import {
  createUser,
  deleteUser,
  listUser,
  readUser,
  updateRoleUser,
} from "../controllers/user.controller.js";
//Middleware
import { authCheck } from "../middlewares/auth.middleware.js";

const router = express.Router();

// ENDPOINT http://localhost:8000/api/users
router.get("/users", authCheck, listUser);
router.get("/user", readUser);
router.post("/user", createUser);
router.patch("/user/role/:id", updateRoleUser);
router.delete("/user/:id", deleteUser);

// router.get("/users", (req, res) => {
//   //code body
//   res.json({ message: "This is GET Users" });
// });

// router.get("/user", (req, res) => {
//   //code body
//   res.json({ message: "This is GET user" });
// });

// router.post("/user", (req, res) => {
//   res.json({ message: "This is POST user" });
// });

// router.patch("/user/role/:id", (req, res) => {
//   //coed body
//   // console.log(req.params.id);
//   const { id } = req.params;
//   console.log(id);
//   res.json({ mesaage: "This is PATCH role user" });
// });

// router.delete("/user/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   res.json({ message: `This is DELETE user ${id}` });
// });

// Export
export default router;

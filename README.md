# Server

## Step 1 Setup Server

```bash
npm init -y
npm install express

### express for read body
```

## Step 2 Setup Basic Middleware

```bash
npm install cors morgan nodemon

### cors for allow cross domains
### morgan for show log request (GET, POST, PUT, PATCH)
### nodemon for auto run server when saved
```

## Step 3 Routing

````bash
import express from "express";

## Controllers
```bash
import {
  createUser,
  deleteUser,
  listUser,
  readUser,
  updateRoleUser,
} from "../controllers/user.controller.js";
````

```bash
## Middleware
import { authCheck } from "../middlewares/auth.middleware.js";

const router = express.Router();
## ENDPOINT http://localhost:8000/api/users
router.get("/users", authCheck, listUser);
router.get("/user", readUser);
router.post("/user", createUser);
router.patch("/user/role/:id", updateRoleUser);
router.delete("/user/:id", deleteUser);
```

## Git

```bash
git add .
git commit -m "message"
git push
```

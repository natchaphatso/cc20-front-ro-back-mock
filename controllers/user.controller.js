import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const listUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findMany({
      omit: {
        password: true,
      },
    });
    console.log(user);
    //1. Check Email
    res.json({ message: "This is List All User", result: user });
  } catch (error) {
    next(error);
  }
};

export const updateRoleUser = async (req, res, next) => {
  try {
    // 1. Read Params & Body
    const { id } = req.params;
    const { role } = req.body;
    console.log(id, role);

    res.json({ message: "This is Patch(Update) User" });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ message: `This is Delete User ${id}` });
  } catch (error) {
    next(error);
  }
};

export const readUser = (req, res) => {
  res.json({ message: "This is Read User" });
};

export const createUser = (req, res) => {
  res.json({ message: "This is Post(Create) User" });
};

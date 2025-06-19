import { createError } from "../utils/createError.js";
import jwt from "jsonwebtoken";

export const authCheck = (req, res, next) => {
  try {
    //TODO Overviews
    /*
      1.Check Header
      2. Split Token Bearer
      3. Verify JWT (JsonWebToken)
      4. Create req.user
    */
    const header = req.headers.authorization;
    // console.log(header);
    if (!header) {
      createError(401, "Token is missing !!");
    }

    // 2. Split Token
    const token = header.split(" ")[1];
    console.log(token);

    // 3. Verify Token
    jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
      console.log(error);
      console.log(decode);
      if (error) {
        createError(401, "Token is Invalid !");
      }

      req.user = decode;
      next();
    });
  } catch (error) {
    next(error);
  }
};

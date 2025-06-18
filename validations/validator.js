import { object, ref, string } from "yup";

//yup
export const registerSchema = object({
  email: string().email("Email incorrect").required("Please enter email"),
  name: string().min(2, "Name must be longer than 2 letters"),
  password: string().min(6, "Password must be longer than 6 letters"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password not match !"
  ),
});

export const loginSchema = object({
  email: string().email("Email incorrect").required("Please enter email"),
  password: string().min(6, "Password must be longer than 6 letters"),
});

export const validate = (schema) => async (req, res, next) => {
  //code body
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    //merge a lot of error to one array
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(" , ");
    console.log(errTxt);
    const mergeErr = new Error(errTxt);
    next(mergeErr);
  }
};

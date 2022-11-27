import { model, Schema } from "mongoose";
import { body } from "express-validator";
import IUser from "../types/users.type";

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export const userSchemaValidation = [
  body(["username", "email", "password"])
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Required field is empty"),
  body("username")
    .isAlphanumeric()
    .withMessage("Username can contain only letters and numbers"),
  body("email")
    .isEmail()
    .withMessage("Not valid Email address"),
];

const User = model<IUser>("User", userSchema);

export default User;

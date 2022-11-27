import { model, Schema } from "mongoose";
import { body } from "express-validator";
import ITodo from "../types/todos.type";

const todoSchema = new Schema<ITodo>({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  }
});

export const todoSchemaValidation = [
  body(["title", "description", "year"])
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("Required field is empty"),
  body("description")
    .isLength({ max: 200 })
    .withMessage("Description max length is 200 symbols"),
  body("year")
    .isLength({ min: 4, max: 4 })
    .withMessage("Year length is 4 symbols"),
];

const Todo = model<ITodo>("Todo", todoSchema);

export default Todo;

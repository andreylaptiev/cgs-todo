import { Router } from "express";
import tryCatchWrapper from "../../middleware/tryCatchWrapper";
import validationHandler from "../../middleware/validationHandler";
import { userSchemaValidation } from "../../models/User";
import userController from "../../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post(
  "/register",
  userSchemaValidation,
  validationHandler,
  tryCatchWrapper(userController.registerUser.bind(userController))
);

userRouter.post(
  "/login",
  tryCatchWrapper(userController.loginUser.bind(userController))
);

userRouter.delete(
  "/logout",
  tryCatchWrapper(userController.logoutUser.bind(userController))
);

export default userRouter;

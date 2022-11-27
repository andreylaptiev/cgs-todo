import { Router } from "express";
import isExist from "../../middleware/isExist";
import tryCatchWrapper from "../../middleware/tryCatchWrapper";
import validationHandler from "../../middleware/validationHandler";
import Todo, { todoSchemaValidation } from "../../models/Todo";

import todoController from "../../controllers/todo.controller";

const todosRouter: Router = Router();

todosRouter.get(
  "/",
  tryCatchWrapper(todoController.getAllTodo.bind(todoController))
);

todosRouter.get(
  "/:id",
  isExist(Todo),
  tryCatchWrapper(todoController.getOneTodo.bind(todoController))
);

todosRouter.post(
  "/create",
  todoSchemaValidation,
  validationHandler,
  tryCatchWrapper(todoController.createOneTodo.bind(todoController))
);

todosRouter.put(
  "/update/:id",
  isExist(Todo),
  todoSchemaValidation,
  validationHandler,
  tryCatchWrapper(todoController.updateOneTodo.bind(todoController))
);

todosRouter.delete(
  "/delete/:id",
  isExist(Todo),
  tryCatchWrapper(todoController.deleteOneTodo.bind(todoController))
);

export default todosRouter;

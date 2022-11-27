import { Response, Request, NextFunction } from "express";

const tryCatchWrapper = (controller: Function, ) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await controller(req, res, next);
      res.send(result);
    } catch (err) {
      next(err);
    }
  };
};

export default tryCatchWrapper;

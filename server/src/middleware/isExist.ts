import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";

const isExist = <T>(model: Model<T>) => {
  return async (req: Request, _: Response, next: NextFunction) => {
    const { id } = req.params;
    const doc = await model.findById(id);
    if (!doc) {
      next(new Error(`No document with id ${id}`));
    }
    next();
  };
};

export default isExist;

import { NextFunction, Response, Request } from "express";

const errorHandler = (
  err: Error, _: Request, res: Response, _next: NextFunction
) => {
  res.status(400).json({error: err.message});
};

export default errorHandler;

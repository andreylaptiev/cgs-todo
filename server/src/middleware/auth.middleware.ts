import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "config";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) throw new Error("Authentication error");
  const token = req.headers.authorization.split(" ")[1];
  const userData = jwt.verify(token, config.get("jwtSecret"));
  res.locals.user = userData;
  next();
};

export default authMiddleware;

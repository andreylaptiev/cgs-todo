import jwt from "jsonwebtoken";
import config from "config";
import IUser from "users.type";

const signToken = (user: IUser) => {
  const { _id,  username, email } = user;
  const token = jwt.sign(
    {_id, username, email},
    config.get("jwtSecret"),
    {expiresIn: "24h"}
  );
  return token;
};

export default signToken;

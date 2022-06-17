import { Response, Request } from "express";
import bcrypt from "bcrypt";
import config from "config";
import UserService from "../services/user.service";
import signJwtToken from "../utils/signJwtToken";

class UserController {
  constructor(private userService: UserService) {}

  async registerUser(req: Request, _: Response) {
    const data = req.body;
    data.password = await bcrypt.hash(
      data.password, config.get("userPasswordHashSault")
    );
    const user = await this.userService.createUser(data);
    const token = signJwtToken(user);
    return token;
  }

  async loginUser(req: Request, _: Response) {
    const { username, password } = req.body;
    const user = await this.userService.findByUsername(username);
    if (!user) throw new Error("No user found");
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Wrong password");
    const token = signJwtToken(user);
    return token;
  }

  async logoutUser(_req: Request, _res: Response) {
    return {message: "Loged Out"};
  }
}

const userController = new UserController(new UserService);
export default userController;

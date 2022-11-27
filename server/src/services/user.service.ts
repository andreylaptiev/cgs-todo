import User from "../models/User";
import IUser from "../types/users.type";

export default class UserService {
  async createUser(data: IUser) {
    const doc = {...data};
    const query = User.create(doc);
    return query;
  }

  async findByUsername(username: string) {
    const query = await User.findOne({ username });
    return query;
  }
}

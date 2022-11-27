import HttpService from './http.service';
import { IUserLogin, IUserRegister } from '../types/user.type';

class UserService extends HttpService {
  constructor() {
    super();
  }

  async register(data: IUserRegister) {
    return await this.post({ url: 'user/register', data })
        .then((res) => localStorage.setItem('token', res.data));
  }

  async login(data: IUserLogin) {
    return await this.post({ url: 'user/login', data })
        .then((res) => localStorage.setItem('token', res.data));
  }

  async logout() {
    return await this.delete({ url: 'user/logout' })
        .then(() => localStorage.removeItem('token'));
  }
};

export default new UserService;

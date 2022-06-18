export interface IUserRegister {
  username: string;
  email: string;
  password: string;
  verifyPassword: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

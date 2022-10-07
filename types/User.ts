import { IAuthUser } from "./interfaces";

export class User {
  public id: string = '';
  public username: string = '';
  public token: string | null = null;

  constructor(user: IAuthUser) {
    this.setUser(user)
  }

  public setUser(user: IAuthUser) {
    this.id = user.id
    this.username = user.username

    if (user.token) {
      this.token = user.token
    }
  }

  public getUser(): IAuthUser {
    return {
      id: this.id,
      username: this.id,
      token: this.token
    }
  }
}
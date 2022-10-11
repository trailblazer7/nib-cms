import { IAuthUser } from "./interfaces";

type PropType = string | null

export class User {
  public id: PropType = null
  public username: PropType = null
  public token: PropType = null

  constructor(user: IAuthUser) {
    this.set(user)
  }

  public set(user: IAuthUser) {
    this.id = user.id
    this.username = user.username

    if (user.token) {
      this.token = user.token
    }
  }

  public reset() {
    this.id = ''
  }

  public get(): IAuthUser {
    return {
      id: this.id as string,
      username: this.id as string,
      token: this.token as string
    }
  }
}
import { fetchWrapper } from "../helpers"
import { IRegUser } from "../types"


const login = (username: string, password: string) => {
  //fetch('./api/')  
}

const register = async (regData: IRegUser) => {
  return fetchWrapper.post('/api/users/register', regData)
}

export const userService = {
  get userValue() { return {token: null} },
  login,
  register
}


import { IRegUser } from "../types"


const login = (username: string, password: string) => {
  //fetch('./api/')  
}

const register = async (regData: IRegUser) => {
  const response = await fetch('/api/setup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(regData),
  })

  const data = await response.json()

  return data
}

export const userService = {
  login,
  register
}


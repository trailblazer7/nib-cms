import { BehaviorSubject } from "rxjs"
import { fetchWrapper } from "../helpers"
import { IRegUser } from "../types"

const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') as string) : null
// State of user
const userSubject = new BehaviorSubject(user)
const authorizedSubject = new BehaviorSubject(false)

const login = async (email: string, password: string) => {
  return fetchWrapper.post('/api/users/login', {email, password})
}

const logout = () => {
  userSubject.next(null)
  authorizedSubject.next(false)
  localStorage.removeItem('user')
}

const register = async (regData: IRegUser) => {
  return fetchWrapper.post('/api/users/register', regData)
}

export const userService = {
  user: userSubject,
  get userValue() { return userSubject.value },
  authorized: authorizedSubject,
  get authorizedValue() { return authorizedSubject.value },
  login,
  logout,
  register
}


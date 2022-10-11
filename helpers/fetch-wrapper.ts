import { userService } from "../services"
import { startWith } from "../utils"

const authHeaders = (url: string) => {
  const user = userService.userValue
  const isLoggedIn = user && user.token
  const isApiUrl = startWith(url, '/url/')

  if (isLoggedIn && isApiUrl) {
    return {
      Authorization: `Bearer ${user.token}`
    }
  } else {
    return {};
  }
}

const post = async (url: string, body: any) => {
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', ...authHeaders(url) as HeadersInit
    },
    credentials: 'include',
    body: JSON.stringify(body),
  }

  return fetch(url, requestOptions)
}

const get = () => { }
const put = () => { }
const _delete = () => { }

export const fetchWrapper = {
  post,
  get,
  put,
  delete: _delete
}
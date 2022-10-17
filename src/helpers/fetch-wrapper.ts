import { userService } from "../services"

const authHeaders = (url: string) => {
  const user = userService.userValue
  const isLoggedIn = user && user.token
  const isApiUrl = url.startsWith('/api/')

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

const get = (url: string, body: any) => { 
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', ...authHeaders(url) as HeadersInit
    },
    credentials: 'include',
  }

  return fetch(url, requestOptions)
}
const put = () => { }
const _delete = () => { }

export const fetchWrapper = {
  post,
  get,
  put,
  delete: _delete
}
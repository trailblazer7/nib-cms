import { useEffect, useState } from "react"
import { userService } from "../services"

export const useAuthorized = () => {
  const [authorized, setAuthorized] = useState<boolean>()

  useEffect(() => {
    const subscription = userService.authorized.subscribe((isAuth) => {
      setAuthorized(isAuth)
    })

    return () => {
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [])

  const switchAuth = (isAuth:boolean) => {
    userService.authorized.next(isAuth)
  }

  return [authorized, switchAuth]
}
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { addInitStyles } from '../utils'
import { useRouter } from 'next/router'
import { userService } from '../services'
import { useAuthorized } from '../helpers'

function MyApp({ Component, pageProps }: AppProps) {
  const [authorized, setAuthorized] = useAuthorized()
  const router = useRouter()

  useEffect(() => {
    addInitStyles()  
    authCheck(router.asPath)

    const hideContent = () => setAuthorized(false)
    router.events.on('routeChangeStart', hideContent)
    router.events.on('routeChangeComplete', authCheck)

    return () => {
      router.events.off('routeChangeComplete', authCheck)
      router.events.off('routeChangeStart', hideContent)
    }
  }, [])

  const authCheck = (url:string) => {
    //const publicPuthes = ['/admin', '/admin/register']
    //const path = url.split('?')[0]

    // if no user and no public path -> set not authorized
    if (!userService.userValue) {
      setAuthorized(false)
    } else {
      setAuthorized(true)
    }
  }

  return <Component {...pageProps} />
}

export default MyApp

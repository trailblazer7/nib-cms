import Router from 'next/router'
import React, { MouseEventHandler, useRef, useState } from 'react'
import { userService } from '../../services'

interface IProps {
  clickHandler: MouseEventHandler
}

export const RegisterLending = ({ clickHandler }: IProps) => {
  return (
    <div className="bg-gray-50 m-20">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">Start installing Nib CMS.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              onClick={clickHandler}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export const RegisterForm = () => {

  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const onCreate = () => {
    // TODO: better validation

    setError(null)

    const isFormFilled = username && email && password && confirmPassword
    const passwordMatches = password === confirmPassword
    const action = async () => {
      setIsLoading(true)
      const response = await userService.register({
        username,
        email,
        password
      })

      if ( response.error ) {
        setError(response.error)
      } else {
        Router.push('/admin')
      }

      setIsLoading(false)
    }

    if (!isFormFilled) return setError("Fill in all the fields.")
    if (!passwordMatches) return setError("Passwords do not match.")

    action()
  }

  return (
    <div className="py-12 px-4 mx-auto max-w-md">
      <div className="overflow-hidden shadow">
        <div className="bg-white px-4 py-5 sm:p-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            <span className="block">Create your account</span>
          </h2>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="text"
                name="emailAddress"
                id="emailAddress"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="address-level1"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autoComplete="postal-code"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            {!!error && <div className="col-span-6 text-red-600 text-xs">{error}</div>}
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            onClick={onCreate}
            disabled={isLoading}
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {isLoading ? 'Creating...' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  )
}

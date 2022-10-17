import React, { useState } from 'react'
import { ERROR_EMPTY_FIELDS } from '../../constants'
import { fetchWrapper } from '../../helpers'
import { Button } from '../forms/Button'

export default function AddPost() {

  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [error, setError] = useState<any>(null)

  const resetError = () => (error && setError(null))

  const onAdd = async () => {
    resetError()

    if (!title || !content) {
      return setError(ERROR_EMPTY_FIELDS)
    }

    try {
      const response = await fetchWrapper.post('/api/post/add', { title, content })

      if (response.ok) {
        location.reload()
      } else {
        setError(response.statusText)
      }
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div className="mt-4 p-3 bg-slate-50 rounded-md">
      <div className="mb-3">
        <label htmlFor="post-title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          name="post-title"
          id="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete="given-name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Post title"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="post-text" className="block text-sm font-medium text-gray-700">
          Text
        </label>
        <div className="mt-1">
          <textarea
            id="post-text"
            name="post-text"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Post text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {!!error && <div className="col-span-6 text-red-600 text-xs">{error}</div>}
      </div>
      <Button label='Add New' onClick={onAdd} theme="light" />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { ERROR_FETCH_POSTS } from '../../constants'
import { fetchWrapper } from '../../helpers'
import prisma from '../../lib/prisma'

interface IPost {
  id:number,
  title:string,
  content:string,
  published:boolean,
  authorId?:string
}

export default function PostList() {

  const [posts, setPosts] = useState<Array<IPost>>([])

  const fetchPosts = async () => {
    try {
      const response = await fetchWrapper.get('/api/post', {})

      if (response.ok) {
        const posts = await response.json()
        setPosts(posts)
      } else {
        console.log(ERROR_FETCH_POSTS, response.statusText)
      }
    } catch (error) {
      console.log(ERROR_FETCH_POSTS, error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.id}
          className="relative rounded-md p-3 hover:bg-gray-100"
        >
          <h3 className="text-sm font-medium leading-5">
            {post.title}
          </h3>
          <div className="text-sm text-gray-700 leading-5">{post.content}</div>

          <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
            <li>{post.published ? 'published' : 'unpublished'}</li>
          </ul>

          <a
            href="#"
            className="absolute inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
          />
        </li>
      ))}
    </ul>
  )
}

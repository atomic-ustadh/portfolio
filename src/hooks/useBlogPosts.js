import { useState, useEffect } from 'react'
import { getPosts } from '../lib/blogService'

export function useBlogPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const data = await getPosts()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return { posts, loading, error }
}

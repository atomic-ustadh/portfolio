import { useState, useEffect } from 'react'
import { getPosts, getPostsByTag } from '../lib/blogService'

export function useBlogPosts(tag = null) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const data = tag ? await getPostsByTag(tag) : await getPosts()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [tag])

  return { posts, loading, error }
}

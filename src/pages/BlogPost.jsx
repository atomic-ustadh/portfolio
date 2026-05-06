import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import DOMPurify from 'dompurify'
import { getPostBySlug } from '../lib/blogService'
import SEO from '../components/SEO'

function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await getPostBySlug(slug)
        if (!data) throw new Error('Post not found')
        setPost(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [slug])

  if (loading) return <div className="pt-32 text-center">Loading...</div>
  if (error) return <div className="pt-32 text-center text-gray-600">{error}</div>

  const date = post.publishedAt?.toDate?.() || new Date()
  const sanitizedContent = DOMPurify.sanitize(post.content || '')

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white">
      <SEO title={post.title} description={post.excerpt} />
      <article className="max-w-3xl mx-auto px-4">
        <Link to="/blog" className="text-gray-600 hover:text-black mb-8 inline-block">
          ← Back to Blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>·</span>
          <span>{Math.ceil((post.content?.length || 0) / 2000) || 1} min read</span>
        </div>

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </article>
    </div>
  )
}

export default BlogPost

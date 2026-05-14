import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
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

  return (
    <div className="min-h-screen pt-24 pb-12 bg-black">
      <SEO title={post.title} description={post.excerpt} />
      <article className="max-w-5xl px-4 mx-auto">
        <Link to="/blog" className="inline-block mb-8 text-gray-300 hover:underline">
          ← Back to Blog
        </Link>

        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{post.title}</h1>

        <div className="mb-8 text-sm text-gray-400">
          <span>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-sm bg-gray-100">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose text-white max-w-none">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content || ''}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}

export default BlogPost

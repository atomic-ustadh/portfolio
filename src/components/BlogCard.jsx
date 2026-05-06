import { Link } from 'react-router-dom'

function BlogCard({ post }) {
  const date = post.publishedAt?.toDate?.() || new Date()
  const readingTime = Math.ceil((post.content?.length || 0) / 2000) || 1

  return (
    <Link to={`/blog/${post.slug}`} className="block border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2 hover:underline">{post.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <span>{readingTime} min read</span>
      </div>
      {post.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-xs">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}

export default BlogCard

import { Link } from 'react-router-dom'

function BlogCard({ post }) {
  const date = post.publishedAt?.toDate?.() || new Date()

  return (
    <Link to={`/blog/${post.slug}`} className="block p-6 transition-shadow border border-gray-700 hover:shadow-lg">
      <h3 className="mb-2 text-xl font-bold text-white hover:underline">{post.title}</h3>
      <p className="mb-4 text-white line-clamp-2">{post.excerpt}</p>
      <div className="text-sm text-gray-400">
        <span>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      {post.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs bg-gray-100">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}

export default BlogCard

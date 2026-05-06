import { useState } from 'react'
import { useBlogPosts } from '../hooks/useBlogPosts'
import BlogCard from '../components/BlogCard'
import SEO from '../components/SEO'

function BlogList() {
  const [selectedTag, setSelectedTag] = useState(null)
  const { posts, loading, error } = useBlogPosts(selectedTag)

  const allTags = [...new Set(posts.flatMap((p) => p.tags || []))]

  if (loading) return <div className="pt-32 text-center">Loading...</div>
  if (error) return <div className="pt-32 text-center text-gray-600">Error: {error}</div>

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white">
      <SEO title="Blog" description="Read technical articles and tutorials by atomicustadh" />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Blog</h1>

        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 text-sm ${
                !selectedTag ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'
              } transition-colors`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 text-sm ${
                  selectedTag === tag ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'
                } transition-colors`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogList

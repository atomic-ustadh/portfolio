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
      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/my_profile_e.png)" }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>
      {/* Background Image with Overlay */}

      <SEO title="Blog" description="Read technical articles and tutorials by atomicustadh" />
      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        <h1 className="mb-2 text-4xl font-bold text-center text-white md:text-5xl">Blog</h1>
        <p className="text=sm text-white text-center mb-2 ">Articles  ||  Journal Publications  ||  Tutorials</p>
            <br /> <br />
        {allTags.length > 0 && (
          <div className="flex justify-center mb-6 space-x-4">
            <h4 className="mb-2 text-lg font-semibold text-white">Select Tags</h4>
            <select
              value={selectedTag ?? ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="px-2 py-2 text-sm bg-white focus:outline-none"
            >
              <option value="">All</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        )}

        {posts.length === 0 ? (
          <p className="text-center text-gray-200">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

import { useState } from 'react'
import { useBlogPosts } from '../hooks/useBlogPosts'
import BlogCard from '../components/BlogCard'
import SEO from '../components/SEO'

function BlogList() {
  const [selectedTag, setSelectedTag] = useState(null)
  const [page, setPage] = useState(1)
  const { posts, loading, error } = useBlogPosts()
  const perPage = 9

  const allTags = [...new Set(posts.flatMap((p) => p.tags || []))]

  const filteredPosts = selectedTag
    ? posts.filter((p) => p.tags?.includes(selectedTag))
    : posts

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / perPage))
  const paginatedPosts = filteredPosts.slice((page - 1) * perPage, page * perPage)

  function handleTagChange(tag) {
    setSelectedTag(tag)
    setPage(1)
  }

  if (loading) return <div className="pt-32 text-center">Loading...</div>
  if (error) return <div className="pt-32 text-center text-gray-600">Error: {error}</div>

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white">
      <div
        className="fixed inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url(/my_profile_e.png)" }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

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
              onChange={(e) => handleTagChange(e.target.value || null)}
              className="px-2 py-2 text-sm bg-white focus:outline-none"
            >
              <option value="">All</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        )}

        {paginatedPosts.length === 0 ? (
          <p className="text-center text-gray-200">No posts yet.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 text-sm text-white bg-gray-800 disabled:opacity-40 hover:bg-black"
                >
                  Previous
                </button>
                <span className="text-sm text-white">
                  {page} / {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 text-sm text-white bg-gray-800 disabled:opacity-40 hover:bg-black"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default BlogList

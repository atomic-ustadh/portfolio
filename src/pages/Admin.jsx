import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { createPost, getPosts, deletePost, updatePost } from '../lib/blogService'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'

function Admin() {
  const { user, loading, login, logout, resetPassword } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [showResetForm, setShowResetForm] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetMessage, setResetMessage] = useState('')
  const [posts, setPosts] = useState([])
  const [editingPost, setEditingPost] = useState(null)
  const [formData, setFormData] = useState({ title: '', content: '', excerpt: '', tags: '' })

  const editor = useEditor({
    extensions: [StarterKit, Link, Image],
    content: formData.content,
    onUpdate: ({ editor }) => {
      setFormData((prev) => ({ ...prev, content: editor.getHTML() }))
    },
  })

  useEffect(() => {
    if (user) loadPosts()
  }, [user])

  useEffect(() => {
    if (editor && editingPost) {
      editor.commands.setContent(editingPost.content || '')
    }
  }, [editingPost, editor])

  async function loadPosts() {
    const data = await getPosts()
    setPosts(data)
  }

  const handleAuth = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
    } catch (err) {
      setAuthError('Invalid credentials')
    }
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setResetMessage('')
    try {
      await resetPassword(resetEmail)
    } catch {
      // Always show success — don't reveal whether the email exists
    }
    setResetMessage('If that email is registered, a reset link has been sent.')
    setShowResetForm(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const tags = formData.tags.split(',').map((t) => t.trim()).filter(Boolean)
    try {
      if (editingPost) {
        await updatePost(editingPost.id, { ...formData, tags })
      } else {
        await createPost({ ...formData, tags })
      }
      setFormData({ title: '', content: '', excerpt: '', tags: '' })
      setEditingPost(null)
      editor?.commands.setContent('')
      loadPosts()
    } catch (err) {
      console.error(err)
    }
  }

  const handleEdit = (post) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      tags: post.tags?.join(', ') || '',
    })
  }

  const handleDelete = async (id) => {
    if (confirm('Delete this post?')) {
      await deletePost(id)
      loadPosts()
    }
  }

  if (loading) return <div className="pt-32 text-center">Loading...</div>

  if (!user) {
    return (
      <div className="min-h-screen pt-32 pb-12 bg-black">
        <div className="max-w-md px-4 mx-auto">
          {!showResetForm ? (
            <>
              <h1 className="mb-8 text-3xl font-bold text-center text-white">Admin Login</h1>
              <form onSubmit={handleAuth} className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
                  />
                </div>
                {authError && <p className="text-gray-600">{authError}</p>}
                <button type="submit" className="w-full py-3 font-semibold text-white bg-gray-800 border hover:border-gray-300">
                  Login
                </button>
              </form>
              <p className="mt-4 text-center">
                <button
                  onClick={() => { setShowResetForm(true); setResetMessage(''); setResetEmail('') }}
                  className="text-gray-400 underline hover:text-white"
                >
                  Forgot Password?
                </button>
              </p>
            </>
          ) : (
            <>
              <h1 className="mb-8 text-3xl font-bold text-center text-white">Reset Password</h1>
              <form onSubmit={handleResetPassword} className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">Email</label>
                  <input
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
                  />
                </div>
                {resetMessage && <p className="text-gray-400">{resetMessage}</p>}
                <button type="submit" className="w-full py-3 font-semibold text-white bg-gray-800 border hover:border-gray-300">
                  Send Reset Link
                </button>
              </form>
              <p className="mt-4 text-center">
                <button
                  onClick={() => { setShowResetForm(false); setAuthError('') }}
                  className="text-gray-400 underline hover:text-white"
                >
                  Back to Login
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-black">
      <div className="max-w-4xl px-4 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          <button onClick={logout} className="px-4 py-2 text-white border border-gray-300 hover:bg-gray-800">
            Logout
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 mb-12 space-y-6 border border-gray-200">
          <h2 className="text-xl font-bold text-white">{editingPost ? 'Edit Post' : 'New Post'}</h2>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">Excerpt</label>
            <input
              type="text"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">Content</label>
            <div className="border border-gray-300">
              <div className="flex gap-2 p-2 text-white border-b border-gray-300">
                <button type="button" onClick={() => editor?.chain().focus().toggleBold().run()} className="px-2 py-1 hover:bg-gray-800">Bold</button>
                <button type="button" onClick={() => editor?.chain().focus().toggleItalic().run()} className="px-2 py-1 hover:bg-gray-800">Italic</button>
                <button type="button" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className="px-2 py-1 hover:bg-gray-800">H2</button>
                <button type="button" onClick={() => editor?.chain().focus().toggleBulletList().run()} className="px-2 py-1 hover:bg-gray-800">List</button>
              </div>
              <EditorContent editor={editor} className="p-4 min-h-[200px] bg-white focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-white">Tags (comma-separated)</label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <button type="submit" className="px-6 py-3 font-semibold text-white bg-gray-800 border hover:bg-black">
              {editingPost ? 'Update' : 'Create'}
            </button>
            {editingPost && (
              <button
                type="button"
                onClick={() => {
                  setEditingPost(null)
                  setFormData({ title: '', content: '', excerpt: '', tags: '' })
                  editor?.commands.setContent('')
                }}
                className="px-6 py-3 text-white border border-gray-300 hover:bg-gray-800"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="text-white">
          <h2 className="mb-4 text-xl font-bold">Posts</h2>
          {posts.length === 0 ? (
            <p className="text-gray-300">No posts yet.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 border border-gray-200">
                  <div>
                    <h3 className="font-bold">{post.title}</h3>
                    <p className="text-sm text-gray-300">{post.excerpt}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(post)} className="px-3 py-1 text-sm border border-gray-300 hover:bg-gray-800">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(post.id)} className="px-3 py-1 text-sm border border-gray-300 hover:bg-gray-800">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Admin

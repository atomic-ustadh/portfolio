import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Me</h1>
        <p className="text-gray-600 text-center mb-12">
          Have a question or want to work together? Send me a message!
        </p>

        {status === 'success' ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-600">Your message has been sent successfully.</p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input name="bot-field" hidden />

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-gray-600">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">Or reach out directly:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/atomicustadh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/atomicustadh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

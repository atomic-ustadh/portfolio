import { useState } from 'react';
import mail from '../images/mail.svg';
import telephone from '../images/telephone.svg';

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
      .then(() => {
        setStatus('success')
        form.reset()
      })
      .catch(() => setStatus('error'))
  }

  return (
    <div className="min-h-screen pt-24 pb-12 text-white bg-black">
      <div className="max-w-2xl px-4 mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-center md:text-5xl">Contact Me</h1>
        <p className="mb-12 text-center text-gray-200">
          Have a question or want to work together? Send me a message!
        </p>

        {status === 'success' ? (
          <div className="py-12 text-center">
            <h2 className="mb-4 text-2xl font-bold">Thank You!</h2>
            <p className="text-gray-200">Your message has been sent successfully.</p>
          </div>
        ) : (
          <form
             name="contact-me-form"
             method="POST"
             data-netlify="true"
             onSubmit={handleSubmit}
             className="space-y-6"
           >
             <input type="hidden" name="form-name" value="contact-me-form" />
             <input name="bot-field" hidden />
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 bg-black border border-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-black border border-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
                className="w-full px-4 py-3 bg-black border border-gray-300 resize-none focus:outline-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-gray-200">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition-colors bg-gray-800 border border-black hover:bg-black hover:border-white"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="pt-8 mt-12 text-center border-t border-gray-700">
          <p className="mb-6 text-white">Or reach out directly:</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href="mailto:ibnluqmanalawfaaweey@gmail.com"
              className="flex items-center gap-2 text-white hover:text-gray-300 hover:underline"
            >
              <img src={mail} alt="" className="w-5 h-5 brightness-0 invert" />
              Send an E-mail
            </a>
            <a
              href="tel:+2349065750161"
              className="flex items-center gap-2 text-white hover:text-gray-300 hover:underline"
            >
              <img src={telephone} alt="" className="w-5 h-5 brightness-0 invert" />
              Call Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

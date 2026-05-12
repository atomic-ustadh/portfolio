import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { services } from '../data/portfolioData'

function RequestService() {
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('service') || ''
  const [status, setStatus] = useState('idle')
  const [selectedService, setSelectedService] = useState(preselected)

  useEffect(() => {
    if (preselected) setSelectedService(preselected)
  }, [preselected])

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
        setSelectedService('')
      })
      .catch(() => setStatus('error'))
  }

  return (
    <div className="min-h-screen pt-24 pb-12 text-white bg-black">
      <div className="max-w-2xl px-4 mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-center md:text-5xl">Request a Service</h1>
        <p className="mb-12 text-center text-gray-200">
          Tell me what you need and I&apos;ll get back to you.
        </p>

        {status === 'success' ? (
          <div className="py-12 text-center">
            <h2 className="mb-4 text-2xl font-bold">Thank You!</h2>
            <p className="text-gray-200">
              Your service request has been submitted. I&apos;ll reach out to you soon.
            </p>
          </div>
        ) : (
          <form
            name="service-request"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="service-request" />
            <input name="bot-field" hidden />

            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 bg-black border border-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-black border border-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone (Whatsapp preferably)</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="w-full px-4 py-3 bg-black border border-gray-300 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="service" className="block mb-2 text-sm font-medium">Service</label>
              <select
                name="service"
                id="service"
                required
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 text-white bg-black border border-gray-300 focus:outline-none"
              >
                <option value="" disabled className="text-gray-500">Select a service</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title} className="text-white bg-black">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="details" className="block mb-2 text-sm font-medium">Project Description</label>
              <textarea
                name="details"
                id="details"
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
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default RequestService

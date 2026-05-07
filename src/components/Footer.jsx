function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-gray-200 ">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} atomicustadh. All rights reserved.
          </p>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <a
              href="https://github.com/atomicustadh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 text-gray-100 transition-colors hover:bg-white hover:text-black"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/atomicustadh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 text-gray-100 transition-colors hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

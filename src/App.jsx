import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const BlogList = lazy(() => import('./pages/BlogList'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Admin = lazy(() => import('./pages/Admin'))
const Contact = lazy(() => import('./pages/Contact'))

function Loading() {
  return <div className="pt-32 text-center">Loading...</div>
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

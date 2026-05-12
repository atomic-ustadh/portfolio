import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const BlogList = lazy(() => import('./pages/BlogList'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Admin = lazy(() => import('./pages/Admin'))
const CV = lazy(() => import('./pages/CV'))
const RequestService = lazy(() => import('./pages/RequestService'))
const Contact = lazy(() => import('./pages/Contact'))

function Loading() {
  return <div className="pt-32 text-center">Loading...</div>
}

function Layout() {
  const location = useLocation()
  const hideUI = location.pathname === '/cv'

  return (
    <>
      {!hideUI && <Navbar />}
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/request-service" element={<RequestService />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      {!hideUI && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App

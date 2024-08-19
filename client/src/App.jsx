import React from 'react'
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ProtectRoute from './hooks/ProtectRoute';
import { AuthProvider } from './AuthContext';
import Loader from './components/Loader';
export default function App() {

  const Home = lazy(() => import('./pages/Home'));
  const About = lazy(() => import('./pages/About'));
  const Donations = lazy(() => import('./pages/Donations'));
  const Gallery = lazy(() => import('./pages/Gallery'));
  const Stories = lazy(() => import('./pages/Stories'));
  const NotFound = lazy(() => import('./pages/NotFound'));
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={ <div className='fixed top-0 left-0 h-[100vh] w-[100vw] flex justify-center items-center'> <Loader/></div>}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about/toons-trust' element={<About />} />
            <Route path='/donations/make-a-change' element={<Donations />} />
            <Route path='/gallery' element={< Gallery/>} />
            <Route path='/stories' element={<Stories />} />
            <Route element={<ProtectRoute />} >
              <Route path='/admin' element={<>Admin</>} />
              <Route path='/admin/contact-form' element={<>Admin</>} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}

import React from 'react'
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ProtectRoute from './hooks/ProtectRoute';
import { AuthProvider } from './AuthContext';
export default function App() {

  const Home = lazy(() => import('./pages/Home'));
  const About = lazy(() => import('./pages/About'));
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route element={<ProtectRoute/>} >
              <Route path='/admin' element={<>Admin</>} />
              <Route path='/admin/contact-form' element={<>Admin</>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

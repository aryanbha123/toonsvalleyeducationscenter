import React from 'react'
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ProtectRoute from './hooks/ProtectRoute';
import { AuthProvider } from './AuthContext';
import Loader from './components/Loader';
import { CircularProgress } from '@mui/material';
import { ToastBar, Toaster } from 'react-hot-toast';
import Layout from './layout/Layout';
import LoginPage from './admin/LoginPage';
export default function App() {

  const Home = lazy(() => import('./pages/Home'));
  const About = lazy(() => import('./pages/About'));
  const Donations = lazy(() => import('./pages/Donations'));
  const Gallery = lazy(() => import('./pages/Gallery'));
  const Stories = lazy(() => import('./pages/Stories'));
  const NotFound = lazy(() => import('./pages/NotFound'));
  const Admin = lazy(() => import('./admin/Home'));
  const AdminDonation = lazy(() => import('./admin/Donation'));
  return (
    <BrowserRouter>
      <AuthProvider>
        <Toaster position='top-center' />
        <Suspense fallback={<div className='fixed top-0 left-0 h-[100vh] w-[100vw] flex justify-center items-center'> <CircularProgress /></div>}>
          <Routes>
            <Route path='/' element={<Layout wrappedComponents={<Home />} />} />
            <Route path='/about/toons-trust' element={<Layout wrappedComponents={<About />} />} />
            <Route path='/donations/make-a-change' element={<Layout wrappedComponents={<Donations />} />} />
            <Route path='/gallery' element={<Layout wrappedComponents={< Gallery />} />} />
            <Route path='/stories' element={<Layout wrappedComponents={<Stories />} />} />
          
            <Route path='/login' element={<LoginPage />} />
            <Route element={<ProtectRoute />} >
              <Route path='/admin' element={<Admin></Admin>} />
              <Route path='/admin/donations' element={<AdminDonation></AdminDonation>} />
              <Route path='/admin/newsletters' element={<AdminDonation></AdminDonation>} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  )
}

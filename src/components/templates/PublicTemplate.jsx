import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavProvider } from '../../context/NavContext';
import { Footer } from '../sections/Footer';
import { Header } from '../sections/Header';

export const PublicTemplate = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavProvider>
        <div className='sticky top-0 z-10'>
          <Header />
        </div>
      </NavProvider>
      <div className=''>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

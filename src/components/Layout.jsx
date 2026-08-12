import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="
      min-h-screen
      w-full
      flex
      flex-col
      bg-[#fdfdfd]
      text-[#111]
      dark:bg-[#0a0a0a]
      dark:text-[#f5f5f5]
      transition-colors
      duration-300
    ">
      <Navigation />

      <main className="
        flex-grow
        flex
        flex-col
        w-full
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
      ">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
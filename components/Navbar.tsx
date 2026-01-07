
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center">
      <div className="agency-logo text-xl font-bold tracking-tighter uppercase text-white">
        Aura<span className="text-zinc-500">.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-white/80">
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <div className="md:hidden">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

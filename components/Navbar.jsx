import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex justify-between items-end">
        <h1 className="text-zinc-100 text-2xl font-bold tracking-tighter">AURA</h1>
        <div className="flex gap-8 text-zinc-400 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

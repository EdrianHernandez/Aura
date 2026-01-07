
import React from 'react';

const AgencyHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-7xl">
        <h2 className="text-zinc-500 text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-8 animate-fade-in">
          Independent Design Studio
        </h2>
        <h1 className="agency-title serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] font-medium tracking-tight mb-12">
          We Craft <br /> 
          <span className="italic">Digital</span> Souls
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-12 mt-4">
          <button 
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-semibold text-lg overflow-hidden transition-all duration-300 hover:pr-14"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 uppercase tracking-wider">View Work</span>
            <svg 
              className="absolute right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <p className="max-w-xs text-zinc-400 text-lg leading-relaxed font-light">
            Pushing the boundaries of visual identity and digital experiences through purposeful design.
          </p>
        </div>
      </div>
      
      {/* Visual Accent */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AgencyHero;

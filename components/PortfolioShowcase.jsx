import React from 'react';

const items = [
  { id: '1', title: 'Velvet Horizon', category: 'Branding', imageUrl: 'https://picsum.photos/800/1200?random=1', height: 'h-[500px]' },
  { id: '2', title: 'Neo-Form', category: 'UI/UX', imageUrl: 'https://picsum.photos/800/800?random=2', height: 'h-[400px]' },
  { id: '3', title: 'Stellar Motion', category: 'Animation', imageUrl: 'https://picsum.photos/800/1000?random=3', height: 'h-[600px]' },
  { id: '4', title: 'Abstract Soul', category: 'Visual Art', imageUrl: 'https://picsum.photos/800/1100?random=4', height: 'h-[550px]' },
  { id: '5', title: 'Digital Flow', category: 'Platform', imageUrl: 'https://picsum.photos/800/900?random=5', height: 'h-[450px]' },
  { id: '6', title: 'Core Identity', category: 'Identity', imageUrl: 'https://picsum.photos/800/1300?random=6', height: 'h-[700px]' },
];

const PortfolioShowcase = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="mb-20">
        <h3 className="serif text-5xl md:text-7xl font-medium mb-6">Selected Work</h3>
        <div className="w-20 h-1 bg-white"></div>
      </div>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {items.map((item) => (
          <div key={item.id} className="masonry-item group relative overflow-hidden cursor-pointer">
            <div className="relative overflow-hidden bg-zinc-900">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-2 border border-white text-xs uppercase tracking-widest font-bold">View Case Study</span>
                 </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-baseline">
              <h5 className="text-xl font-medium tracking-tight">{item.title}</h5>
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <button className="px-12 py-5 border border-zinc-700 hover:border-white transition-colors uppercase tracking-[0.2em] text-sm font-bold">
          Archive 2020—2024
        </button>
      </div>
    </section>
  );
};

export default PortfolioShowcase;

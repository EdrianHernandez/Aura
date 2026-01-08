import React from 'react';

const clients = [
  'Modernize', 'Solstice', 'Aura Labs', 'Nova Core', 'Equinox', 'Vertex'
];

const ClientLogos = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto">
        <h6 className="text-center text-zinc-500 uppercase tracking-[0.5em] text-xs font-bold mb-16">
          Collaborated With
        </h6>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
          {clients.map((client) => (
            <div key={client} className="flex justify-center group">
              <span className="text-2xl font-bold tracking-tighter text-zinc-400 group-hover:text-white transition-colors cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

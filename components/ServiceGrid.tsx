
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '01',
    title: 'Branding',
    description: 'We build cohesive visual identities that tell your story across every touchpoint, from logo design to brand strategy.',
    icon: '✦'
  },
  {
    id: '02',
    title: 'UI/UX Design',
    description: 'User-centric digital products that combine aesthetic excellence with seamless functionality and accessibility.',
    icon: '⌬'
  },
  {
    id: '03',
    title: 'Motion Graphics',
    description: 'Bringing brands to life through fluid animation and cinematic storytelling that captures attention instantly.',
    icon: '≋'
  }
];

const ServiceGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950/50">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h3 className="serif text-4xl md:text-6xl font-medium">Core Capabilities</h3>
        <p className="max-w-md text-zinc-500 text-lg">
          Specialized expertise tailored for companies looking to disrupt their industry through high-end design.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-zinc-800">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="service-card group bg-black p-12 lg:p-16 flex flex-col transition-all duration-500 hover:bg-zinc-900"
          >
            <span className="text-zinc-600 text-sm font-mono mb-8">{service.id}</span>
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
              {service.icon}
            </div>
            <h4 className="text-2xl font-semibold mb-4">{service.title}</h4>
            <p className="text-zinc-500 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
              {service.description}
            </p>
            <div className="mt-12 flex items-center text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Explore service
              <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;

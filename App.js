import React from 'react';
import Navbar from './components/Navbar';
import AgencyHero from './components/AgencyHero';
import ClientLogos from './components/ClientLogos';
import PortfolioShowcase from './components/PortfolioShowcase';
import ServiceGrid from './components/ServiceGrid';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-zinc-50 min-h-screen font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main>
        <AgencyHero />
        <ClientLogos />
        <PortfolioShowcase />
        <ServiceGrid />
      </main>
      <Footer />
    </div>
  );
};

export default App;

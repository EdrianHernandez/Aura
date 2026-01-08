import React from 'react';
import Navbar from './components/Navbar';
import AgencyHero from './components/AgencyHero';
import ServiceGrid from './components/ServiceGrid';
import PortfolioShowcase from './components/PortfolioShowcase';
import ClientLogos from './components/ClientLogos';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-zinc-50 min-h-screen font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <AgencyHero />
      <ClientLogos />
      <ServiceGrid />
      <PortfolioShowcase />
      <Footer />
    </main>
  );
}

export default App;

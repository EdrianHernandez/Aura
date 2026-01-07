
import React from 'react';
import Navbar from './components/Navbar';
import AgencyHero from './components/AgencyHero';
import ServiceGrid from './components/ServiceGrid';
import PortfolioShowcase from './components/PortfolioShowcase';
import ClientLogos from './components/ClientLogos';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <AgencyHero />
        <ServiceGrid />
        <PortfolioShowcase />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  );
};

export default App;

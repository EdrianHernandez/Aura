
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-32 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="serif text-4xl md:text-6xl font-medium mb-12 leading-tight">
              Have a project <br /> 
              in mind? <span className="italic underline decoration-1 underline-offset-8">Let's talk.</span>
            </h2>
            <a href="mailto:hello@auracreative.studio" className="text-2xl md:text-3xl font-light text-zinc-400 hover:text-white transition-colors">
              hello@auracreative.studio
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h6 className="text-xs uppercase tracking-widest font-bold mb-6 text-zinc-600">Connect</h6>
              <ul className="space-y-4 text-zinc-400 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-xs uppercase tracking-widest font-bold mb-6 text-zinc-600">Studio</h6>
              <p className="text-zinc-400 font-light leading-relaxed">
                Aura Creative Studio<br />
                88 Design Blvd, Suite 400<br />
                Oslo, Norway
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-zinc-600 uppercase tracking-widest">
            © 2024 Aura Creative Studio. All Rights Reserved.
          </div>
          <div className="text-xs text-zinc-600 uppercase tracking-widest flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

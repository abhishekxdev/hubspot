import React from 'react';
import { Logo } from '@/components/Logo';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Streamline your HubSpot CRM workflow with our unified dashboard. Manage contacts, deals, and tickets all in one place with real-time synchronization.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-violet-400 transition-colors">Features</a></li>
              <li><a href="#integrations" className="hover:text-violet-400 transition-colors">Integrations</a></li>
              <li><Link to="/login" className="hover:text-violet-400 transition-colors">Login</Link></li>
              <li><Link to="/signup" className="hover:text-violet-400 transition-colors">Sign Up</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-violet-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">HubSpot Guide</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 HubSpot CRM Dashboard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

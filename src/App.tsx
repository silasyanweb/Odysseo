/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { LineupSection } from './components/LineupSection';
import { TicketsSection } from './components/TicketsSection';
import { ExcursoesSection } from './components/ExcursoesSection';
import { FaqSection } from './components/FaqSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <HomeSection />
        <LineupSection />
        <TicketsSection />
        <ExcursoesSection />
        <FaqSection />
      </main>
      
      <footer className="bg-[#0F172A] border-t border-white/10 py-8 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="font-heading font-black text-[#0F172A] text-xs">O</span>
            </div>
            <span className="font-heading font-bold tracking-wide">ODYSSEIA OPEN AIR</span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Odysseia Open Air. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

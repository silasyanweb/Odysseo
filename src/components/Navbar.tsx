import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Lineup', href: '#lineup' },
    { name: 'Ingressos', href: '#tickets' },
    { name: 'Excursões', href: '#excursoes' },
    { name: 'Info', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-primary/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-shadow">
            <span className="font-heading font-black text-[#0F172A] text-xl tracking-tighter">O</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-wide text-white">ODYSSEIA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#tickets"
            className="btn-neon px-5 py-2 text-sm font-bold flex items-center gap-2"
          >
            <Ticket size={16} />
            COMPRAR
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0F172A]/95 backdrop-blur-lg border-b border-primary/20 py-4 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-200 hover:text-primary transition-colors py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#tickets"
            className="btn-neon px-5 py-3 text-center font-bold mt-2 flex items-center justify-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Ticket size={18} />
            GARANTIR INGRESSO
          </a>
        </div>
      )}
    </nav>
  );
}

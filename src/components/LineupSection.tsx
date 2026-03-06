import React from 'react';
import { motion } from 'motion/react';

const lineup = [
  { name: 'ASTRIX', time: '23:00', stage: 'Main Stage', image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=800&auto=format&fit=crop' },
  { name: 'VINI VICI', time: '01:00', stage: 'Main Stage', image: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=800&auto=format&fit=crop' },
  { name: 'INFECTED MUSHROOM', time: '03:00', stage: 'Main Stage', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop' },
  { name: 'LIQUID SOUL', time: '05:00', stage: 'Main Stage', image: 'https://images.unsplash.com/photo-1605722243979-fc044f65d969?q=80&w=800&auto=format&fit=crop' },
  { name: 'ACE VENTURA', time: '07:00', stage: 'Main Stage', image: 'https://images.unsplash.com/photo-1520095972714-909e91b05382?q=80&w=800&auto=format&fit=crop' },
  { name: 'CAPTAIN HOOK', time: '09:00', stage: 'Main Stage', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop' },
];

const gallery = [
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533174000273-e114a14937cb?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
];

export function LineupSection() {
  return (
    <section id="lineup" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">LINEUP & EXPERIÊNCIA</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
        </div>

        {/* Lineup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {lineup.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-[16px] overflow-hidden group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary-dark text-white text-xs font-bold px-3 py-1 rounded-full border border-primary shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  {artist.time}
                </div>
                <h3 className="font-heading font-bold text-2xl mb-1 text-white group-hover:text-primary transition-colors">{artist.name}</h3>
                <p className="text-gray-400 text-sm font-medium">{artist.stage}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <div className="text-center mb-12">
          <h3 className="font-heading font-bold text-3xl mb-4">EDIÇÕES PASSADAS</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Reviva os momentos mágicos que construíram a nossa história.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square rounded-[16px] overflow-hidden border border-primary/20 hover:border-primary/60 transition-colors"
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

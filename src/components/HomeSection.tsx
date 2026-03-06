import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Ticket } from 'lucide-react';

export function HomeSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 30 days from now for demo purposes
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2874&auto=format&fit=crop" 
          alt="Psychedelic Festival Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/60 to-[#0F172A]"></div>
        {/* Radial gradient for neon glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_60%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary-dark drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            ODYSSEIA
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-none">OPEN AIR</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Uma jornada transcendental através do som e do espaço. O ecossistema integrado da música eletrônica.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
        >
          {[
            { label: 'DIAS', value: timeLeft.days },
            { label: 'HORAS', value: timeLeft.hours },
            { label: 'MINUTOS', value: timeLeft.minutes },
            { label: 'SEGUNDOS', value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="glass-card rounded-[16px] p-4 md:p-6 min-w-[90px] md:min-w-[120px] flex flex-col items-center justify-center">
              <span className="font-heading font-bold text-3xl md:text-5xl text-primary drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                {item.value.toString().padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-widest text-gray-400 mt-2">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#tickets"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="btn-neon px-8 py-4 text-lg font-bold flex items-center gap-3 uppercase tracking-wide"
        >
          <Ticket size={24} />
          Garantir Ingresso
        </motion.a>
      </div>
    </section>
  );
}

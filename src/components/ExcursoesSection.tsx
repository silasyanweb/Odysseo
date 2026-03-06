import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Bus, MessageCircle } from 'lucide-react';

const excursoesData = [
  { id: 1, city: 'São Paulo', state: 'SP', organizer: 'Alien Trips', price: 'R$ 120', departure: 'Barra Funda' },
  { id: 2, city: 'Campinas', state: 'SP', organizer: 'PsyBus', price: 'R$ 90', departure: 'Rodoviária' },
  { id: 3, city: 'Rio de Janeiro', state: 'RJ', organizer: 'Trance Tour RJ', price: 'R$ 250', departure: 'Novo Rio' },
  { id: 4, city: 'Belo Horizonte', state: 'MG', organizer: 'Uai Psy', price: 'R$ 280', departure: 'Terminal JK' },
  { id: 5, city: 'Curitiba', state: 'PR', organizer: 'Sul Trance', price: 'R$ 200', departure: 'Rodoferroviária' },
  { id: 6, city: 'Sorocaba', state: 'SP', organizer: 'Interior Trips', price: 'R$ 60', departure: 'Campolim' },
];

export function ExcursoesSection() {
  const [filterState, setFilterState] = useState('');
  const [filterCity, setFilterCity] = useState('');

  const states = [...new Set(excursoesData.map(item => item.state))].sort();
  const cities = filterState 
    ? [...new Set(excursoesData.filter(item => item.state === filterState).map(item => item.city))].sort()
    : [...new Set(excursoesData.map(item => item.city))].sort();

  const filteredExcursoes = excursoesData.filter(item => {
    return (filterState === '' || item.state === filterState) &&
           (filterCity === '' || item.city === filterCity);
  });

  return (
    <section id="excursoes" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">LOGÍSTICA & EXCURSÕES</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Encontre a excursão oficial mais próxima de você ou confira a localização do evento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Excursions List */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-[16px] p-6 md:p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Bus className="text-primary" />
                <h3 className="font-heading font-bold text-2xl">Excursões Oficiais</h3>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">Estado</label>
                  <select 
                    className="w-full bg-[#0F172A]/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none"
                    value={filterState}
                    onChange={(e) => { setFilterState(e.target.value); setFilterCity(''); }}
                  >
                    <option value="">Todos os Estados</option>
                    {states.map(state => <option key={state} value={state}>{state}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">Cidade</label>
                  <select 
                    className="w-full bg-[#0F172A]/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none"
                    value={filterCity}
                    onChange={(e) => setFilterCity(e.target.value)}
                    disabled={!filterState && cities.length === 0}
                  >
                    <option value="">Todas as Cidades</option>
                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                  </select>
                </div>
              </div>

              {/* List */}
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredExcursoes.length > 0 ? (
                  filteredExcursoes.map((exc) => (
                    <div key={exc.id} className="bg-[#0F172A]/40 border border-gray-700 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/50 transition-colors">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-lg text-white">{exc.city}</span>
                          <span className="text-xs font-bold bg-gray-800 text-gray-300 px-2 py-0.5 rounded">{exc.state}</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-1">Org: <span className="text-gray-200">{exc.organizer}</span></p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin size={12} /> Saída: {exc.departure}
                        </p>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3">
                        <span className="font-heading font-bold text-xl text-primary">{exc.price}</span>
                        <a 
                          href="#" 
                          className="bg-green-600 hover:bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
                          onClick={(e) => e.preventDefault()}
                        >
                          <MessageCircle size={16} />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    Nenhuma excursão encontrada para os filtros selecionados.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-[16px] p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="text-primary" />
                <h3 className="font-heading font-bold text-2xl">Localização</h3>
              </div>
              
              <div className="flex-1 rounded-xl overflow-hidden border border-gray-700 relative min-h-[300px]">
                {/* Stylized Map Placeholder */}
                <div className="absolute inset-0 bg-[#0F172A]">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                    alt="Map Background" 
                    className="w-full h-full object-cover opacity-30 grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                  
                  {/* Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.8)] animate-bounce">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div className="mt-4 bg-[#0F172A]/90 backdrop-blur border border-primary/30 px-4 py-2 rounded-lg text-center">
                      <p className="font-bold text-white">Fazenda Odysseia</p>
                      <p className="text-xs text-gray-400">Itu - SP</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-gray-400">
                <p className="mb-2"><strong className="text-gray-200">Endereço:</strong> Rodovia dos Bandeirantes, Km 120 - Zona Rural, Itu - SP</p>
                <a href="#" className="text-primary hover:text-primary-dark underline transition-colors">Abrir no Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

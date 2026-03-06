import React, { useState } from 'react';
import { motion } from 'motion/react';
import { QrCode, CreditCard, User, Mail, FileText } from 'lucide-react';

export function TicketsSection() {
  const [selectedBatch, setSelectedBatch] = useState('lote2');

  const batches = [
    { id: 'lote1', name: 'Lote 1 - Promocional', price: 'R$ 150,00', status: 'Esgotado' },
    { id: 'lote2', name: 'Lote 2', price: 'R$ 180,00', status: 'Disponível' },
    { id: 'lote3', name: 'Lote 3', price: 'R$ 220,00', status: 'Em breve' },
  ];

  return (
    <section id="tickets" className="py-24 relative bg-[#0F172A]/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">INGRESSOS</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Ticket Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-[16px] p-6 md:p-8">
              <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-2">
                <CreditCard className="text-primary" />
                Dados da Compra
              </h3>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">1. Selecione o Lote</h4>
                  <div className="grid gap-3">
                    {batches.map((batch) => (
                      <label 
                        key={batch.id}
                        className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                          batch.status === 'Esgotado' ? 'opacity-50 border-gray-700 bg-gray-800/30 cursor-not-allowed' :
                          selectedBatch === batch.id ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'border-gray-700 hover:border-gray-500 bg-[#0F172A]/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="batch" 
                            value={batch.id}
                            checked={selectedBatch === batch.id}
                            onChange={() => batch.status === 'Disponível' && setSelectedBatch(batch.id)}
                            disabled={batch.status !== 'Disponível'}
                            className="w-5 h-5 accent-primary bg-transparent border-gray-600"
                          />
                          <div>
                            <p className="font-bold text-white">{batch.name}</p>
                            <p className={`text-xs font-medium ${batch.status === 'Disponível' ? 'text-green-400' : batch.status === 'Esgotado' ? 'text-red-400' : 'text-yellow-400'}`}>
                              {batch.status}
                            </p>
                          </div>
                        </div>
                        <span className="font-heading font-bold text-xl">{batch.price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">2. Seus Dados</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-300 flex items-center gap-2">
                        <User size={16} className="text-primary" /> Nome Completo
                      </label>
                      <input type="text" className="w-full bg-[#0F172A]/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="João da Silva" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-300 flex items-center gap-2">
                        <FileText size={16} className="text-primary" /> CPF
                      </label>
                      <input type="text" className="w-full bg-[#0F172A]/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="000.000.000-00" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm text-gray-300 flex items-center gap-2">
                        <Mail size={16} className="text-primary" /> Email
                      </label>
                      <input type="email" className="w-full bg-[#0F172A]/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="joao@exemplo.com" />
                    </div>
                  </div>
                </div>

                <button type="button" className="btn-neon w-full py-4 text-lg font-bold uppercase tracking-wider mt-6">
                  Ir para Pagamento
                </button>
              </form>
            </div>
          </div>

          {/* Dashboard Placeholder */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-[16px] p-6 md:p-8 h-full flex flex-col">
              <h3 className="font-heading font-bold text-2xl mb-6 flex items-center gap-2">
                <QrCode className="text-primary" />
                Meus Ingressos
              </h3>
              
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-700 rounded-xl bg-[#0F172A]/30">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <QrCode size={40} className="text-primary opacity-50" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-300">Nenhum ingresso encontrado</h4>
                <p className="text-sm text-gray-500">
                  Após a confirmação do pagamento, seu QR Code e PDF do ingresso aparecerão aqui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

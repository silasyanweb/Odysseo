import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle2, XCircle } from 'lucide-react';

const dosAndDonts = [
  {
    type: 'do',
    title: 'PODE LEVAR',
    icon: <CheckCircle2 className="text-green-400" size={24} />,
    items: [
      'Documento original com foto (Obrigatório)',
      'Ingresso impresso ou no celular',
      'Protetor solar e labial',
      'Óculos escuros e chapéu',
      'Canga ou toalha',
      'Mochila pequena',
      'Garrafa de água vazia (plástico)',
      'Barraca e itens de camping (para área permitida)',
    ]
  },
  {
    type: 'dont',
    title: 'NÃO PODE LEVAR',
    icon: <XCircle className="text-red-400" size={24} />,
    items: [
      'Bebidas alcoólicas ou não alcoólicas',
      'Armas de fogo ou armas brancas',
      'Objetos de vidro (garrafas, copos, perfumes)',
      'Substâncias ilícitas',
      'Guarda-chuva',
      'Cadeiras ou banquinhos',
      'Animais de estimação',
      'Drones ou câmeras profissionais',
    ]
  }
];

const faqs = [
  {
    question: 'Qual a classificação indicativa do evento?',
    answer: 'A classificação indicativa é de 18 anos. Não será permitida a entrada de menores, mesmo acompanhados pelos responsáveis legais.'
  },
  {
    question: 'Haverá estacionamento no local?',
    answer: 'Sim, o evento conta com estacionamento oficial e seguro. O valor será divulgado próximo à data do evento e o pagamento será feito na hora.'
  },
  {
    question: 'Posso sair e voltar para o evento?',
    answer: 'Não. Após a saída do evento, não será permitido o retorno com o mesmo ingresso.'
  },
  {
    question: 'Quais as formas de pagamento aceitas nos bares?',
    answer: 'Aceitaremos cartões de crédito, débito e PIX. O evento utilizará sistema cashless, onde você carrega um cartão próprio do evento para consumir.'
  },
  {
    question: 'Haverá guarda-volumes?',
    answer: 'Sim, teremos serviço de guarda-volumes disponível para locação durante todo o evento.'
  }
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative bg-[#0F172A]/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">GUIA DO AVENTUREIRO</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Dos and Don'ts */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-2xl mb-6 text-center lg:text-left">Regras do Evento</h3>
            
            {dosAndDonts.map((section, idx) => (
              <div key={idx} className="glass-card rounded-[16px] p-6">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-700">
                  {section.icon}
                  <h4 className="font-bold text-lg tracking-wide">{section.title}</h4>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-6 text-center lg:text-left">Dúvidas Frequentes</h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`glass-card rounded-[16px] overflow-hidden transition-colors ${openFaq === index ? 'border-primary/50' : ''}`}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-bold text-white pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`text-primary transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

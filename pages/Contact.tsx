
import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/30 -z-10 translate-x-1/4 rounded-l-[10rem]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <header className="mb-12">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Fale com a gente</span>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                Vamos tecer <br />
                <span className="italic text-emerald-400">essa rede?</span>
              </h1>
              <p className="text-gray-500 text-lg font-light max-w-md">
                Dúvidas, parcerias ou apenas um "olá". Estamos prontos para ouvir você e construir algo novo juntos.
              </p>
            </header>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Visite-nos</h4>
                  <p className="text-gray-500 font-light">Estrada do Quilombo, Lago do Manso<br />Chapada dos Guimarães, MT</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Mande um e-mail</h4>
                  <p className="text-gray-500 font-light">contato@apaquilombo.org.br</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-500 font-light">(65) 99999-0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-emerald-900/10 border border-emerald-50">
            {submitted ? (
              <div className="h-[500px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-4">Mensagem enviada!</h3>
                <p className="text-gray-500">Obrigado por se conectar. Em breve nossa equipe entrará em contato.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-emerald-600 font-bold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-2">Seu nome</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Como podemos te chamar?"
                      className="w-full px-6 py-4 rounded-2xl bg-[#faf9f6] border-none focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-gray-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-2">E-mail</label>
                    <input 
                      required
                      type="email" 
                      placeholder="seu@email.com"
                      className="w-full px-6 py-4 rounded-2xl bg-[#faf9f6] border-none focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-2">Assunto</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-[#faf9f6] border-none focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-gray-900 appearance-none">
                    <option>Quero apoiar um projeto</option>
                    <option>Dúvida sobre a Gleba</option>
                    <option>Parceria institucional</option>
                    <option>Outro motivo</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 px-2">O que você quer construir com a gente?</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Conte sua ideia, dúvida ou mande um abraço..."
                    className="w-full px-6 py-4 rounded-2xl bg-[#faf9f6] border-none focus:ring-2 focus:ring-emerald-500 transition-all outline-none text-gray-900 resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-900/20 disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  {!isSubmitting && <Send size={20} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1f1f] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
                <img src="/images/logo.png" alt="APAQ Logo" className="w-14 h-14 object-contain brightness-0 invert opacity-80" />
                <div>
                    <h2 className="text-lg font-bold tracking-tight">Associação PA Quilombo</h2>
                    <p className="text-emerald-500 text-[8px] md:text-[7px] uppercase tracking-[0.25em] leading-tight opacity-70">Lago do Manso • Chapada dos Guimarães • MT</p>
                </div>
            </div>
            <h2 className="text-lg md:text-xl font-serif mb-6 italic text-emerald-50/70">"Feito com muito afeto entre nós de nós."</h2>
            <p className="text-gray-400 max-w-sm mb-8 text-sm leading-relaxed">
              A APAQ é mais que uma associação; é a voz viva do cerrado e a força da coletividade que protege as águas do Pantanal há 30 anos.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-emerald-500">Navegação</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#/" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#/quem-somos" className="hover:text-white transition-colors">Nossa Jornada</a></li>
              <li><a href="#/projetos" className="hover:text-white transition-colors">Programas & Projetos</a></li>
              <li><a href="#/blog" className="hover:text-white transition-colors">Vozes PA Quilombo</a></li>
              <li><a href="#/contato" className="hover:text-white transition-colors">Fale com a Gente</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-emerald-500">Localização</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Estrada do Quilombo, Gleba do Quilombo<br />
              Lago do Manso — Chapada dos Guimarães, MT<br />
              CEP: 78190-000
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">© 2026 Associação PA Quilombo</span>
          </div>

          <div className="flex gap-8 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Transparência</a>
          </div>

          <div className="text-[9px] text-gray-500 flex items-center gap-1">
            Desenvolvido com <Heart size={8} className="text-emerald-800" /> por CalangoFlux
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

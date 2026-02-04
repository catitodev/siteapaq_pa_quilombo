
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Se estiver na Home e NÃO tiver rolado, usa texto branco (Hero dark).
  // Se estiver na Home e ROLADO, usa texto preto (contraste com fundo branco).
  // Em outras páginas, geralmente o fundo é branco, então usa preto.
  const isDarkBackground = !isScrolled && location.pathname === '/';
  const textColor = isDarkBackground ? 'text-white' : 'text-gray-900';
  const accentColor = isDarkBackground ? 'text-emerald-300' : 'text-emerald-600';
  const opacityColor = isDarkBackground ? 'text-white/70' : 'text-gray-500/70';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 py-4 md:px-12 bg-transparent ${
          isScrolled ? 'py-3' : 'py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-4">
            <div className="w-12 h-12 relative">
                <img 
                    src="/images/logo.svg" 
                    alt="Logo APAQ" 
                    className={`w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ${isDarkBackground ? 'brightness-0 invert' : ''}`}
                    onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/100x100/${isDarkBackground ? 'ffffff/059669' : '059669/ffffff'}?text=APAQ`;
                    }}
                />
            </div>
            <div className="flex flex-col">
                <span className={`font-bold tracking-tight text-lg md:text-xl leading-none transition-colors duration-500 ${textColor}`}>
                    Associação PA Quilombo
                </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: 'Início', path: '/' },
              { name: 'Nossa Jornada', path: '/quem-somos' },
              { name: 'Programas & Projetos', path: '/projetos' },
              { name: 'Vozes PA Quilombo', path: '/blog' },
              { name: 'Fale com a Gente', path: '/contato' }
            ].map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:opacity-100 relative group ${
                    isActive 
                      ? accentColor
                      : opacityColor
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-current transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </nav>

          <button 
            onClick={() => setIsOpen(true)}
            className={`p-3 rounded-full transition-all duration-500 group ${isDarkBackground ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
            aria-label="Abrir Menu"
          >
            <Menu className={`transition-colors duration-500 ${textColor}`} size={24} />
          </button>
        </div>
      </header>

      {/* Side Menu */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-[0.8s] ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div 
            className={`absolute inset-0 bg-emerald-950/20 backdrop-blur-sm transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsOpen(false)}
        />
        
        <div className={`absolute right-0 top-0 h-full w-full md:w-[480px] bg-white/80 backdrop-blur-xl shadow-2xl transition-transform duration-700 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 md:p-10 flex justify-between items-center border-b border-gray-100/50 shrink-0">
            <div className="flex items-center gap-3">
                <img src="logo.png" alt="APAQ" className="w-10 h-10 object-contain" />
                <span className="text-gray-900 font-bold uppercase tracking-widest text-[10px]">Navegação</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-3 bg-gray-50/50 rounded-full text-gray-900 hover:bg-emerald-600 hover:text-white transition-all duration-500"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col justify-center flex-grow px-8 md:px-12 py-12 space-y-6 md:space-y-8 overflow-y-auto scrollbar-hide">
            {[
              { name: 'Início', path: '/' },
              { name: 'Nossa Jornada', path: '/quem-somos' },
              { name: 'Programas & Projetos', path: '/projetos' },
              { name: 'Vozes PA Quilombo', path: '/blog' },
              { name: 'Fale com a Gente', path: '/contato' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="group flex items-center"
              >
                <span className="block text-2xl md:text-4xl font-serif text-gray-900 group-hover:text-emerald-600 group-hover:translate-x-3 transition-all duration-500 leading-tight">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="p-10 border-t border-gray-100/50 shrink-0 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">Associação PA Quilombo — 2026</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

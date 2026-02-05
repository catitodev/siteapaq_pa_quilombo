
import React, { useEffect } from 'react';
import { ArrowRight, MapPin, Sprout, Users, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Seleciona todos os elementos com a classe reveal para observar
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const handleMapsClick = () => {
    window.open('https://www.google.com/maps/place/Lago+do+Manso/@-15.0051476,-55.6972504,11z/data=!4m6!3m5!1s0x939e0a15f04c38c1:0xb173e92d76d09d88!8m2!3d-15.0369814!4d-55.7769209!16s%2Fg%2F11c6f0k5kd?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const carouselImages = [
    `${import.meta.env.BASE_URL}images/evento.jpg`,
    `${import.meta.env.BASE_URL}images/festa_pa.jpg`,
    `${import.meta.env.BASE_URL}images/brigadistas.jpg`,
    `${import.meta.env.BASE_URL}images/com_senar.jpg`,
    `${import.meta.env.BASE_URL}images/foto_paginainicial.jpg`,
    `${import.meta.env.BASE_URL}images/festejo.jpg`,
    `${import.meta.env.BASE_URL}images/lago_do_manso.jpg`,
    `${import.meta.env.BASE_URL}images/doações.jpg`,
    `${import.meta.env.BASE_URL}images/mulheres.jpg`,
    `${import.meta.env.BASE_URL}images/tds.jpg`,
  ];

  const partnerLogos = [
  {
    src: `${import.meta.env.BASE_URL}images/ANDC.jpg`,
    alt: 'ANdC'
  },
  {
    src: `${import.meta.env.BASE_URL}images/sospantanal.svg`,
    alt: 'sospantanal'
  },
  {
    src: `${import.meta.env.BASE_URL}images/floRestas_social.jpg`,
    alt: 'floRestas_social'
  },
  {
    src: `${import.meta.env.BASE_URL}images/CVT_MT.jpg`,
    alt: 'CVT_MT'
  },
  {
    src: `${import.meta.env.BASE_URL}images/GPBR.jpg`,
    alt: 'GPBR'
  },
  {
    src: `${import.meta.env.BASE_URL}images/agroforestDAO.svg`,
    alt: 'Agroforestdao'
  },
  {
    src: `${import.meta.env.BASE_URL}images/calangofluxlogo.png`,
    alt: 'calangofluxlogo'
  },
  {
    src: `${import.meta.env.BASE_URL}images/pbzlogo.png`,
    alt: 'pbzlogo'
  },
  {
    src: `${import.meta.env.BASE_URL}images/ReRe_web3_regen.jpg`,
    alt: 'ReRe_web3_regen'
  },
  {
    src: `${import.meta.env.BASE_URL}images/OCA.jpg`,
    alt: 'OCA'
  }
];

   return (
    <div className="page-transition overflow-x-hidden">
      {/* 1. Hero (Manifesto de Abertura) */}
      <section className="relative min-h-[100vh] md:min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-[#1a1f1f]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#1a1f1f] z-10" />
          
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            poster="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover scale-110 animate-[pulse_25s_ease-in-out_infinite]"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-flowing-river-in-the-middle-of-a-forest-4247-large.mp4" type="video/mp4" />
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" alt="Natureza do Quilombo" />
          </video>
        </div>

        <div className="relative z-20 text-center px-6 max-w-6xl pt-40 md:pt-80 pb-32">
          <div className="reveal">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-6 md:mb-10 leading-[1.1] md:leading-[0.95] tracking-tight">
              30 anos de <span className="italic text-emerald-300">raízes.</span><br />
              <span className="text-emerald-400">Um futuro</span> que a gente planta agora.
            </h1>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <p className="text-base md:text-2xl text-white/70 mb-10 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Da Gleba do Quilombo para o mundo: produzindo vida, protegendo as águas e honrando nossa história.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.6s' }}>
            <Link 
              to="/quem-somos"
              className="btn-liquid inline-flex items-center gap-4 px-8 md:px-12 py-4 md:py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold transition-all shadow-2xl shadow-emerald-900/40 text-sm md:text-base"
            >
              Conheça nosso movimento
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. O Pulo do Gato (Localização Viva) */}
      <section className="py-20 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="reveal order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 md:w-40 md:h-40 bg-emerald-50 rounded-full blur-3xl -z-10" />
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-square md:aspect-video lg:aspect-[4/5] group">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                >
                  <source 
                    src={`${import.meta.env.BASE_URL}images/loc_brasil_lagodomanso.mp4`} 
                    type="video/mp4" 
                  />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-60" />
                
                <button 
                  onClick={handleMapsClick}
                  className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-14 h-14 md:w-16 md:h-16 bg-white text-emerald-900 rounded-full font-bold flex items-center justify-center hover:bg-emerald-50 transition-all shadow-xl group/btn"
                  aria-label="Ver localização no Google Maps"
                >
                  <MapPin size={24} className="group-hover/btn:animate-bounce" />
                </button>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
              Onde o coração pulsa
            </div>
            <h2 className="text-4xl md:text-7xl font-serif mb-6 md:mb-10 leading-[1.1]">
              Estrada do <span className="italic text-emerald-600">Quilombo</span>, nossa casa comum.
            </h2>
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-8 md:mb-12">
              <p>PA Quilombo, Lago do Manso.<br />Chapada dos Guimarães, Mato Grosso.</p>
              <p className="text-gray-400 text-base md:text-lg italic">"Aqui a terra não é apenas chão, é o palco de trinta anos de resiliência e união."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A força do coletivo */}
      <section className="relative py-32 md:py-48 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
            <img 
                src={`${import.meta.env.BASE_URL}images/foto_paginainicial.jpg`}
                className="w-full h-full object-cover opacity-30 scale-105"
                alt="Comunidade PA Quilombo"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6] via-white/40 to-[#faf9f6] z-10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <div className="text-center mb-16 md:mb-24 reveal">
            <h2 className="text-4xl md:text-7xl font-serif mb-6 leading-tight text-gray-900">A força do <span className="italic">coletivo</span></h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">Não somos apenas uma associação. Somos guardiões de um legado que une regeneração, gente e justiça.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: 'Regeneração',
                desc: 'Curamos a terra para que o rio respire. No Quilombo, a preservação é nossa colheita principal.',
                icon: <Sprout size={32} />,
                color: 'text-emerald-600',
                bg: 'bg-emerald-100/50'
              },
              {
                title: 'Coletividade',
                desc: '30 anos provando que ninguém cresce sozinho. O mutirão é a nossa tecnologia mais avançada.',
                icon: <Users size={32} />,
                color: 'text-amber-600',
                bg: 'bg-amber-100/50'
              },
              {
                title: 'Justiça',
                desc: 'Voz ativa na regularização e nos direitos. Dignidade para quem faz o solo produzir vida.',
                icon: <ShieldCheck size={32} />,
                color: 'text-blue-600',
                bg: 'bg-blue-100/50'
              }
            ].map((pillar, idx) => (
              <div 
                key={pillar.title} 
                className="reveal group p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-white/20 backdrop-blur-md border border-white/50 hover:bg-emerald-950 transition-all duration-700 shadow-sm hover:shadow-2xl md:hover:-translate-y-4"
                style={{ transitionDelay: `${idx * 0.2}s` }}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 ${pillar.bg} backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-8 md:mb-10 group-hover:bg-white/10 transition-colors`}>
                  <span className={`${pillar.color} group-hover:text-white transition-colors`}>{pillar.icon}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6 group-hover:text-white transition-colors">{pillar.title}</h3>
                <p className="text-gray-800 group-hover:text-white/80 font-light leading-relaxed transition-colors text-sm md:text-base">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVO: Seção de Carrosséis (Mídia e Parceiros) */}
      <section className="py-20 md:py-32 bg-[#faf9f6] overflow-hidden">
        {/* Título Centralizado */}
        <div className="text-center mb-16 md:mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight text-gray-900">
            Nossas Relações <span className="italic text-emerald-600">Abundantes</span>
          </h2>
        </div>

        {/* Carrossel de Imagens - Ajustado para ser levemente menor */}
        <div className="reveal mb-24 overflow-hidden">
          <div className="animate-scroll flex gap-4 md:gap-8 px-4 md:px-0">
            {[...carouselImages, ...carouselImages].map((img, i) => (
              <div key={i} className="w-[260px] md:w-[380px] aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer flex-shrink-0">
                <img src={img} alt={`Slide ${i}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Carrossel de Parceiros - Sem textos, apenas logos */}
        <div className="reveal overflow-hidden" style={{ transitionDelay: '0.3s' }}>
          <div className="animate-scroll-reverse flex items-center gap-12 md:gap-24">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
           <div
             key={i}
             className="flex items-center justify-center group flex-shrink-0"
           >
             <div className="w-16 h-16 md:w-24 md:h-24 bg-white shadow-sm rounded-2xl flex items-center justify-center border border-gray-100 group-hover:border-emerald-200 transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100">
               <img
                 src={logo.src}
                 alt={logo.alt}
                 className="w-12 h-12 md:w-16 md:h-16 object-contain"
                 loading="lazy"
               />
            </div>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* 4. Chamada para Engajamento */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto bg-emerald-950 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-32 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] md:blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px] md:blur-[100px]" />
            
            <div className="reveal">
              <h2 className="text-3xl sm:text-4xl md:text-8xl font-serif mb-8 md:mb-12 relative z-10 leading-[1.1] md:leading-[0.9]">
                Vamos construir o <span className="italic text-emerald-400">amanhã?</span>
              </h2>
              <p className="text-emerald-100/60 mb-10 md:mb-16 text-base md:text-xl max-w-2xl mx-auto relative z-10 font-light">
                Seja como apoiador, voluntário ou parceiro, sua presença fortalece a Associação e protege as águas do Manso.
              </p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center relative z-10">
                  <Link to="/contato" className="btn-liquid px-10 py-5 md:px-14 md:py-6 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-50 transition-all text-base md:text-lg shadow-xl">
                      Fale conosco
                  </Link>
                  <Link to="/projetos" className="px-10 py-5 md:px-14 md:py-6 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all text-base md:text-lg backdrop-blur-sm">
                      Ver projetos
                  </Link>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

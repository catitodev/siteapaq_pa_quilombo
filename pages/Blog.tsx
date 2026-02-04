
import React, { useEffect } from 'react';

const Blog: React.FC = () => {
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

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const timelinePosts = [
    {
      year: '2025',
      date: '11 de Outubro',
      category: 'Comunidade',
      title: 'Dia das Crianças no Quilombo',
      content: 'Uma celebração de alegria e união para os pequenos que são o futuro da nossa Gleba. Momentos de brincadeiras e sorrisos que fortalecem nossos laços.',
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2025',
      date: '15 de Agosto',
      category: 'Brigada PA Quilombo',
      title: 'Capacitação em Manejo do Fogo',
      content: 'Nossos voluntários participaram de mais um treinamento técnico intensivo, reforçando as táticas de prevenção e controle estratégico para o período crítico.',
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2025',
      date: 'Julho',
      category: 'Tecnologia & SIG',
      title: 'Projeto Visão Regenerativa - Oficina de SIG',
      content: 'Conclusão da oficina de Sistemas de Informação Geográfica iniciada em abril. Agora nossa equipe está apta a monitorar nosso território com precisão digital.',
      img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2025',
      date: '18 de Fevereiro',
      category: 'Regeneração',
      title: 'Mutirão Regenerativo',
      content: 'Comunidade reunida para ações diretas de cuidado com a terra e plantio, reafirmando que o mutirão é nossa tecnologia mais avançada.',
      img: 'https://images.unsplash.com/photo-1599408080299-1582260654ec?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2024',
      date: 'Agosto',
      category: 'Monitoramento Hídrico',
      title: 'Águas que Falam',
      content: 'Foco no monitoramento da qualidade da água em pontos estratégicos da Bacia do Alto Paraguai, garantindo a segurança hídrica da nossa gente.',
      img: 'https://images.unsplash.com/photo-1501472312651-726afe119ff1?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2024',
      date: 'Maio',
      category: 'Bio-região',
      title: 'Programa Vetiver Reviver',
      content: 'Início da implementação das barreiras verdes de Vetiver ao longo da orla do Lago do Manso, unindo resiliência climática e geração de renda.',
      img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2022',
      date: '16 de Dezembro',
      category: 'Celebração',
      title: 'Natal na PA Quilombo',
      content: 'Fechando o ano com gratidão e esperança, reunindo as famílias para celebrar as conquistas e fortalecer o espírito coletivo.',
      img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2022',
      date: '11 de Junho',
      category: 'Cultura',
      title: 'Nosso Arraiá',
      content: 'Tradição, música e sabores do cerrado em uma festa que celebra nossas raízes culturais e a alegria de viver em comunidade.',
      img: 'https://images.unsplash.com/photo-1563223552-30d01fda3ead?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2022',
      date: '09 de Abril',
      category: 'Agricultura Familiar',
      title: 'Inauguração da Feira de Agricultura Familiar',
      content: 'Um marco para a economia local: a abertura oficial do espaço para comercialização direta da nossa produção, do produtor para a mesa.',
      img: 'https://images.unsplash.com/photo-1488459711615-de61ef0b23f0?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-[#faf9f6]">
      <div className="max-w-5xl mx-auto">
        <header className="mb-24 reveal">
          <span className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Nossa voz, nossa história</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Vozes <br />
            <span className="italic text-emerald-400 text-5xl md:text-7xl">PA Quilombo.</span>
          </h1>
          <p className="text-gray-500 text-xl font-light max-w-2xl leading-relaxed">
            Um diário coletivo de resistência, regeneração e conquistas. Aqui, o tempo é contado pelos ciclos da terra e pelas mãos que a protegem.
          </p>
        </header>

        {/* Timeline Layout */}
        <div className="relative border-l border-emerald-100 ml-4 md:ml-12 pl-8 md:pl-12 space-y-16 md:space-y-24">
          {timelinePosts.map((post, idx) => {
            const showYear = idx === 0 || timelinePosts[idx - 1].year !== post.year;
            return (
              <article key={idx} className="reveal relative">
                {/* Timeline Marker & Year */}
                <div className="absolute -left-[45px] md:-left-[57px] top-0 flex flex-col items-center">
                  <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-4 border-white shadow-sm mb-2 ${showYear ? 'bg-emerald-600' : 'bg-emerald-200'}`} />
                  {showYear && (
                    <span className="text-[10px] font-black text-emerald-900/60 uppercase tracking-widest rotate-90 origin-left mt-8 block">
                      {post.year}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{post.date}</span>
                      <span className="w-8 h-[1px] bg-emerald-100" />
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{post.category}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif mb-4 hover:text-emerald-600 transition-colors cursor-pointer leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed mb-6">
                      {post.content}
                    </p>
                    <button className="group flex items-center gap-3 font-bold text-gray-900 hover:text-emerald-600 transition-all text-sm">
                      Ver detalhes
                      <span className="w-6 h-[1px] bg-gray-200 group-hover:w-10 group-hover:bg-emerald-600 transition-all" />
                    </button>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl shadow-emerald-900/5 group">
                      <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-32 p-10 md:p-20 bg-emerald-950 rounded-[3rem] md:rounded-[4rem] text-center text-white reveal overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-2xl md:text-5xl font-serif mb-6 md:mb-8 italic">Quer receber nossas notícias direto na sua rede?</h3>
          <p className="text-emerald-100/60 mb-8 md:mb-12 max-w-xl mx-auto font-light text-sm md:text-base">
            Deixe seu contato para acompanhar os diários da Brigada e as atualizações da Associação PA Quilombo.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="px-6 md:px-8 py-4 md:py-5 rounded-full bg-white/5 border border-white/10 outline-none focus:bg-white/10 transition-all text-white placeholder:text-white/20 flex-grow"
            />
            <button className="px-8 md:px-10 py-4 md:py-5 bg-white text-emerald-950 rounded-full font-bold hover:bg-emerald-50 transition-all">
              Acompanhar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

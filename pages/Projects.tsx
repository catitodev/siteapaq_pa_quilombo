
import React, { useState } from 'react';
import { Flame, Apple, Droplets, Activity, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Brigada Pantaneira Voluntária do PA Quilombo',
      subtitle: 'Onde o fogo encontra nossa coragem.',
      shortDesc: 'Proteção ativa do bioma Cerrado-Pantanal e resposta rápida a incêndios florestais desde 2021.',
      fullText: `A Brigada PA Quilombo foi estruturada por iniciativa da Associação do PA Quilombo, na pessoa do Senhor Edimar Joaquim (Amorim) e sua esposa Lucinete da Costa, com o apoio do Instituto SOS Pantanal, após devastadores incêndio que ocorreram no ano de 2020 na região.

Em dois mil e vinte um (2021) foi feita uma capacitação de 24 horas, com mais de 40 voluntários que fazem parte da comunidade. Essas pessoas participaram da capacitação e trabalharam de forma efetiva nos incêndios de 2021, 2022, 2023, 2024. Nesses mesmos anos aconteceram capacitações e recapacitações para os “veteranos”. Permitindo que os incêndios florestais ocorridos nesses anos tivessem uma redução significativa na região. Anualmente, os incêndios reduziram de 75% à 80%, em relação ao ano de 2020. Em 2025 a Brigada recebeu capacitação de Noções de Manejo do Fogo.

A Brigada do PA Quilombo tem uma extrema importância, pois é a única brigada devidamente estruturada e capacitada da região, situada a 55 km de Chapada dos Guimarães. A distância dificulta a resposta dos órgãos públicos, por isso é muito importante o trabalho que a Brigada desenvolve, não somente no momento da resposta, mas também na área preventiva.

Paulo Andre Barroso
Coronel BMR do CBMMT
Chapada dos Guimaraes-MT`,
      icon: <Flame />,
      color: 'bg-orange-500',
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'MicroAgroIndústria Frutos do Cerrado',
      subtitle: 'Cultivando o Futuro às Margens do Lago do Manso.',
      shortDesc: 'Fortalecendo a agricultura familiar e a soberania alimentar, gerando trabalho e renda com dignidade para a nossa comunidade.',
      fullText: `Nascida da união entre a força da terra e o espírito empreendedor, a microagroindústria "Frutos do Cerrado" é uma iniciativa da Associação dos Pequenos Produtores Rurais da Gleba do Quilombo (APAQ). Nosso propósito é claro: fortalecer a agricultura familiar e a soberania alimentar, gerando trabalho e renda com dignidade para a nossa comunidade. 

Situados às margens do exuberante Lago do Manso, nosso compromisso com a defesa do meio ambiente é integral. Acreditamos que a vitalidade da nossa fauna depende diretamente da preservação da flora. Por isso, nossa estratégia une o extrativismo consciente de tesouros do Cerrado, como o Pequi (Caryocar brasiliense), ao cultivo de alimentos tradicionais que sustentam nossa cultura. 

A sustentabilidade não é um discurso, é nossa prática diária. Reinvestimos na natureza ao destinar 30% das sementes coletadas para a propagação de espécies nativas. Além disso, cada gota de água utilizada no beneficiamento é 100% reaproveitada para irrigar nossas lavouras, fechando um ciclo de respeito e eficiência. 

Na APAQ, provamos que é possível alinhar empreendedorismo e responsabilidade socioambiental. A "Frutos do Cerrado" é a materialização desse ideal: um negócio que agrega valor aos produtos da nossa terra, protege o ecossistema que nos cerca e cultiva um futuro de cidadania e prosperidade para todos.`,
      icon: <Apple />,
      color: 'bg-emerald-500',
      img: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Programa Vetiver Reviver',
      subtitle: 'Resiliência Climática e Regeneração',
      shortDesc: 'Implementação de barreiras regenerativas ao longo dos 750 km da orla do Lago do Manso e fomento socioeconômico.',
      fullText: `Apresentamos o Programa Vetiver - Reviver, uma iniciativa estratégica dedicada a fortalecer a resiliência climática e promover a regeneração ambiental em nossa bio-região. Nosso objetivo central é implementar as práticas regenerativas do Capim Vetiver (Chrysopogon zizanioides), criando uma barreira verde de contenção.

O Programa elegeu o Vetiver por suas qualidades únicas: é uma gramínea não invasora e de raízes profundas, tornando-a a solução ideal para controle de erosão, infiltração de água no solo e recuperação de áreas degradadas.

Nossas metas incluem a produção de 3,75 milhões de mudas para a barreira definitiva ao longo dos 750 km da orla do Lago do Manso.`,
      icon: <Droplets />,
      color: 'bg-blue-500',
      img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Águas que Falam',
      subtitle: 'Programa Águas do Pantanal',
      shortDesc: 'Estratégia integrada de restauração ecológica, monitoramento hídrico e prevenção de incêndios para enfrentar os desafios do bioma.',
      fullText: `Estratégia integrada para enfrentar os desafios ambientais do bioma em três frentes principais: restauração ecológica, monitoramento hídrico e prevenção de incêndios.

O programa Raízes do Pantanal promove a restauração de áreas prioritárias, como nascentes, aliando educação ambiental, bioeconomia e valorização dos saberes tradicionais. O projeto também foca no monitoramento da qualidade da água em pontos estratégicos da Bacia do Alto Paraguai, garantindo a segurança hídrica das populações locais.`,
      icon: <Activity />,
      color: 'bg-teal-600',
      img: 'https://images.unsplash.com/photo-1495107336281-199515227377?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-20 text-center">
          <h1 className="text-4xl md:text-7xl font-serif mb-6 leading-tight">
            Transformação em <br />
            <span className="italic">Movimento.</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-light">
            Nossas frentes de trabalho são o reflexo direto das necessidades da nossa comunidade e do nosso ecossistema.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <div key={project.title} className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="h-64 md:h-80 overflow-hidden relative">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute top-4 left-4 md:top-6 md:left-6 p-3 md:p-4 rounded-xl md:rounded-2xl ${project.color} text-white shadow-lg`}>
                  {/* FIX: Cast to React.ReactElement<any> to resolve TypeScript error with 'size' prop in cloneElement */}
                  {React.cloneElement(project.icon as React.ReactElement<any>, { size: 24 })}
                </div>
              </div>
              <div className="p-8 md:p-10 flex-grow">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">{project.subtitle}</h3>
                <h2 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 text-gray-900 min-h-[3rem] md:min-h-[4rem]">{project.title}</h2>
                <p className="text-gray-600 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">{project.shortDesc}</p>
                <button 
                  onClick={() => setSelectedProject(idx)}
                  className="flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 transition-colors mt-auto text-sm md:text-base"
                >
                  Saber mais <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Otimizado para Mobile */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-emerald-950/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] md:rounded-[3rem] shadow-2xl p-6 md:p-16 scrollbar-hide">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-3 bg-gray-50 rounded-full text-gray-900 hover:bg-emerald-600 hover:text-white transition-all z-10"
            >
              <X size={20} />
            </button>
            
            <div className="mb-8 md:mb-10">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4 block">
                {projects[selectedProject].subtitle}
              </span>
              <h2 className="text-2xl md:text-5xl font-serif mb-6 md:mb-8 text-gray-900 leading-tight">
                {projects[selectedProject].title}
              </h2>
              <div className="w-16 md:w-20 h-1 bg-emerald-500 rounded-full" />
            </div>

            <div className="prose prose-sm md:prose-lg max-w-none text-gray-600 font-light leading-relaxed whitespace-pre-line text-sm md:text-base">
              {projects[selectedProject].fullText || projects[selectedProject].shortDesc}
            </div>

            <div className="mt-12 md:mt-16 pt-8 border-t border-gray-100 text-center">
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-full md:w-auto px-10 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-colors shadow-xl"
              >
                Voltar aos projetos
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

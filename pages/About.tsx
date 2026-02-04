
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#faf9f6]">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20">
          <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Jornada</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Três décadas de luta. <br />
            <span className="italic">Uma vida de conquistas.</span>
          </h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="space-y-8 text-lg text-gray-700 font-light leading-relaxed">
            <h2 className="text-3xl font-serif text-gray-900 italic">O começo e o Rio</h2>
            <p>
              Nascemos em 1994. Às margens do Rio Quilombo, aprendemos que a terra não é apenas chão, é direito. A APAQ surgiu para ser o eco da voz de cada pequeno produtor que via no horizonte a promessa de um lar.
            </p>
            <p>
              Aquele começo foi marcado pelo suor e pelo pé no barro. Entendemos cedo que a preservação do rio era a preservação da nossa própria alma.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=800" alt="Agricultores do Cerrado" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="rounded-3xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 order-2 md:order-1">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" alt="Natureza preservada" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8 text-lg text-gray-700 font-light leading-relaxed order-1 md:order-2">
            <h2 className="text-3xl font-serif text-gray-900 italic">A adaptação e a força</h2>
            <p>
              Há 25 anos, a paisagem mudou drasticamente com a chegada da Usina do Manso. O rio que conhecíamos deu lugar ao lago, e as comunidades tiveram que se reinventar. Nós também mudamos.
            </p>
            <p>
              Evoluímos para proteger os moradores originários, unindo saúde, educação e cultura à preservação do nosso ecossistema único. Hoje, somos reconhecidos como Entidade de Utilidade Pública Municipal (Lei 2.107-2025), um selo de seriedade que coroa nossa caminhada.
            </p>
          </div>
        </section>

        {/* Liderança */}
        <section className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm">
          <h2 className="text-4xl font-serif mb-12 text-center">As mãos por trás da gestão</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { role: 'Presidente', name: 'Edimar Joaquim' },
              { role: 'Vice-Presidente', name: 'Braz Divino F.S.' },
              { role: 'Tesouraria', name: 'Lucinete C.C. Joaquim' },
              { role: 'Secretaria', name: 'Rozeli Campos' },
              { role: 'Contador', name: 'Antônio Gonçalves' },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <span className="text-xl font-bold">{member.name[0]}</span>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-1">{member.role}</h4>
                <p className="text-xl font-medium text-gray-900">{member.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-gray-100">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Conselho e Apoio</h4>
            <p className="text-gray-600">Zacarias dos Santos, Salasar José, José Carlos dos Santos, Pedro da Costa.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="inicio" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Image with Official Purple Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#CBBAAD]/95 via-[#CBBAAD]/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 text-center">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em]">
          Somos un Centro de Experiencias enfocado en transformar cada contacto en una oportunidad: vender, resolver y construir lealtad.
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          Conectamos <br/><span className="text-secondary italic">Valor</span> Humano
        </h1>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-8 animate-in fade-in zoom-in-95 duration-1000">
          {/* Misión Card */}
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-[1.5rem] border border-white/10 shadow-2xl relative group hover:bg-white/10 transition-all duration-300">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-secondary rounded-full blur-xl opacity-30 animate-pulse"></div>
            <h3 className="text-xl font-black text-secondary mb-3 uppercase tracking-wide">Nuestro Proposito</h3>
            <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
              Construimos experiencias de compra y atención cercanas y confiables, con talento humano, procesos sólidos y modelos de gestión escalables, generando impacto medible y operando con estrictos estándares de calidad y eficiencia.
            </p>
          </div>

          {/* Visión Card */}
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-[1.5rem] border border-white/10 shadow-2xl relative group hover:bg-white/10 transition-all duration-300">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full blur-xl opacity-30 animate-pulse"></div>
            <h3 className="text-xl font-black text-secondary mb-3 uppercase tracking-wide">El futuro que construimos</h3>
            <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
              Ser el aliado de confianza de las empresas que quieren crecer, combinando resultados comerciales sólidos con experiencias de atención memorables, a través de equipos comprometidos y una cultura de mejora continua. 
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <button 
            onClick={() => onNavigate('contacto')}
            className="px-6 py-3 bg-secondary text-white font-bold rounded-full hover:bg-accent transition-all shadow-lg hover:-translate-y-1 active:scale-95 text-sm"
          >
            Comenzar Ahora
          </button>
          <button 
            onClick={() => onNavigate('servicios')}
            className="px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-full hover:bg-white/20 transition-all text-sm"
          >
            Ver Servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
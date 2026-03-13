import React from 'react';
import { History, BarChart3, Globe, ShieldCheck, Sparkles } from 'lucide-react';

const stats = [
  { label: "Experiencia", value: "15+ Años", icon: <History className="text-secondary" /> },
  { label: "Portabilidad", value: "10%", icon: <BarChart3 className="text-primary" /> },
  { label: "Sectores", value: "Telco/Fintech/Agro/Gestion deportiva", icon: <Globe className="text-primary" /> },
];

const Trayectoria: React.FC = () => {
  return (
    <section id="trayectoria" className="pt-24 pb-20 bg-white min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda: Título y Texto */}
          <div className="space-y-8">
            <div>
              <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Desde 2009</span>
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter uppercase mb-6">Nuestra Trayectoria</h2>
              <div className="w-16 h-1 bg-secondary rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-bold italic border-l-4 border-primary pl-6 py-2">
                "Consolidamos una participación de más del 10% en portabilidad numérica, respaldando nuestra capacidad innovadora."
              </p>
              
              <div className="text-slate-800 text-sm font-medium leading-relaxed space-y-4">
                <p>
                  Expandimos nuestras operaciones hacia sectores clave como la <strong>fintech</strong>, ofreciendo atención de alto nivel, y el <strong>agro</strong>, brindando servicio especializado.
                </p>
                <p>
                  Nuestro compromiso con la excelencia y la confianza sigue siendo el motor de nuestro crecimiento continuo, adaptándonos a las demandas del mercado para ofrecer un servicio confiable y seguro. 
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Estadísticas y Badge */}
          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className={`bg-brandLight p-6 rounded-3xl border border-accent/20 flex flex-col items-center text-center gap-3 hover:bg-white hover:shadow-lg transition-all${idx === 2 ? ' sm:col-span-2' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-lg font-black text-primary leading-tight break-words">{stat.value}</p>
                    <p className="text-slate-700 font-bold text-[9px] uppercase tracking-widest">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-primary rounded-[2.5rem] text-white relative overflow-hidden group shadow-xl shadow-primary/20">
              <div className="absolute -right-6 -top-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <ShieldCheck size={140} />
              </div>
              <div className="relative z-10">
                <h4 className="text-lg font-black mb-2 flex items-center gap-2">
                  Excelencia Certificada <Sparkles size={16} className="text-secondary" />
                </h4>
                <p className="text-white/90 text-xs leading-relaxed max-w-sm">
                  Garantizamos seguridad y confidencialidad absoluta en el tratamiento de la información bajo estándares internacionales.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trayectoria;
import React from 'react';
import { ArrowRight, Lightbulb, Users, TrendingUp, Settings } from 'lucide-react';

interface AzoConsultoriaProps {
  onNavigate: (id: string) => void;
}

const pilares = [
  { icon: <Lightbulb size={20} />, title: "Transformación", desc: "Acompañamos procesos de cambio organizacional con mirada estratégica y foco en resultados sostenibles." },
  { icon: <Users size={20} />, title: "Experiencia & Cultura", desc: "Diseñamos experiencias centradas en las personas, fortaleciendo la cultura y el vínculo con el negocio." },
  { icon: <Users size={20} />, title: "Liderazgo & Equipos", desc: "Desarrollamos líderes y equipos con las competencias necesarias para enfrentar desafíos complejos." },
  { icon: <Settings size={20} />, title: "Gestión & Resultados", desc: "Optimizamos procesos y modelos de gestión para incrementar eficiencia y generar impacto medible." },
];

const AzoConsultoria: React.FC<AzoConsultoriaProps> = ({ onNavigate }) => {
  return (
    <section id="consultoria" className="py-20 bg-brandLight min-h-[70vh] flex items-center relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-accent/10 pointer-events-none" />
      <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-accent/10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Columna izquierda */}
          <div className="space-y-7">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-[9px] font-bold uppercase tracking-[0.3em] mb-5">
                Unidad de Consultoría
              </span>

              {/* Logo placeholder — reemplazar con <img src="azo_logo.png" /> cuando esté disponible */}
              <div className="mb-6">
                <span className="text-5xl font-black tracking-tighter text-primary leading-none">
                  AZO
                </span>
                <span className="block text-secondary font-bold text-sm uppercase tracking-[0.3em] mt-1">
                  Consultoría
                </span>
              </div>

              <p className="text-slate-700 text-base leading-relaxed font-medium max-w-md">
                Nuestra unidad de consultoría especializada en acompañar a las organizaciones en sus desafíos de transformación, experiencia, cultura y gestión. Integra mirada estratégica, conocimiento operativo y centralidad en las personas para diseñar soluciones sostenibles que fortalezcan procesos, liderazgo, equipos y resultados.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contacto')}
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-accent transition-all shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm"
            >
              Conocé más <ArrowRight size={16} />
            </button>
          </div>

          {/* Columna derecha — pilares */}
          <div className="bg-white rounded-[2rem] p-8 border border-accent/30 shadow-xl shadow-black/10">
            <h4 className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-6">
              Áreas de intervención
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pilares.map((pilar, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-accent/20 hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                    {pilar.icon}
                  </div>
                  <p className="text-primary font-black text-sm mb-1">{pilar.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{pilar.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AzoConsultoria;

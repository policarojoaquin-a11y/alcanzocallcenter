import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AzoConsultoriaProps {
  onNavigate: (id: string) => void;
}

const AzoConsultoria: React.FC<AzoConsultoriaProps> = ({ onNavigate }) => {
  return (
    <section id="consultoria" className="py-20 bg-brandLight min-h-[70vh] flex items-center relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-accent/10 pointer-events-none" />
      <div className="absolute -left-10 bottom-0 w-64 h-64 rounded-full bg-accent/10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">

          <img
            src="/consultoria.jpg"
            alt="AZO HumanLab"
            className="w-96 md:w-[28rem] h-auto object-contain"
          />

          <p className="text-slate-700 text-lg leading-relaxed font-medium max-w-lg">
            Nuestra unidad de consultoría especializada en acompañar a las organizaciones en sus desafíos de transformación, experiencia, cultura y gestión. Integra mirada estratégica, conocimiento operativo y centralidad en las personas para diseñar soluciones sostenibles que fortalezcan procesos, liderazgo, equipos y resultados.
          </p>

          <button
            onClick={() => onNavigate('contacto')}
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-accent transition-all shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm"
          >
            Conocé más <ArrowRight size={16} />
          </button>

        </div>
      </div>
    </section>
  );
};
 
export default AzoConsultoria;
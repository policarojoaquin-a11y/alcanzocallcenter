import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    caption: "Equipo Alcanzo",
    year: "2024"
  },
  {
    url: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80",
    caption: "Capacitación",
    year: "2023"
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    caption: "Oficinas",
    year: "2024"
  }
];


const About: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % galleryImages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="quienes-somos" className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Compacto */}
        <div className="mb-12 border-b border-slate-100 pb-6">
          <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Identidad Alcanzo</span>
          <h2 className="text-4xl font-black text-primary tracking-tighter uppercase">Quiénes Somos</h2>
        </div>

        {/* Layout de 3 Columnas */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
          
          {/* Columna 1: Texto */}
          <div className="space-y-6">
            <div className="bg-brandLight p-8 rounded-[2.5rem] border border-accent/20 shadow-sm">
              <h3 className="text-xl font-black text-primary mb-4 leading-tight italic">
                "Una Empresa Joven especializada en brindar soluciones integrales."
              </h3>
              <p className="text-slate-800 text-sm font-medium leading-relaxed mb-4">
                Transformamos nuestras alianzas con el Cliente en relaciones duraderas basadas en la confianza mutua.
              </p>
              <p className="text-slate-800 text-sm font-medium leading-relaxed">
                Nos caracterizamos por nuestro compromiso y la cercanía con nuestros clientes, así como por la calidad e innovación de nuestros servicios, y la seguridad, confidencialidad y objetividad.
              </p>
            </div>
          </div>

          {/* Columna 2: Imágenes (Galería) */}
          <div className="relative group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-50 aspect-[4/3] bg-slate-100">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#CBBAAD]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-2xl font-black">{img.year}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">{img.caption}</p>
                  </div>
                </div>
              ))}
              
              <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100 z-10">
                <ChevronLeft size={18} />
              </button>
              <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100 z-10">
                <ChevronRight size={18} />
              </button>
              
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {galleryImages.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all ${i === currentImage ? 'w-4 bg-secondary' : 'w-1.5 bg-white/40'}`}></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
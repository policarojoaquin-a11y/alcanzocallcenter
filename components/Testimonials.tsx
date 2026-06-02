import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const communitySlides: { src: string; type: 'image' | 'video'; title: string; subtitle: string }[] = [
  {
    src: "dia del trabajador.jpg",
    type: "image",
    title: "Celebramos lo que somos",
    subtitle: "Festejo del Día del Trabajador"
  },
  {
    src: "halloween.jpg",
    type: "image",
    title: "La cultura también se construye compartiendo",
    subtitle: "Halloween"
  },
  {
    src: "dia del amigo.jpg",
    type: "image",
    title: "Momentos que nos unen",
    subtitle: "Día del Amigo"
  },
  {
    src: "celebracion pascua.png",
    type: "image",
    title: "Orgulloso de ser parte",
    subtitle: "Celebración Pascuas"
  },
  {
    src: "busqueda tesoro.MP4",
    type: "video" as const,
    title: "Primavera en equipo",
    subtitle: "Busqueda del tesoro"
  }
  // Para agregar un video, usá este formato:
  // { src: "nombre-del-video.mp4", type: "video" as const, title: "...", subtitle: "..." }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % communitySlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((p: number) => (p - 1 + communitySlides.length) % communitySlides.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((p: number) => (p + 1) % communitySlides.length);
  };

  return (
    <section id="comunidad" className="py-24 bg-cream/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Columna izquierda — texto */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">Comunidad <span style={{ fontFamily: "'Montserrat', sans-serif" }}>alcanzo</span></h2>
              <p className="text-secondary font-black text-xl md:text-2xl mb-6 tracking-tight">Somos equipo. Somos <span style={{ fontFamily: "'Montserrat', sans-serif" }}>alcanzo</span>.</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-secondary font-black text-3xl">4.9</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-slate-400 font-bold text-xs tracking-widest">(GOOGLE REVIEWS)</span>
            </div>

            <p className="text-slate-600 text-base font-medium leading-relaxed">
              En <span style={{ fontFamily: "'Montserrat', sans-serif" }}>alcanzo</span> creemos que los buenos resultados también nacen de los buenos vínculos. Por eso celebramos nuestros logros, compartimos momentos en equipo y construimos una cultura donde cada persona forma parte de algo más grande.
            </p>

            <a
              href="https://www.google.com/search?q=alcanzo+call+center#lrd=0x95bccacc67d417bd:0x9dccca39fb66f1cd,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-7 py-3 rounded-full font-black hover:bg-accent transition-all shadow-lg shadow-primary/20 text-sm uppercase tracking-widest group"
            >
              Ver todas las reseñas <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          {/* Columna derecha — carrusel */}
          <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100" style={{ aspectRatio: '4/3' }}>
            {communitySlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.type === 'video' ? (
                  <video
                    src={slide.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <p className="text-lg md:text-xl font-black leading-tight mb-0.5">{slide.title}</p>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70">{slide.subtitle}</p>
                </div>
              </div>
            ))}

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {communitySlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all ${i === current ? 'w-5 bg-secondary' : 'w-2 bg-white/50'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState } from 'react';
import { Star, ExternalLink, ImageOff } from 'lucide-react';

const reviewImages = [
  { id: 1, src: "test12.jpg", alt: "Reseña positiva de cliente" },
  { id: 2, src: "test22.jpg", alt: "Testimonio de satisfacción" },
  { id: 3, src: "test33.jpg", alt: "Comentario de cliente" },
  { id: 4, src: "test44.jpg", alt: "Valoración de 5 estrellas" }
];

const TestimonialImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [currentSrc, setCurrentSrc] = useState(`/${src}`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (currentSrc === `/${src}`) {
      setCurrentSrc(`/public/${src}`);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="w-full h-48 bg-slate-100 rounded-2xl flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200">
        <ImageOff size={32} />
        <span className="text-xs mt-3 italic font-bold">Reseña Certificada</span>
      </div>
    );
  }

  return (
    <img 
      src={currentSrc} 
      alt={alt} 
      className="w-full h-auto rounded-xl shadow-md group-hover:scale-[1.05] transition-transform duration-500"
      onError={handleError}
      loading="lazy"
    />
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="comunidad" className="py-24 bg-cream/50 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Comunidad Alcanzo</h2>
          <div className="flex justify-center items-center gap-4 mb-6">
             <span className="text-secondary font-black text-3xl">4.9</span>
             <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                ))}
             </div>
             <span className="text-slate-400 font-bold text-sm tracking-widest">(GOOGLE REVIEWS)</span>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Nuestra cultura se basa en la transparencia. Conocé las experiencias reales de quienes forman parte de nuestro equipo y red de clientes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {reviewImages.map((img) => (
            <div 
              key={img.id} 
              className="group w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] bg-white p-4 rounded-3xl shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all border border-white"
            >
              <TestimonialImage src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://www.google.com/search?q=alcanzo+call+center&sca_esv=4dde0993aef9cf17&rlz=1C1UEAD_enAR1148AR1148&sxsrf=ANbL-n5QesnpnrXQq5eCgn1buhQ95D0NMg%3A1770058222937&ei=7vGAaYrvOKOq5OUPj4C76QE&biw=1536&bih=695&aic=0&ved=0ahUKEwiKnvDcvLuSAxUjFbkGHQ_ALh0Q4dUDCBE&uact=5&oq=alcanzo+call+center&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2FsY2Fuem8gY2FsbCBjZW50ZXIyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBRAAGO8FSOAcUKQSWP8bcAR4AZABAJgBuwGgAbgLqgEEMS4xMLgBA8gBAPgBAZgCD6ACgwzCAgoQABiwAxjWBBhHwgIKEAAYgAQYFBiHAsICCBAAGIAEGKIEmAMAiAYBkAYIkgcENS4xMKAH9iqyBwQxLjEwuAfsC8IHBTAuNi45yAc1gAgA&sclient=gws-wiz-serp#lrd=0x95bccacc67d417bd:0x9dccca39fb66f1cd,1,,,," 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-black hover:bg-accent transition-all shadow-xl shadow-primary/20 text-sm uppercase tracking-widest group"
          >
            Ver todas las reseñas <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
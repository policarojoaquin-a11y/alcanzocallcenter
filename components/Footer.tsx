import React from 'react';
import { Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-primary text-white py-8 border-t border-white/5 relative overflow-hidden mt-auto">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
           <img src="/logo_edited.jpg" alt="Alcanzo" className="h-20 w-auto object-contain rounded-2xl" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <button onClick={() => onNavigate('inicio')} className="text-sm font-bold text-white hover:text-secondary transition-colors">Inicio</button>
            <button onClick={() => onNavigate('quienes-somos')} className="text-sm font-bold text-white hover:text-secondary transition-colors">Nosotros</button>
            <button onClick={() => onNavigate('servicios')} className="text-sm font-bold text-white hover:text-secondary transition-colors">Servicios</button>
             <button onClick={() => onNavigate('trayectoria')} className="text-sm font-bold text-white hover:text-secondary transition-colors">Equipo</button>
            <button onClick={() => onNavigate('comunidad')} className="text-sm font-bold text-white hover:text-secondary transition-colors">Comunidad</button>
            <button onClick={() => onNavigate('contacto')} className="text-sm font-bold text-white hover:text-secondary transition-colors">Contacto</button>
          </nav>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/alcanzo.sa/" target="_blank" rel="noreferrer" className="text-white hover:text-secondary transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/alcanzo.sa?_rdr" target="_blank" rel="noreferrer" className="text-white hover:text-secondary transition-all">
              <Facebook size={18} />
            </a>
            <a href="https://www.linkedin.com/in/alcanzo-sa-a51715223/" target="_blank" rel="noreferrer" className="text-white hover:text-secondary transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-white/70 text-[9px] uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} Alcanzo S.A. Todos los derechos reservados. Hecho con Popsi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
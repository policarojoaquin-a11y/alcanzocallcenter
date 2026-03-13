import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin, User } from 'lucide-react';

interface HeaderProps {
    activeSection: string;
    onNavigate: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', id: 'inicio' },
        { name: 'Quiénes somos', id: 'quienes-somos' },
        { name: 'Servicios', id: 'servicios' },
        { name: 'Consultoría', id: 'consultoria' },
        { name: 'Trayectoria', id: 'trayectoria' },
        { name: 'Comunidad', id: 'comunidad' },
        { name: 'Contacto', id: 'contacto' },
        ];

    const handleNavClick = (id: string) => {
        onNavigate(id);
        setIsOpen(false);
    };

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled || activeSection !== 'inicio' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <button
                    onClick={() => handleNavClick('inicio')}
                    className="flex items-center gap-3 group"
                >
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm border border-slate-100">
                        <img
                            src="logo_edited.jpg"
                            alt="Alcanzo Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex items-baseline gap-1.5">
                        <span className={`text-2xl font-black tracking-tighter transition-colors ${(scrolled || activeSection !== 'inicio') ? 'text-primary' : 'text-white'}`}>
                            ALCANZO
                        </span>
                        <span className={`text-xs font-bold tracking-wider transition-colors opacity-70 ${(scrolled || activeSection !== 'inicio') ? 'text-secondary' : 'text-white'}`}>
                            tus metas.
                        </span>
                    </div>
                </button>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => handleNavClick(link.id)}
                            className={`text-sm font-bold transition-all px-3 py-1 rounded-full ${activeSection === link.id
                                    ? 'bg-secondary text-white'
                                    : (scrolled || activeSection !== 'inicio') ? 'text-slate-700 hover:text-secondary' : 'text-white/90 hover:text-secondary'
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex gap-3 border-r pr-4 border-slate-300/30">
                        <a href="https://www.instagram.com/alcanzo.sa/" target="_blank" rel="noreferrer" className={`hover:scale-110 transition-transform ${(scrolled || activeSection !== 'inicio') ? 'text-primary' : 'text-white'}`}><Instagram size={18} /></a>
                        <a href="https://www.facebook.com/alcanzo.sa?_rdr" target="_blank" rel="noreferrer" className={`hover:scale-110 transition-transform ${(scrolled || activeSection !== 'inicio') ? 'text-primary' : 'text-white'}`}><Facebook size={18} /></a>
                        <a href="https://www.linkedin.com/in/alcanzo-sa-a51715223/" target="_blank" rel="noreferrer" className={`hover:scale-110 transition-transform ${(scrolled || activeSection !== 'inicio') ? 'text-primary' : 'text-white'}`}><Linkedin size={18} /></a>
                    </div>
                    <a href="https://www.alcanzo.com.ar/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-secondary hover:bg-accent text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-md active:scale-95">
                        <User size={14} /> Iniciar Sesión
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className={`lg:hidden ${(scrolled || activeSection !== 'inicio') ? 'text-primary' : 'text-secondary'}`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 w-full h-screen bg-white z-[60] lg:hidden flex flex-col p-8 gap-6 animate-in fade-in slide-in-from-top-10">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-primary">ALCANZO</span>
                            <span className="text-xs font-bold text-secondary">tus metas.</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400"><X size={32} /></button>
                    </div>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            className={`text-left text-2xl font-bold border-b border-slate-100 pb-4 ${activeSection === link.id ? 'text-secondary' : 'text-slate-800'}`}
                            onClick={() => handleNavClick(link.id)}
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className="mt-auto pb-10">
                        <a href="https://www.alcanzo.com.ar/" target="_blank" rel="noreferrer" className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg mb-6 shadow-xl shadow-secondary/20 inline-block text-center">
                            Iniciar Sesión
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
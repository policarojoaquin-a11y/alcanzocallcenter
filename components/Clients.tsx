import React from 'react';

type Client = {
    name: string;
    src: string;
    alt?: string;
};

const clients: Client[] = [
    { name: "Mercado Pago", src: "mp.png", alt: "Logo de Mercado Pago" },
    { name: "Personal", src: "personal.png", alt: "Logo de Personal" },
    { name: "Movistar", src: "movistar.png", alt: "Logo de Movistar" },
    { name: "CLAAS", src: "CLAAS.png", alt: "Logo de CLAAS" },
    { name: "Mitrol", src: "mitrol.png", alt: "Logo de Mitrol" },
    { name: "clicOh", src: "clicoh.jpeg", alt: "Logo de clicOh" }, 
    { name: "GLOOUDS", src: "gloouds.png", alt: "Logo de Gloouds"}
];

const Clients: React.FC = () => {
    return (
        <section className="py-12 bg-white border-y border-accent/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <h3 className="text-center text-[10px] font-bold mb-8 text-primary/30 uppercase tracking-[0.4em]">
                        Potenciando el valor de empresas líderes
                    </h3>
                    <div className="grid grid-cols-3 md:grid-cols-6 items-center justify-items-center gap-8 w-full max-w-5xl">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
                                aria-label={client.name}
                            >
                                <div className="h-12 md:h-14 w-full flex items-center justify-center transition-all">
                                    <img
                                        src={client.src}
                                        alt={client.alt ?? client.name}
                                        className="max-h-full max-w-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-[8px] font-bold text-slate-300 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all uppercase tracking-wider">
                                    {client.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
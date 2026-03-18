import React from 'react';

type Client = {
    name: string;
    src: string;
    alt?: string;
    /** logos oscuros sobre fondo claro necesitan tratamiento diferente */
    dark?: boolean;
};

const clients: Client[] = [
    { name: "Mercado Pago", src: "mp.png",          alt: "Logo de Mercado Pago" },
    { name: "Personal",    src: "personal.png",     alt: "Logo de Personal" },
    { name: "Movistar",   src: "movistar.png",     alt: "Logo de Movistar" },
    { name: "CLAAS",      src: "CLAAS.png",         alt: "Logo de CLAAS" },
    { name: "Mitrol",     src: "mitrol.png",        alt: "Logo de Mitrol" },
    { name: "clicOh",     src: "clicoh.jpeg",       alt: "Logo de clicOh",  dark: true },
    { name: "GLOOUDS",    src: "gloouds.png",       alt: "Logo de Gloouds" },
    { name: "OPEN25hs",   src: "open25hs.png",      alt: "Logo de Open25hs" },
    { name: "SUNRA",      src: "sunra.png",         alt: "Logo de Sunra" },
    { name: "Volta",      src: "voltalogo.png",     alt: "Logo de Volta" },
];

const Clients: React.FC = () => {
    return (
        <section className="py-16 bg-white border-y border-slate-100">
            <div className="container mx-auto px-6">

                {/* Título */}
                <p className="text-center text-[10px] font-semibold tracking-[0.45em] text-slate-500 uppercase mb-12 select-none">
                    Potenciando el valor de empresas líderes
                </p>

                {/* Grid de logos */}
                <div className="grid grid-cols-5 md:grid-cols-10 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-visible max-w-6xl mx-auto shadow-sm mt-10">
                    {clients.map((client, index) => (
                        <LogoCell key={index} client={client} />
                    ))}
                </div>

            </div>
        </section>
    );
};

/* ── Celda individual ── */
const LogoCell: React.FC<{ client: Client }> = ({ client }) => (
    <div
        className="
            group relative flex items-center justify-center
            bg-white
            aspect-square
            p-4
            transition-all duration-300
            hover:bg-slate-50 hover:z-10 hover:shadow-md hover:scale-[1.06]
            cursor-default
        "
        aria-label={client.alt ?? client.name}
        title={client.name}
    >
        {/* Imagen del logo — grayscale en reposo, color al hacer hover */}
        <img
            src={client.src}
            alt={client.alt ?? client.name}
            loading="lazy"
            className="
                w-full h-full object-contain
                max-h-16
                transition-all duration-300
                opacity-90
                group-hover:opacity-100
            "
        />

        {/* Tooltip con el nombre */}
        <span
            className="
                absolute -bottom-7 left-1/2 -translate-x-1/2
                text-[9px] font-semibold tracking-wider uppercase
                text-white bg-slate-800 rounded px-2 py-0.5 whitespace-nowrap
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200
                pointer-events-none
                z-20
            "
        >
            {client.name}
        </span>
    </div>
);

export default Clients;
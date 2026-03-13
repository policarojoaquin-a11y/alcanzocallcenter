import React from 'react';
import { Headset, ShoppingCart, DollarSign, Briefcase, Bot } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    title: "Ventas & Growth",
    description: "Procesos de venta diseñados para maximizar el revenue y la captación de clientes.",
    icon: <ShoppingCart size={24} />
  },
  {
    title: "Atención & CX",
    description: "Diseñamos y gestionamos experiencias de atención centradas en el cliente, combinando eficiencia operativa y calidad de servicio.  Gestión de canales, mejora de procesos, diseño de journeys, medición de satisfacción y acciones para fortalecer el vínculo, la fidelización y la percepción de marca.",
    icon: <Headset size={24} />
  },
  {
    title: "Backoffice & Distribución",
    description: "Gestionamos procesos administrativos y operativos que dan soporte a la atención y aseguran una ejecución ágil, ordenada y confiable. Incluye validación de datos, seguimiento de gestiones, resolución de casos, control documental y soporte a distintas áreas, con foco en eficiencia, trazabilidad y calidad.",
    icon: <DollarSign size={24} />
  },
  {
    title: "Calidad y Mejora Continua",
    description: "Implementamos modelos de calidad que permiten asegurar consistencia, identificar oportunidades de mejora y potenciar el desempeño de la operación. Monitoreo de transacciones, calibraciones, seguimiento de indicadores y planes de mejora continua para optimizar la experiencia, la eficiencia y los resultados.",
    icon: <Briefcase size={24} />
  },
  {
    title: "Analytics/IA",
    description: "Transformamos datos en insights automatizaciones y oportunidades de mejora. Este servicio incluye análisis de indicadores, diseño de tableros, detección de desvíos y aplicación de inteligencia artificial para optimizar  recursos y generar mayor eficiencia",
    icon: <Bot size={24} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="pt-24 pb-12 bg-white min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">Nuestras propuestas de valor</span>
          <h2 className="text-3xl md:text-4xl font-black text-primary mt-1 mb-2">Soluciones que impulsan crecimiento</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">Transformamos cada contacto en una oportunidad de crecimiento.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="group p-6 border border-accent/20 rounded-[2rem] bg-white hover:bg-primary transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="mb-4 p-3 w-fit rounded-xl bg-brandLight text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-primary group-hover:text-white mb-2">{service.title}</h3>
              <p className="text-slate-700 group-hover:text-white/90 text-sm font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
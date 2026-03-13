import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'contacto@alcanzo.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error al enviar:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 bg-white min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          <div>
            <span className="text-secondary font-black text-sm uppercase tracking-[0.3em]">Hablemos hoy</span>
            <h2 className="text-5xl md:text-6xl font-black text-primary mt-4 mb-8 italic tracking-tighter">¿Cómo podemos ayudarte?</h2>
            <p className="text-slate-800 text-lg font-medium mb-10 max-w-md leading-relaxed">
              Integramos soluciones personalizadas a tu flujo de trabajo para potenciar cada contacto.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="bg-primary p-4 rounded-[1.5rem] text-white shadow-xl shadow-primary/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black text-primary text-lg uppercase tracking-wider">Ubicación</h4>
                  <p className="text-slate-700 font-semibold">Florida 537, CABA, Argentina</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="bg-secondary p-4 rounded-[1.5rem] text-white shadow-xl shadow-secondary/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-primary text-lg uppercase tracking-wider">Canal Directo</h4>
                  <p className="text-slate-700 font-semibold">contacto@alcanzo.com</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-brandLight">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d205.25601726205437!2d-58.3751668234291!3d-34.60172691124467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacc67d417bd%3A0x9dccca39fb66f1cd!2sAlcanzo!5e0!3m2!1sen!2sar!4v1770059071645!5m2!1sen!2sar"  
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Alcanzo Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-cream p-10 md:p-16 rounded-[4rem] shadow-2xl border border-accent/30">
            <h3 className="text-3xl font-black text-primary mb-10 tracking-tight">Tu mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">Tu Nombre</label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-white px-6 py-4 rounded-2xl border border-slate-200 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">Tu Empresa</label>
                  <input 
                    type="text" name="subject" required value={formData.subject} onChange={handleChange}
                    className="w-full bg-white px-6 py-4 rounded-2xl border border-slate-200 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                    placeholder="Alcanzo S.A."
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">Correo Electrónico</label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full bg-white px-6 py-4 rounded-2xl border border-slate-200 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                  placeholder="hola@tuempresa.com"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black text-primary uppercase tracking-[0.2em] mb-2 px-1">¿En qué podemos ayudarte?</label>
                <textarea 
                  name="message" required rows={4} value={formData.message} onChange={handleChange}
                  className="w-full bg-white px-6 py-4 rounded-2xl border border-slate-200 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Contanos brevemente sobre tu proyecto..."
                ></textarea>
              </div>

              <button 
                type="submit" disabled={isSubmitting}
                className="w-full bg-primary hover:bg-slate-900 text-white font-black py-5 rounded-2xl transition-all shadow-2xl shadow-primary/30 flex justify-center items-center gap-4 active:scale-[0.98] group text-sm uppercase tracking-widest"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <>
                    Enviar ahora <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500 text-white rounded-2xl text-center text-sm font-black animate-in zoom-in-95 uppercase tracking-widest">
                  ¡Mensaje enviado con éxito!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500 text-white rounded-2xl text-center text-sm font-black animate-in zoom-in-95 uppercase tracking-widest">
                  Error al enviar. Intentá nuevamente.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
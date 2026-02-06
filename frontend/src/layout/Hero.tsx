import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-dark pt-20">
      {/* Background with blur/glass effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-anclora-teal-dark to-transparent" />
        {/* Placeholder for hero image - would use generate_image if needed */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in">
        <span className="font-fraunces text-anclora-gold text-sm tracking-[0.2em] uppercase mb-4 block">
          Anclora Private Estates
        </span>
        <h1 className="text-5xl md:text-7xl font-cardo text-text-primary mb-6 leading-tight">
          Activos excepcionales,<br />
          <span className="italic">gestionados con visión</span>
        </h1>
        <p className="text-lg md:text-xl font-inter text-text-secondary mb-10 max-w-2xl mx-auto">
          Plataforma inteligente para la gestión de leads y propiedades de lujo.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary w-full sm:w-auto">
            Explorar Propiedades
          </button>
          <button className="btn-secondary w-full sm:w-auto">
            Solicitar Dossier
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-anclora-gold/50" />
      </div>
    </section>
  );
};

export default Hero;

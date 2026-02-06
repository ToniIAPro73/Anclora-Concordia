import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-bg-dark">
      {/* Background with brand gradient and image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-anclora-teal-dark to-transparent opacity-80 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=2000')" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-5xl px-4">
        {/* Tagline: 35px from top relative to content start */}
        <span className="font-fraunces text-anclora-gold text-[0.65rem] tracking-[0.4em] uppercase mb-[35px] animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:0.5s] blur-sm hover:blur-0 transition-all duration-700">
          Anclora Private Estates
        </span>

        {/* Main Title */}
        <h1 className="text-5xl md:text-8xl font-cardo text-text-primary leading-[1.1] mb-8 animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:1.2s]">
          Activos excepcionales,<br />
          <span className="italic">gestionados con visión</span>
        </h1>

        {/* Subtitle: 210px margin-top as requested */}
        <p className="mt-[20px] text-lg md:text-xl font-inter text-text-secondary max-w-2xl animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:2s]">
          Plataforma inteligente para la gestión de activos premium.
        </p>
      </div>

      {/* Branded Search Widget (Pill Shape) */}
      <div className="absolute bottom-[170px] left-1/2 -translate-x-1/2 w-[850px] max-w-[95%] bg-[#124A50]/45 backdrop-blur-[40px] border border-anclora-gold p-2.5 rounded-full flex items-center gap-2.5 opacity-0 blur-md animate-blur-to-sharp [animation-delay:3s] [animation-fill-mode:forwards] z-30">
        <div className="flex-1 flex flex-col px-8 text-left border-r border-white/5">
          <span className="text-[10px] uppercase text-anclora-gold tracking-widest font-bold mb-1">Localización</span>
          <select className="bg-transparent border-none text-white text-sm outline-none cursor-pointer w-full font-inter">
            <option>Todas las ubicaciones</option>
            <option>Mallorca</option>
            <option>Costa del Sol</option>
            <option>Madrid</option>
          </select>
        </div>
        <div className="flex-1 flex flex-col px-8 text-left border-r border-white/5">
          <span className="text-[10px] uppercase text-anclora-gold tracking-widest font-bold mb-1">Tipo de Activo</span>
          <select className="bg-transparent border-none text-white text-sm outline-none cursor-pointer w-full font-inter">
            <option>Cualquier tipo</option>
            <option>Villas</option>
            <option>Áticos</option>
            <option>Inversión</option>
          </select>
        </div>
        <button className="bg-anclora-gold text-bg-dark font-extrabold text-[0.65rem] uppercase tracking-[3px] px-10 py-4 rounded-full transition-premium hover:scale-105 hover:brightness-110 shadow-lg">
          Buscar
        </button>
      </div>

      {/* Down Indicator */}
      <a href="#next" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-anclora-gold animate-bounce transition-premium">
        <span className="text-[0.65rem] tracking-[5px] font-extrabold uppercase drop-shadow-xl">Explorar</span>
        <div className="w-px h-12 bg-anclora-gold/50" />
      </a>
    </section>
  );
};

export default Hero;


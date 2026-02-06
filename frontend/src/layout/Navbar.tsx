import React from 'react';

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-anclora-gold/10 px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-cardo text-text-primary tracking-tighter">
          ANCLORA<span className="text-anclora-gold italic">C</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-xs uppercase tracking-widest font-fraunces text-text-primary hover:text-anclora-gold transition-colors">Dashboard</a>
        <a href="#" className="text-xs uppercase tracking-widest font-fraunces text-text-primary hover:text-anclora-gold transition-colors">Leads</a>
        <a href="#" className="text-xs uppercase tracking-widest font-fraunces text-text-primary hover:text-anclora-gold transition-colors">Propiedades</a>
        <button className="btn-primary text-xs py-2 px-4">Nuevo Lead</button>
      </div>

      <button className="md:hidden text-text-primary" onClick={onMenuClick}>
        <span className="sr-only">Menu</span>
        {/* Simple hamburger icon */}
        <div className="w-6 h-5 flex flex-col justify-between">
          <div className="w-full h-px bg-current" />
          <div className="w-full h-px bg-current" />
          <div className="w-full h-px bg-current" />
        </div>
      </button>
    </nav>
  );
};

export default Navbar;

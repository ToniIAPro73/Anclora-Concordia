import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-anclora-teal-dark border-t border-anclora-gold/10 pt-20 pb-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-cardo text-anclora-gold mb-6">ANCLORA</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Liderando la innovación en la gestión de real estate de lujo y activos premium.
            </p>
          </div>

          <div>
            <h4 className="font-fraunces text-xs uppercase tracking-widest text-anclora-gold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-text-primary transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Propiedades</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Leads</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Documentación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-fraunces text-xs uppercase tracking-widest text-anclora-gold mb-6">Soporte</h4>
            <ul className="space-y-4 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-text-primary transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Términos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-fraunces text-xs uppercase tracking-widest text-anclora-gold mb-6">Contacto</h4>
            <ul className="space-y-4 text-text-secondary text-sm">
              <li className="text-text-secondary">Mallorca, España</li>
              <li className="text-text-secondary">contact@anclora.com</li>
              <li className="text-text-secondary">+34 900 000 000</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-text-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-text-secondary text-xs">
            © 2026 Anclora Private Estates. Todos los derechos reservados.
          </span>
          <div className="flex gap-6">
            {/* Social icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

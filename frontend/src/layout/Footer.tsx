import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-anclora-teal-dark pt-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-anclora-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="mb-8">
               <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADX9p7XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgBvdPRTQMtDETRRqKDRKIDR6KDBKIDR6IDR6KDhNKpDkiIHvWd0An1T+e753vL9l7v+Xw2vW3LslIqIqIoIqIKooioIqIioqgoooiaIoqiioii6n39IqIoKqKIKoqIoqIoKqI60F9DFFVUFFVUFFVUFFVFVVX9S0RRRUVFVVUUF1McTMf6z8TEf6Z7/V+8+H798S+3N/jS678WE/+Zbn8m/v+9/jXp9WfS/szf2/P6M/r6E/j6S/p9W57fXm8v7S89f/6p/rXN7Xm9/X775/36m/rXLvW3X+s/W9uf2X5/Zlv7pfxM/r5vX/Vn9PX78vX7tn5f1l/v9ffy67Y/vz+z5/v197Z9P56/7/vV3/+v6999L6X88R+v69vX6+39fXp9317uS++3tP+99L8v6+/r29fztX69/rr+fbnv/fqX8n7u+WzLsmwXIn6m+InX8BPP6yeex+df4gV85/tN8A996+X9+Y0Nfuj3NfihL9X3Xn6p3rf9/uWf6pX63ssv1fW23778UrWvv/fXf69/rb3X3+vvS/v9NfW/L89Xv79f66/3elXfO6LofpP/5Bf5j77JfXyRv39+H2/y9/f3E9P78T8A7j9O6AnovmIAAAhDRE9oc3RTeW50aElEAACHAEFsZ29yaXRobV92ZXJzaW9uADIAAWFubm90YXRpb25zAHsAImVkaXRSZW5kZXJpbmdIaW50cyI6eyJvY2NsdXNpb24iOlsidW5vY2NsdWRlZCJdfSwid2F0ZXJtYXJrIjp7Im1vZGUiOiJpbm9iamVjdCJ9fQABYXBpX3ZlcnNpb24AMQABY3JlYXRvcl90b2tlbgA4AHBtcGE6ODZiODBlZjktMmY0NC00NzlhLTg1NGQtNGNkMjA0MDgyM2VkOktBMkpUUVlyYUxMMUp6VndEAAJzaWduYXR1cmUAWAAgaOfp0pW39b3m5hMvO5M7N/YvVwM5zly/0vA8yU70SfsAFSBnU893k5/795jW/D7ABy63k8lP+YIAAWNwYV9wYWlsb2FkAFMAACB7ImFjdGlvbnMiOlsiY3JlYXRlIl0sImV2ZW50VHlwZSI6ImltZ2VfY3JlYXRpb24iLCJ0aW1lc3RhbXAiOjE3MDIxMzM0NDgxMzl9AAACdGh1bWJuYWlsAFUAACh7ImZvcm1hdCI6IndlYnAiLCJoZWlnaHQiOjEyOCwid2lkdGgiOjEyOH0AAWlkADgAMDE5OWNjZDVEYWVkNzlBN0I4OEFCMEJFREQwQUY2RkEAAnR5cGUAbQAAAGNwYV8xAA==" 
                alt="Anclora Private Estates" 
                className="h-[60px] object-contain brightness-[1.2] drop-shadow-2xl"
              />
            </div>
            <p className="text-text-secondary text-sm font-inter leading-relaxed max-w-[200px]">
              Liderando la innovación en activos excepcionales y real estate de lujo.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-fraunces text-[0.7rem] uppercase tracking-[3px] text-anclora-gold mb-10">Plataforma</h4>
            <ul className="space-y-4">
              {['Dashboard', 'Propiedades', 'Leads', 'Documentación'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-text-secondary text-[0.8rem] hover:text-anclora-gold transition-premium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-fraunces text-[0.7rem] uppercase tracking-[3px] text-anclora-gold mb-10">Conectar</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-white text-[0.9rem] font-medium">
                <span className="text-anclora-gold">M</span> Mallorca, España
              </li>
              <li className="flex items-center gap-3">
                <a href="mailto:contact@anclora.com" className="text-text-secondary text-[0.9rem] hover:text-anclora-gold transition-colors">contact@anclora.com</a>
              </li>
              <li>
                <div className="flex gap-4 mt-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-anclora-gold hover:border-anclora-gold transition-premium cursor-pointer group">
                      <div className="w-4 h-4 bg-white/20 group-hover:bg-bg-dark rounded-sm" />
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-fraunces text-[0.7rem] uppercase tracking-[3px] text-anclora-gold mb-2">Newsletter</h4>
            <p className="text-text-secondary text-[0.8rem]">Reciba noticias sobre activos exclusivos y mercado premium.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Su correo electrónico" 
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-anclora-gold transition-premium"
              />
              <button className="btn-primary !rounded-md uppercase tracking-[2px] text-[0.65rem] font-bold py-3">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 order-2 md:order-1">
            {['Privacidad', 'Términos', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-[0.65rem] uppercase tracking-widest text-text-secondary/50 hover:text-anclora-gold transition-colors">{item}</a>
            ))}
          </div>
          <span className="text-text-secondary/40 text-[0.65rem] tracking-widest uppercase order-1 md:order-2">
            © 2026 Anclora Private Estates | Exclusividad & Visión
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


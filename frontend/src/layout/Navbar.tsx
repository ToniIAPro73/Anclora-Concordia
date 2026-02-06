import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-premium px-[5%]- flex items-center ${isScrolled ? 'h-[70px] bg-anclora-teal-dark/98 border-b-anclora-gold' : 'h-[90px] bg-anclora-teal-primary/15 backdrop-blur-md border-b-[rgba(255,255,255,0.05)]'} border-b flex items-center justify-between`}>
      <div className="w-full flex items-center justify-between h-full px-[5%]">
        {/* Header Left: Menu Toggle + Valuation Button */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <button 
            className="group flex items-center gap-[10px] text-text-primary text-[0.75rem] font-bold uppercase tracking-[2px] transition-premium hover:text-anclora-gold"
            onClick={onMenuClick}
          >
            <div className="w-6 h-[2px] bg-current relative before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-current before:left-0 before:top-[-8px] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:left-0 after:bottom-[-8px]" />
            <span>Menu</span>
          </button>
          
          <a href="#" className="hidden lg:inline-flex btn-primary !rounded-full !px-8 !py-3 text-[0.65rem] font-extrabold uppercase tracking-[3px] shadow-[0_10px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]">
            Valora tu propiedad
          </a>
        </div>

        {/* Header Logo: Centered */}
        <div className="flex-1 flex justify-center">
          <a href="/" className="inline-block">
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADX9p7XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgBvdPRTQMtDETRRqKDRKIDR6KDBKIDR6IDR6KDhNKpDkiIHvWd0An1T+e753vL9l7v+Xw2vW3LslIqIqIoIqIKooioIqIioqgoooiaIoqiioii6n39IqIoKqKIKoqIoqIoKqI60F9DFFVUFFVUFFVUFFVFVVX9S0RRRUVFVVUUF1McTMf6z8TEf6Z7/V+8+H798S+3N/jS678WE/+Zbn8m/v+9/jXp9WfS/szf2/P6M/r6E/j6S/p9W57fXm8v7S89f/6p/rXN7Xm9/X775/36m/rXLvW3X+s/W9uf2X5/Zlv7pfxM/r5vX/Vn9PX78vX7tn5f1l/v9ffy67Y/vz+z5/v197Z9P56/7/vV3/+v6999L6X88R+v69vX6+39fXp9317uS++3tP+99L8v6+/r29fztX69/rr+fbnv/fqX8n7u+WzLsmwXIn6m+InX8BPP6yeex+df4gV85/tN8A996+X9+Y0Nfuj3NfihL9X3Xn6p3rf9/uWf6pX63ssv1fW23778UrWvv/fXf69/rb3X3+vvS/v9NfW/L89Xv79f66/3elXfO6LofpP/5Bf5j77JfXyRv39+H2/y9/f3E9P78T8A7j9O6AnovmIAAAhDRE9oc3RTeW50aElEAACHAEFsZ29yaXRobV92ZXJzaW9uADIAAWFubm90YXRpb25zAHsAImVkaXRSZW5kZXJpbmdIaW50cyI6eyJvY2NsdXNpb24iOlsidW5vY2NsdWRlZCJdfSwid2F0ZXJtYXJrIjp7Im1vZGUiOiJpbm9iamVjdCJ9fQABYXBpX3ZlcnNpb24AMQABY3JlYXRvcl90b2tlbgA4AHBtcGE6ODZiODBlZjktMmY0NC00NzlhLTg1NGQtNGNkMjA0MDgyM2VkOktBMkpUUVlyYUxMMUp6VndEAAJzaWduYXR1cmUAWAAgaOfp0pW39b3m5hMvO5M7N/YvVwM5zly/0vA8yU70SfsAFSBnU893k5/795jW/D7ABy63k8lP+YIAAWNwYV9wYWlsb2FkAFMAACB7ImFjdGlvbnMiOlsiY3JlYXRlIl0sImV2ZW50VHlwZSI6ImltZ2VfY3JlYXRpb24iLCJ0aW1lc3RhbXAiOjE3MDIxMzM0NDgxMzl9AAACdGh1bWJuYWlsAFUAACh7ImZvcm1hdCI6IndlYnAiLCJoZWlnaHQiOjEyOCwid2lkdGgiOjEyOH0AAWlkADgAMDE5OWNjZDVEYWVkNzlBN0I4OEFCMEJFREQwQUY2RkEAAnR5cGUAbQAAAGNwYV8xAA==" 
              alt="Anclora Private Estates" 
              className={`object-contain transition-premium border border-transparent rounded-xl p-[5px] hover:brightness-[1.3] hover:scale-[1.05] hover:border-anclora-gold hover:shadow-[0_25px_50px_rgba(0,0,0,0.5),0_15px_35px_rgba(212,175,55,0.25),0_5px_15px_rgba(212,175,55,0.15)] ${isScrolled ? 'h-[50px]' : 'h-[65px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]'}`}
            />
          </a>
        </div>

        {/* Header Right: Nav Links + Lang Switcher */}
        <div className="flex items-center gap-[30px] flex-shrink-0">
          <ul className="hidden md:flex items-center gap-6 list-none">
            {['Dashboard', 'Leads', 'Propiedades'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="relative text-text-primary text-[0.7rem] font-semibold uppercase tracking-[1.5px] opacity-80 transition-premium hover:opacity-100 hover:text-anclora-gold after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-anclora-gold after:to-transparent hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex bg-white/5 p-[4px] rounded-full border border-white/10">
            <button className="px-3 py-1.5 rounded-full text-[0.7rem] font-bold bg-anclora-gold text-white">ES</button>
            <button className="px-3 py-1.5 rounded-full text-[0.7rem] font-bold text-text-primary/50 hover:text-text-primary transition-colors">EN</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


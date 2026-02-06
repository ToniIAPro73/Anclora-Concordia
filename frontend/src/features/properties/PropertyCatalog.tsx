import React, { useState, useEffect } from 'react';

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  status: string;
}

const PropertyCatalog: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/properties')
      .then(res => res.json())
      .then(data => {
        setProperties(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20 text-text-secondary">Cargando catálogo...</div>;

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-cardo">Catálogo de Activos</h2>
        <div className="flex gap-2">
          <select className="bg-anclora-teal-dark border border-anclora-gold/20 text-text-primary text-xs px-4 py-2 rounded-md outline-none">
            <option>Todas las categorías</option>
            <option>Villa</option>
            <option>Apartment</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="glass-card overflow-hidden group hover:border-anclora-gold/40 transition-premium">
            <div className="h-48 bg-anclora-teal-dark relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10" />
               <div className="absolute top-4 right-4 z-20">
                 <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                   property.status === 'AVAILABLE' ? 'bg-anclora-gold/80 text-bg-dark' : 'bg-text-secondary/50 text-text-primary'
                 }`}>
                   {property.status}
                 </span>
               </div>
            </div>
            <div className="p-6">
              <span className="font-fraunces text-anclora-gold text-[10px] uppercase tracking-widest mb-2 block">
                {property.location}
              </span>
              <h3 className="text-xl font-cardo mb-4 group-hover:text-anclora-gold transition-colors">{property.title}</h3>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-cardo text-text-primary">
                  {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(property.price)}
                </span>
                <button className="text-anclora-gold text-xs font-fraunces uppercase tracking-widest border-b border-anclora-gold/0 hover:border-anclora-gold transition-all">
                  Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCatalog;

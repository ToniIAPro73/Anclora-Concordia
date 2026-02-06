import React, { useState, useEffect } from 'react';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    leads: 0,
    properties: 0,
    docs: 0,
    priorityLeads: 0
  });

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:3000/api/v1/leads').then(r => r.json()),
      fetch('http://localhost:3000/api/v1/properties').then(r => r.json()),
      fetch('http://localhost:3000/api/v1/documents').then(r => r.json()),
    ]).then(([leads, properties, docs]) => {
      setStats({
        leads: leads.data.length,
        properties: properties.data.length,
        docs: docs.data.length,
        priorityLeads: leads.data.filter((l: any) => l.score > 80).length
      });
    });
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-cardo mb-8">Visión General</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="glass-card p-6 border-b-2 border-anclora-gold">
          <p className="font-fraunces text-xs text-anclora-gold uppercase tracking-widest mb-2">Total Leads</p>
          <p className="text-4xl font-cardo text-text-primary">{stats.leads}</p>
        </div>
        <div className="glass-card p-6">
          <p className="font-fraunces text-xs text-text-secondary uppercase tracking-widest mb-2">Activos</p>
          <p className="text-4xl font-cardo text-text-primary">{stats.properties}</p>
        </div>
        <div className="glass-card p-6">
          <p className="font-fraunces text-xs text-text-secondary uppercase tracking-widest mb-2">Dossiers</p>
          <p className="text-4xl font-cardo text-text-primary">{stats.docs}</p>
        </div>
        <div className="glass-card p-6 bg-anclora-gold/5">
          <p className="font-fraunces text-xs text-anclora-gold uppercase tracking-widest mb-2">Prioridad IA</p>
          <p className="text-4xl font-cardo text-anclora-gold">{stats.priorityLeads}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8">
          <h3 className="text-xl font-cardo mb-6 italic">IA Insights</h3>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start border-l-2 border-anclora-gold pl-4 py-1">
              <div>
                <p className="text-sm font-medium">Oportunidad Detectada</p>
                <p className="text-xs text-text-secondary">Julian Haupman coincide en un 92% con la nueva Villa Marítima.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start border-l-2 border-text-secondary/20 pl-4 py-1">
              <div>
                <p className="text-sm font-medium">Tendencia del Mercado</p>
                <p className="text-xs text-text-secondary">Aumento del 15% en búsquedas de propiedades con piscina infinita.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 bg-anclora-teal-bg/20">
          <h3 className="text-xl font-cardo mb-6">Actividad Reciente</h3>
          <div className="space-y-4">
             <p className="text-xs text-text-secondary">Próximamente: Integración con timeline de actividades auditable.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

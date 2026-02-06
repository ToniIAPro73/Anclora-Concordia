import React, { useState, useEffect } from 'react';

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  score: number;
  scoringReason: string;
  createdAt: string;
}

const LeadList: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/leads')
      .then(res => res.json())
      .then(data => {
        setLeads(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20 text-text-secondary">Cargando leads...</div>;

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-cardo">Pipeline de Leads</h2>
        <button className="btn-primary text-sm">Añadir Lead</button>
      </div>

      <div className="overflow-x-auto glass-card">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-anclora-gold/10 bg-anclora-teal-dark/50">
              <th className="px-6 py-4 font-fraunces text-xs uppercase tracking-widest text-anclora-gold">Nombre</th>
              <th className="px-6 py-4 font-fraunces text-xs uppercase tracking-widest text-anclora-gold">Email</th>
              <th className="px-6 py-4 font-fraunces text-xs uppercase tracking-widest text-anclora-gold">Estado</th>
              <th className="px-6 py-4 font-fraunces text-xs uppercase tracking-widest text-anclora-gold">Score IA</th>
              <th className="px-6 py-4 font-fraunces text-xs uppercase tracking-widest text-anclora-gold">Fecha</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-text-primary/5">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-text-primary/5 transition-colors cursor-pointer group">
                <td className="px-6 py-4 font-medium">{lead.firstName} {lead.lastName}</td>
                <td className="px-6 py-4 text-text-secondary text-sm">{lead.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                    lead.status === 'QUALIFIED' ? 'bg-green-500/20 text-green-400' : 
                    lead.status === 'NEW' ? 'bg-anclora-gold/20 text-anclora-gold' : 
                    'bg-text-secondary/20 text-text-secondary'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`font-fraunces text-lg ${lead.score > 80 ? 'text-anclora-gold' : 'text-text-primary'}`}>
                      {lead.score}
                    </span>
                    {lead.score > 80 && <span className="text-[10px] text-anclora-gold-light">★ PRIORITY</span>}
                  </div>
                </td>
                <td className="px-6 py-4 text-text-secondary text-xs">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadList;

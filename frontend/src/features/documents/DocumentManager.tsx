import React, { useState, useEffect } from 'react';

interface Document {
  id: string;
  title: string;
  type: string;
  url: string;
  expiresAt: string;
  createdAt: string;
}

const DocumentManager: React.FC = () => {
  const [docs, setDocs] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/documents')
      .then(res => res.json())
      .then(data => {
        setDocs(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20 text-text-secondary">Cargando documentos...</div>;

  return (
    <div className="py-12">
      <h2 className="text-3xl font-cardo mb-8">Gestión de Dossiers</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {docs.map((doc) => (
          <div key={doc.id} className="glass-card p-6 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-anclora-gold/10 rounded flex items-center justify-center text-anclora-gold">
                📄
              </div>
              <div>
                <h4 className="font-medium text-text-primary">{doc.title}</h4>
                <p className="text-[10px] text-text-secondary uppercase tracking-widest">
                  Expira: {new Date(doc.expiresAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button className="btn-secondary text-xs px-4 py-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
              Descargar
            </button>
          </div>
        ))}
        {docs.length === 0 && (
          <div className="col-span-2 text-center py-12 border border-dashed border-anclora-gold/20 rounded-lg text-text-secondary italic">
            No se han generado dossiers todavía.
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentManager;

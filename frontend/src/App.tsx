import { useState } from 'react';
import LeadList from './features/leads/LeadList';
import PropertyCatalog from './features/properties/PropertyCatalog';
import Dashboard from './features/dashboard/Dashboard';
import DocumentManager from './features/documents/DocumentManager';
import Navbar from './layout/Navbar';
import Hero from './layout/Hero';
import Footer from './layout/Footer';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'dashboard' | 'leads' | 'properties' | 'documents'>('home');

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary">
      <Navbar onMenuClick={() => {}} />
      
      <main className="transition-all duration-500">
        {activeTab === 'home' && (
          <>
            <Hero />
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className="glass-card px-4 py-6 hover:bg-anclora-teal-primary/60 transition-colors text-center"
                >
                  <p className="font-cardo text-lg">Dashboard</p>
                </button>
                <button 
                  onClick={() => setActiveTab('leads')}
                  className="glass-card px-4 py-6 hover:bg-anclora-teal-primary/60 transition-colors text-center"
                >
                  <p className="font-cardo text-lg">Leads</p>
                </button>
                <button 
                  onClick={() => setActiveTab('properties')}
                  className="glass-card px-4 py-6 hover:bg-anclora-teal-primary/60 transition-colors text-center"
                >
                  <p className="font-cardo text-lg">Activos</p>
                </button>
                <button 
                  onClick={() => setActiveTab('documents')}
                  className="glass-card px-4 py-6 hover:bg-anclora-teal-primary/60 transition-colors text-center"
                >
                  <p className="font-cardo text-lg">Dossiers</p>
                </button>
              </div>
              
              <div className="text-center">
                 <h3 className="text-2xl font-cardo italic text-text-secondary">Ecosistema Concordia: Inteligencia Inmobiliaria</h3>
              </div>
            </section>
          </>
        )}

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 min-h-screen">
          {activeTab === 'dashboard' && (
            <div>
              <button 
                onClick={() => setActiveTab('home')}
                className="text-anclora-gold text-xs mb-8 hover:underline"
              >
                ← Volver al Inicio
              </button>
              <Dashboard />
            </div>
          )}

          {activeTab === 'leads' && (
            <div>
              <button 
                onClick={() => setActiveTab('home')}
                className="text-anclora-gold text-xs mb-8 hover:underline"
              >
                ← Volver al Inicio
              </button>
              <LeadList />
            </div>
          )}
          
          {activeTab === 'properties' && (
            <div>
              <button 
                onClick={() => setActiveTab('home')}
                className="text-anclora-gold text-xs mb-8 hover:underline"
              >
                ← Volver al Inicio
              </button>
              <PropertyCatalog />
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <button 
                onClick={() => setActiveTab('home')}
                className="text-anclora-gold text-xs mb-8 hover:underline"
              >
                ← Volver al Inicio
              </button>
              <DocumentManager />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

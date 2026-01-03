import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from './components/ui/toaster';
import Hero from './components/Hero';
import HeroVideo from './components/HeroVideo';
import Benefits from './components/Benefits';
import Plans from './components/Plans';
import Requirements from './components/Requirements';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Helmet>
                <title>ᏀᏢBOX - Transforme seu PC em uma central completa de jogos</title>
                <meta
                    name="description"
                    content="Mais de 10 mil jogos clássicos e modernos em um único sistema, sem mensalidade. Acesso vitalício, suporte eficiente e garantia de 7 dias."
                />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
                <Hero />
                <HeroVideo />
                <Benefits />
                <Plans />
                <Requirements />
                <FinalCTA />
                <Footer />
                <Toaster />
            </div>
        </>
    );
}

export default App;

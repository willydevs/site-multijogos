import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ExternalLink, Star } from 'lucide-react';

const plans = [
    {
        name: 'Pack Standard ᏀᏢBOX',
        image: 'https://horizons-cdn.hostinger.com/289293dc-3490-4486-972b-33e4d34b1415/e6c10cfce889093d2340f8ccd1fd838a.png',
        link: 'https://go.perfectpay.com.br/PPU38CPRMCT',
        priceOriginal: 67.0,
        pricePromo: 50.0,
        description:
            'Acesso básico ao Sistema ᏀᏢBOX. Acesso a mais de 7.000 jogos clássicos que marcaram gerações. Cerca de 80 GB de conteúdo totalmente organizado. ',
        popular: true
    },
    {
        name: 'Pack Adicional ᏀᏢBOX',
        image: 'https://horizons-cdn.hostinger.com/289293dc-3490-4486-972b-33e4d34b1415/73aae1ececb0259e5cde04fc001aeb23.png',
        link: 'https://go.perfectpay.com.br/PPU38CPRO7J',
        priceOriginal: 57.0,
        pricePromo: 40.0,
        description:
            'Expanda sua biblioteca no ᏀᏢBOX. Desbloqueia mais consoles e jogos, ampliando a experiência do Pack Standard. Inclui sistemas como PSP, PS2, PS3, PS4, PS5, Xbox 360, Xbox One/S, GameCube, Wii, Wii U e Switch. Requer o Pack Standard.',
        popular: false
    },
    {
        name: 'Pack de Atualizações',
        image: 'https://horizons-cdn.hostinger.com/289293dc-3490-4486-972b-33e4d34b1415/c3ce10f23adb25d3d3a6ac57fba8203c.png',
        link: 'https://go.perfectpay.com.br/PPU38CPRO84',
        priceOriginal: 60.0,
        pricePromo: 40.0,
        description:
            'Novos jogos adicionados continuamente. Biblioteca em constante crescimento com atualizações frequentes. Mais de 20 TB de conteúdo, incluindo grandes clássicos e títulos marcantes. Ideal para manter o ᏀᏢBOX sempre atualizado.',
        popular: false
    },
    {
        name: 'Pack PC Completo',
        image: 'https://horizons-cdn.hostinger.com/289293dc-3490-4486-972b-33e4d34b1415/c4fdb404e54cc01ff71f595ecae233b4.png',
        link: 'https://go.perfectpay.com.br/PPU38CPRSB7',
        priceOriginal: 184.0,
        pricePromo: 100.0,
        description:
            'O pacote mais completo para jogar no PC. Reúne todos os principais conteúdos do ᏀᏢBOX em uma única compra, garantindo acesso total à biblioteca. Mais economia, mais jogos e atualizações contínuas, sem mensalidade.',
        popular: false
    },
    {
        name: 'Pack Completo',
        image: 'https://horizons-cdn.hostinger.com/289293dc-3490-4486-972b-33e4d34b1415/b3e5f8d7ab022a1734427b4aeb58e40a.png',
        link: 'https://go.perfectpay.com.br/PPU38CPRSBB',
        priceOriginal: 214.0,
        pricePromo: 120.0,
        description:
            'A experiência mais completa do ᏀᏢBOX. Acesso total no PC e também no mobile, sem limitações. Todos os conteúdos reunidos em um único pacote, oferecendo liberdade total para jogar onde quiser.',
        popular: true
    },
    {
        name: 'Premium Mobile',
        image: 'https://horizons-cdn.hostinger.com/289293dc-3490-4486-972b-33e4d34b1415/94354b20b47fb9d9380bf4214a9f6688.png',
        link: 'https://go.perfectpay.com.br/PPU38CPRSAL',
        priceOriginal: 50.0,
        pricePromo: 30.0,
        description:
            'Jogue clássicos diretamente no celular, tablet ou TV Box Android. Ideal para quem quer praticidade e mobilidade. Compatível com Android 7.0.3 ou superior.',
        popular: false
    }
];

const Plans = () => {
    return (
        <section id="plans" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Escolha seu plano ideal
                    </h2>
                    <p className="text-xl text-gray-400">
                        Pacotes completos para diferentes necessidades
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="relative h-full"
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                        <Star className="w-4 h-4 text-white fill-white" />
                                        <span className="text-xs font-bold text-white">POPULAR</span>
                                    </div>
                                </div>
                            )}

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-purple-500/40 overflow-hidden h-full flex flex-col">
                                <div className="h-64 bg-slate-950 overflow-hidden">
                                    <img
                                        src={plan.image}
                                        alt={plan.name}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {plan.name}
                                    </h3>

                                    <div className="text-gray-400 space-y-2 mb-5 flex-1">
                                        {plan.description.split('. ').map((line, i) => (
                                            <p key={i}>{line.trim()}.</p>
                                        ))}
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-end gap-3">
                                            <span className="text-gray-500 line-through text-base">
                                                R$ {plan.priceOriginal.toFixed(2).replace('.', ',')}
                                            </span>
                                            <span className="text-3xl font-bold text-white">
                                                R$ {plan.pricePromo.toFixed(2).replace('.', ',')}
                                            </span>
                                            <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">
                                                Vitalício
                                            </span>
                                        </div>
                                    </div>

                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
                                    >
                                        <a href={plan.link} target="_blank" rel="noopener noreferrer">
                                            Adquirir agora
                                            <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;

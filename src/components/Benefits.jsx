import React from 'react';
import { motion } from 'framer-motion';
import { Library, Zap, Headphones, Shield } from 'lucide-react';

const benefits = [
    {
        icon: Library,
        title: 'Biblioteca gigante de jogos',
        description: 'Acesso a mais de 10 mil títulos clássicos e modernos para PC e mobile',
        gradient: 'from-purple-600 to-violet-600'
    },
    {
        icon: Zap,
        title: 'Uso simples e rápido',
        description: 'Interface intuitiva e instalação fácil para começar a jogar imediatamente',
        gradient: 'from-violet-600 to-blue-600'
    },
    {
        icon: Headphones,
        title: 'Suporte eficiente',
        description: 'Equipe dedicada para resolver suas dúvidas e problemas rapidamente',
        gradient: 'from-blue-600 to-cyan-600'
    },
    {
        icon: Shield,
        title: 'Garantia de 7 dias',
        description: 'Teste sem riscos com garantia total de devolução do seu investimento',
        gradient: 'from-cyan-600 to-purple-600'
    }
];

const Benefits = () => {
    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Por que escolher GPBOX?
                    </h2>
                    <p className="text-xl text-gray-400">Vantagens exclusivas para sua experiência gamer</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-300"
                                    style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                                    className={`bg-gradient-to-br ${benefit.gradient} absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-300`}
                                />
                                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 h-full backdrop-blur-sm">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
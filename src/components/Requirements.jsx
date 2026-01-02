import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, HardDrive, Gamepad } from 'lucide-react';

const requirements = [
    {
        icon: Monitor,
        title: 'Sistema Operacional',
        value: 'Windows 10 64 bits',
        gradient: 'from-purple-600 to-violet-600'
    },
    {
        icon: HardDrive,
        title: 'Memória RAM',
        value: 'Mínimo 4GB',
        gradient: 'from-violet-600 to-blue-600'
    },
    {
        icon: Cpu,
        title: 'Processador',
        value: 'Intel i3 ou Ryzen 3',
        gradient: 'from-blue-600 to-cyan-600'
    },
    {
        icon: Gamepad,
        title: 'Controles',
        value: 'XINPUT compatível',
        gradient: 'from-cyan-600 to-purple-600'
    }
];

const Requirements = () => {
    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Requisitos do sistema
                    </h2>
                    <p className="text-xl text-gray-400">Configure seu PC para a melhor experiência</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {requirements.map((req, index) => {
                        const Icon = req.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${req.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 text-center backdrop-blur-sm">
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${req.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-300 mb-2">{req.title}</h3>
                                    <p className="text-xl font-bold text-white">{req.value}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Requirements;
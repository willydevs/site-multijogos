import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Sparkles, Gamepad2 } from 'lucide-react';

const Hero = () => {
    const scrollToPlans = () => {
        document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-medium text-purple-300">Sistema Completo de Jogos</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent leading-tight"
                >
                    Transforme seu PC em uma central completa de jogos
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                >
                    Mais de 10 mil jogos clássicos e modernos em um único sistema, sem mensalidade
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        size="lg"
                        onClick={scrollToPlans}
                        className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 group"
                    >
                        <Gamepad2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Ver planos
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={scrollToPlans}
                        className="border-2 border-purple-500/50 bg-purple-950/30 hover:bg-purple-900/50 text-purple-300 hover:text-purple-200 px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300"
                    >
                        Testar por 7 dias
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 flex justify-center"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-2xl opacity-30 animate-pulse" />
                        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                            <div className="flex flex-wrap justify-center gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-purple-400 mb-1">10.000+</div>
                                    <div className="text-sm text-gray-400">Jogos disponíveis</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-violet-400 mb-1">Vitalício</div>
                                    <div className="text-sm text-gray-400">Acesso permanente</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-400 mb-1">7 dias</div>
                                    <div className="text-sm text-gray-400">Garantia total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
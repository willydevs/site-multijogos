import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const FinalCTA = () => {
    const scrollToPlans = () => {
        document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-32 px-4 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl" />
                </motion.div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-8">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-medium text-purple-300">Comece agora mesmo</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                        Reviva os grandes momentos da sua infância
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Tenha acesso instantâneo a uma biblioteca gigantesca de jogos clássicos e modernos com garantia total de 7 dias
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            onClick={scrollToPlans}
                            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-12 py-8 text-xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 group"
                        >
                            Garantir meu acesso agora
                            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </motion.div>

                    <p className="text-sm text-gray-500 mt-8">
                        ✓ Acesso vitalício · ✓ Sem mensalidades · ✓ Garantia de 7 dias
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
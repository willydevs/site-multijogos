import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-purple-500/20 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                            <Gamepad2 className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                            GPBOX
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
                        <p>© 2026 GPBOX. Todos os direitos reservados.</p>
                        <span className="hidden md:inline text-purple-500/50">•</span>
                        <p>Transformando PCs em centrais completas de jogos</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
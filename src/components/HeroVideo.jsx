import React from 'react';

const HeroVideo = () => {
    return (
        <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 relative z-10 -mt-24">
            <div className="w-full max-w-6xl relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-[0_0_40px_-5px_rgba(0,0,0,0.4)] border border-white/10 bg-slate-900/50 backdrop-blur-sm">

                {/* Overlay for contrast */}
                <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://plustech.aju.br/wp-content/uploads/2026/01/video-fundo-retrobox.mp4"
                        type="video/mp4"
                    />
                    Seu navegador não suporta a tag de vídeo.
                </video>
            </div>
        </section>
    );
};

export default HeroVideo;

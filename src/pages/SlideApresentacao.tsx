import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Hash } from 'lucide-react';
import { SLIDES } from '@/slide-deck/constants';
import { SlideRenderer } from '@/slide-deck/components/SlideRenderer';
import logoHeader from '@/assets/logoheader.png';
import acessoIntegridade from '@/assets/slides/acesso-assinatura-integridade.png';
import cidadaoCelular from '@/assets/slides/cidadao-acompanhando-no-celular.png';
import organizaRegistra from '@/assets/slides/organiza-registra-e-prova.png';
import sucessoEquipe from '@/assets/slides/sucesso-em-equipe.png';

const SlideApresentacao: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const totalSlides = SLIDES.length;
  const currentSlide = SLIDES[currentSlideIndex];

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setDirection(1);
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const preload = [
      acessoIntegridade,
      cidadaoCelular,
      organizaRegistra,
      sucessoEquipe,
    ];
    preload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Animation variants for slide transitions
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.98
    })
  };

  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  // Background tint logic based on slide ID to create rhythm
  // Alternating very subtle tints of the secondary palette
  const getBackgroundClass = (index: number) => {
    if (index % 4 === 0) return 'bg-mainBg'; // Standard
    if (index % 4 === 1) return 'bg-[#fffef5]'; // Pure base
    if (index % 4 === 2) return 'bg-[#fdfbf6]'; // Slightly warmer
    return 'bg-[#fcfaf4]'; // Variation
  };

  return (
    <div className={`deck-root w-screen h-screen ${getBackgroundClass(currentSlideIndex)} text-mainText overflow-hidden relative font-sans flex flex-col selection:bg-highlight selection:text-white transition-colors duration-1000`}>
      
      {/* Texture Overlay (Grain) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none z-0 mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }} 
      />

      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#dbcfb0 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
        
        {/* Organic Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -top-[10%] -right-[5%] w-[50vw] h-[50vw] bg-secondaryBg/20 rounded-full blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
           animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute -bottom-[10%] -left-[5%] w-[60vw] h-[60vw] bg-[#e6dfc8]/30 rounded-full blur-[120px] mix-blend-multiply" 
        />
      </div>

      {/* Header / Brand Area */}
      <header className="absolute top-0 left-0 w-full px-12 py-8 flex justify-between items-start z-50 pointer-events-none">
        <div className="flex items-center gap-3 opacity-60">
            <div className="w-10 h-10 bg-white/50 border border-highlight/10 rounded-lg flex items-center justify-center text-highlight shadow-sm">
                <Hash size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-highlight">Treinamento</span>
                <span className="text-sm font-semibold text-mainText/60">Processo Legislativo</span>
            </div>
        </div>
        
        <div className="group relative pointer-events-auto">
             <div className="border border-secondaryBg/40 bg-white/80 backdrop-blur-sm px-7 py-4 rounded-lg flex items-center gap-3 shadow-sm transition-colors">
                 <img src={logoHeader} alt="Karina Botti Advocacia" className="h-11 w-auto" />
             </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative flex items-center justify-center w-full max-w-[1920px] mx-auto z-10">
        <AnimatePresence initial={false} custom={direction} mode='popLayout'>
          <motion.div
            key={currentSlideIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.3 }
            }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute w-full h-full flex flex-col justify-center"
          >
            <SlideRenderer data={currentSlide} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer / Navigation */}
      <footer className="absolute bottom-0 left-0 w-full px-12 pb-6 pt-3 z-50">
        <div className="flex flex-col gap-3">
            
            {/* Progress Bar */}
            <div className="order-last mt-2 w-full h-1 bg-secondaryBg/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div 
                    className="h-full bg-highlight shadow-[0_0_10px_rgba(128,53,58,0.4)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                />
            </div>

            <div className="flex justify-between items-end">
                <div className="flex-1" aria-hidden="true" />

                {/* Controls */}
                <div className="flex items-center gap-6">
                     <span className="text-lg font-medium text-mainText/40 font-mono tracking-widest">
                        {String(currentSlideIndex + 1).padStart(2, '0')} / {totalSlides}
                    </span>
                    <div className="flex gap-3">
                        <button 
                            onClick={prevSlide}
                            disabled={currentSlideIndex === 0}
                            className={`p-4 rounded-full transition-all duration-300 ${currentSlideIndex === 0 ? 'bg-secondaryBg/10 text-mainText/10 cursor-not-allowed scale-90' : 'bg-white border border-secondaryBg hover:border-highlight hover:text-highlight text-mainText shadow-sm hover:shadow-md'}`}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={nextSlide}
                            disabled={currentSlideIndex === totalSlides - 1}
                            className={`p-4 rounded-full transition-all duration-300 ${currentSlideIndex === totalSlides - 1 ? 'bg-secondaryBg/10 text-mainText/10 cursor-not-allowed scale-90' : 'bg-highlight text-white hover:bg-highlight/90 hover:scale-105 shadow-lg shadow-highlight/20'}`}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default SlideApresentacao;

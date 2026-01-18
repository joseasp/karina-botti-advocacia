import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SlideData } from '../types';
import { ChevronRight, ShieldCheck, FileText, CheckCircle2, ArrowRight, Image as ImageIcon, Sparkles } from 'lucide-react';
import logoHeader from '@/assets/logoheader.png';
import acessoIntegridade from '@/assets/slides/acesso-assinatura-integridade.png';
import cidadaoCelular from '@/assets/slides/cidadao-acompanhando-no-celular.png';
import organizaRegistra from '@/assets/slides/organiza-registra-e-prova.png';
import karinaPortrait from '@/assets/karina-portrait.jpg';

interface SlideRendererProps {
  data: SlideData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 60, damping: 12 },
  },
};

const slideImages: Record<number, { src: string; alt: string }> = {
  16: { src: organizaRegistra, alt: 'Organiza, registra e prova' },
  19: { src: acessoIntegridade, alt: 'Acesso, assinatura e integridade' },
  20: { src: cidadaoCelular, alt: 'Cidadao acompanhando no celular' },
};

// Reusable Placeholder Component
const PlaceholderImage: React.FC = () => (
    <div className="w-full h-full min-h-[400px] bg-secondaryBg/10 border-2 border-dashed border-secondaryBg/40 rounded-3xl flex flex-col items-center justify-center text-mainText/30 group-hover:border-highlight/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <ImageIcon size={48} className="mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500" />
        <p className="text-sm font-semibold uppercase tracking-widest opacity-60">Espaço para Imagem</p>
        <p className="text-xs mt-1 opacity-40">Ilustração / Print / Foto</p>
    </div>
);
const CoverSlide: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  const words = ["Qualidade", "Transparência", "Modernidade", "Eficiência"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const delay = activeIndex === words.length ? 3200 : 2200;
    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev >= words.length ? 0 : prev + 1));
    }, delay);
    return () => clearTimeout(timeout);
  }, [activeIndex, words.length]);

  const subtitleParts = subtitle ? subtitle.split(" + ") : [];
  const subtitleMain = subtitleParts[0] ?? subtitle ?? "";
  const subtitleAccent = subtitleParts[1] ?? "";
  const showAccent = subtitleParts.length > 1;

  // Floating particles for cover
  const coverParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    duration: 10 + (i % 4) * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.4 + Math.random() * 0.6
  }));

  return (
    <div className="relative w-full h-full overflow-hidden font-sans bg-gradient-to-br from-[#FDF6E3] via-[#FFF8E7] to-[#FDF6E3] flex flex-col items-center justify-center">
      {/* Enhanced animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.2, 0.35, 0.25, 0.2],
          backgroundColor: ["#7A2B35", "#8C3A45", "#A0424F", "#7A2B35"],
          rotate: [0, 120, 240, 360]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[55vh] h-[55vh] rounded-full blur-[90px] z-0"
      />
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 50, -35, 0],
          scale: [1, 1.3, 0.85, 1],
          opacity: [0.2, 0.4, 0.3, 0.2],
          backgroundColor: ["#C5A059", "#D1B06A", "#E0C080", "#C5A059"],
          rotate: [360, 240, 120, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-[65vh] h-[65vh] rounded-full blur-[100px] z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.45, 0.2],
          backgroundColor: ["#DECBA4", "#E6D6B8", "#F0E0C8", "#DECBA4"],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-[15%] w-[25vh] h-[25vh] rounded-full blur-[70px] z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
          backgroundColor: ["#A67C52", "#B88C62", "#CA9C72", "#A67C52"],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] right-[20%] w-[30vh] h-[30vh] rounded-full blur-[85px] z-0"
      />

      {/* Floating particles */}
      {coverParticles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [particle.y + '%', (particle.y - 40) + '%'],
            x: [particle.x + '%', (particle.x + 8) + '%', (particle.x - 8) + '%', particle.x + '%'],
            scale: [particle.scale, particle.scale * 1.3, particle.scale],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          className="absolute w-1.5 h-1.5 bg-highlight/40 rounded-full z-0"
          style={{ left: particle.x + '%', top: particle.y + '%' }}
        />
      ))}

      {/* Enhanced decorative grid pattern */}
      <motion.div
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, #7A2B35 1.5px, transparent 1.5px)",
          backgroundSize: "35px 35px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-between w-full h-full max-w-7xl px-4 py-8">
        {/* Header - Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          {/* Title with letter animation */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-serif font-bold text-[#7A2B35] tracking-tight leading-none relative"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px rgba(122, 43, 53, 0)",
                    "0 0 20px rgba(122, 43, 53, 0.3)",
                    "0 0 20px rgba(122, 43, 53, 0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {title}
              </motion.span>
            </motion.h1>
          </div>

          {/* Animated divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto rounded-full mb-6 relative overflow-hidden"
          >
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 100 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-8 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
            />
          </motion.div>

          {/* Subtitle */}
          {subtitleMain && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-xl md:text-3xl text-[#4A3B32] font-light"
            >
              {showAccent ? (
                <>
                  {subtitleMain}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="block mt-2 md:mt-3"
                  >
                    <span className="font-serif italic text-[#C5A059] font-bold text-3xl mx-2">na</span>
                    <span className="font-semibold text-[#7A2B35] border-b-2 border-[#7A2B35]/30 pb-1 px-2">
                      {subtitleAccent}
                    </span>
                  </motion.span>
                </>
              ) : (
                subtitleMain
              )}
            </motion.h2>
          )}
        </motion.div>

        {/* Logo with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 1.6, type: "spring", stiffness: 100 }}
          className="flex items-center justify-center py-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-64 md:w-96 relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(197, 160, 89, 0.3)",
                  "0 0 50px rgba(197, 160, 89, 0.5)",
                  "0 0 30px rgba(197, 160, 89, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-3xl"
            >
              <img src={logoHeader} alt="Karina Botti Logo" className="w-full h-auto object-contain drop-shadow-2xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Words animation section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="w-full flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {words.map((word, index) => {
              const isActive = index === activeIndex;
              const isDone = activeIndex === words.length;

              return (
                <div key={word} className="flex items-center">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      y: isActive ? -3 : 0
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className="relative"
                  >
                    <motion.span
                      animate={{
                        color: isActive ? "#7A2B35" : "#4A3B32",
                        opacity: isActive ? 1 : (isDone ? 0.8 : 0.5),
                        fontWeight: isActive ? 700 : 500,
                      }}
                      className="text-lg md:text-2xl relative z-10"
                    >
                      {word}
                    </motion.span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-[#C5A059]/30 rounded-full blur-xl"
                      />
                    )}
                  </motion.div>
                  {index < words.length - 1 && (
                    <motion.span
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        rotate: isActive ? 90 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 md:ml-6 text-[#C5A059] font-bold text-xl md:text-2xl opacity-80"
                    >
                      +
                    </motion.span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Result badge */}
          <div className="h-16 flex items-center justify-center overflow-visible">
            <AnimatePresence>
              {activeIndex === words.length && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(197, 160, 89, 0.3)",
                        "0 10px 50px rgba(197, 160, 89, 0.5)",
                        "0 10px 30px rgba(197, 160, 89, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-8 py-3 rounded-full border-2 border-[#C5A059]/40"
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="text-[#C5A059] font-bold text-3xl"
                    >
                      =
                    </motion.span>
                    <span className="font-serif font-bold text-2xl md:text-3xl bg-gradient-to-r from-[#7A2B35] to-[#C5A059] bg-clip-text text-transparent">
                      Poder Legislativo Forte
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative wave */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2.8, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-40"
      />
    </div>
  );
};



export const SlideRenderer: React.FC<SlideRendererProps> = ({ data }) => {
  const { layout, title, subtitle, content, cards, highlight, imagePlaceholder } = data;
  const slideImage = slideImages[data.id];

  // -- COVER LAYOUT --
  if (layout === 'cover') {
    return <CoverSlide title={title} subtitle={subtitle} />;
  }

  // -- LIST LAYOUT --
  if (layout === 'list') {
    return (
      <div className="flex flex-col justify-center h-full px-20 max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-l-[6px] border-highlight pl-8"
        >
          <h2 className="font-serif text-6xl text-mainText font-bold mb-4">{title}</h2>
          {subtitle && <p className="font-sans text-3xl text-mainText/70">{subtitle}</p>}
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {content?.map((item, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="flex items-start p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <span className="mt-2 mr-6 text-highlight flex-shrink-0 group-hover:scale-110 transition-transform">
                <ChevronRight size={32} strokeWidth={4} />
              </span>
              <span className="font-sans text-3xl md:text-4xl text-mainText leading-snug group-hover:text-highlight transition-colors duration-300">
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    );
  }

  // -- CARDS LAYOUT --
  if (layout === 'cards') {
    const isTwoCards = cards && cards.length === 2;

    return (
      <div className="flex flex-col h-full px-16 pt-16 pb-8 max-w-[1600px] mx-auto w-full justify-center">
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-mainText font-bold mb-4">{title}</h2>
          {subtitle && <p className="font-sans text-2xl md:text-3xl text-mainText/60 mt-3">{subtitle}</p>}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`grid gap-8 ${isTwoCards ? 'grid-cols-2 h-[50%]' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}
        >
          {cards?.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                backgroundColor: "#fff",
                borderColor: "#80353a",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className={`bg-white/60 p-10 rounded-2xl border-2 border-transparent hover:border-highlight transition-all duration-300 flex flex-col ${isTwoCards ? 'justify-center items-center text-center' : 'justify-start'}`}
            >
              <div className={`mb-6 text-highlight ${isTwoCards ? 'scale-150 mb-8' : ''}`}>
                 {idx % 3 === 0 ? <ShieldCheck size={isTwoCards ? 48 : 32} /> : idx % 3 === 1 ? <FileText size={isTwoCards ? 48 : 32} /> : <CheckCircle2 size={isTwoCards ? 48 : 32} />}
              </div>
              {card.title && (
                <h3 className={`font-serif font-bold text-highlight mb-4 ${isTwoCards ? 'text-4xl' : 'text-2xl'}`}>
                  {card.title}
                </h3>
              )}
              <p className={`font-sans text-mainText/90 leading-relaxed ${isTwoCards ? 'text-3xl max-w-lg' : 'text-xl'}`}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  // -- TIMELINE LAYOUT --
  if (layout === 'timeline') {
    const steps = content ?? [];
    const isSingleRow = steps.length <= 6;
    const midPoint = Math.ceil(steps.length / 2);
    const row1 = isSingleRow ? steps : steps.slice(0, midPoint);
    const row2 = isSingleRow ? [] : steps.slice(midPoint);
    const stepWidth = isSingleRow ? 'w-56' : 'w-48';

    return (
      <div className="flex flex-col h-full px-16 justify-center w-full max-w-[1600px] mx-auto">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-mainText font-bold">{title}</h2>
          {subtitle && <p className="text-2xl text-mainText/70 mt-3">{subtitle}</p>}
        </motion.div>

        <div className="flex flex-col gap-12">
            <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-secondaryBg -translate-y-1/2 rounded-full" />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-between relative z-10"
                >
                    {row1?.map((step, idx) => (
                        <motion.div key={idx} variants={itemVariants} className={`flex flex-col items-center group ${stepWidth}`}>
                             <div className="w-10 h-10 rounded-full bg-white border-4 border-highlight mb-4 shadow-md z-20 group-hover:scale-125 group-hover:bg-highlight group-hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-lg text-highlight">
                                {idx + 1}
                             </div>
                             <div className="bg-white p-4 rounded-xl border border-secondaryBg/40 text-center w-full shadow-sm group-hover:shadow-lg group-hover:border-highlight transition-all min-h-[100px] flex items-center justify-center">
                                <span className="text-lg font-semibold text-mainText leading-tight">{step}</span>
                             </div>
                        </motion.div>
                    ))}
                     <div className={`absolute right-0 top-1/2 ${isSingleRow ? 'translate-x-6' : 'translate-x-12'} text-secondaryBg`}>
                        <ArrowRight size={40} />
                     </div>
                </motion.div>
            </div>

            {!isSingleRow && (
              <div className="relative ml-12">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-secondaryBg -translate-y-1/2 rounded-full" />
                  <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex justify-between relative z-10"
                  >
                      {row2?.map((step, idx) => (
                          <motion.div key={idx} variants={itemVariants} className={`flex flex-col items-center group ${stepWidth}`}>
                               <div className="w-10 h-10 rounded-full bg-white border-4 border-highlight mb-4 shadow-md z-20 group-hover:scale-125 group-hover:bg-highlight group-hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-lg text-highlight">
                                  {midPoint + idx + 1}
                               </div>
                               <div className="bg-white p-4 rounded-xl border border-secondaryBg/40 text-center w-full shadow-sm group-hover:shadow-lg group-hover:border-highlight transition-all min-h-[100px] flex items-center justify-center">
                                  <span className="text-lg font-semibold text-mainText leading-tight">{step}</span>
                               </div>
                          </motion.div>
                      ))}
                       <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-highlight rounded-full" />
                  </motion.div>
              </div>
            )}
        </div>

        {highlight && (
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1 }}
             className="mt-16 mx-auto p-8 bg-highlight text-white rounded-2xl shadow-xl max-w-4xl flex items-center gap-6"
           >
              <div className="bg-white/20 p-3 rounded-full">
                  <Sparkles size={32} />
              </div>
              <div>
                <h4 className="font-bold uppercase text-sm tracking-wider mb-2 opacity-80">Ponto de Atenção</h4>
                <p className="text-2xl font-serif italic">{highlight}</p>
              </div>
           </motion.div>
        )}
      </div>
    );
  }

    // -- SPLIT LAYOUT (Enhanced for Text Left / Image Right or Content Right) --
    if (layout === 'split') {
        return (
             <div className="flex flex-col h-full justify-center px-16 max-w-[1700px] mx-auto w-full">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center h-full max-h-[80vh]">
                     {/* LEFT COLUMN: Text Content */}
                     <motion.div
                         initial={{ x: -50, opacity: 0 }}
                         animate={{ x: 0, opacity: 1 }}
                         transition={{ duration: 0.7 }}
                         className="flex flex-col justify-center h-full"
                     >
                         <div className="w-24 h-2 bg-highlight mb-8 rounded-full" />
                         <h2 className="font-serif text-6xl xl:text-7xl text-mainText font-bold mb-6 leading-tight">{title}</h2>
                         {subtitle && <p className="font-sans text-3xl text-mainText/60 font-light mb-10 leading-relaxed">{subtitle}</p>}

                         {/* Highlight if provided (often serves as a key takeaway in split view) */}
                         {highlight && !imagePlaceholder && (
                             <div className="bg-highlight/5 border-l-4 border-highlight p-6 rounded-r-lg mb-8">
                                 <p className="text-highlight text-xl font-medium">{highlight}</p>
                             </div>
                         )}

                         {/* Content List if provided */}
                         {content && imagePlaceholder && (
                            <motion.ul
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-4"
                            >
                                {content.map((item, idx) => (
                                    <motion.li key={idx} variants={itemVariants} className="flex items-start">
                                        <div className="mt-2 mr-4 text-highlight flex-shrink-0">
                                            <ChevronRight size={28} strokeWidth={3} />
                                        </div>
                                        <span className="text-2xl text-mainText leading-snug">{item}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                         )}
                     </motion.div>

                     {/* RIGHT COLUMN: Image Placeholder or Content Blocks */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-full flex flex-col justify-center"
                     >
                         {imagePlaceholder ? (
                             <div className="relative h-[500px] md:h-[600px] w-full group">
                                 {slideImage ? (
                                     <div className="h-full w-full rounded-3xl bg-white/70 p-6 shadow-lg shadow-highlight/10">
                                         <img
                                             src={slideImage.src}
                                             alt={slideImage.alt}
                                             className="h-full w-full rounded-2xl object-contain"
                                             loading="lazy"
                                             decoding="async"
                                         />
                                     </div>
                                 ) : (
                                     <PlaceholderImage />
                                 )}
                                 {/* If there's a highlight, maybe show it under the image if space permits?
                                     Actually, let's keep highlight on left if present, or overlay.
                                     If 'highlight' exists and we have an image, let's show it as a caption card overlapping. */}
                                 {highlight && (
                                     <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl border-l-4 border-highlight shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <p className="text-lg text-mainText font-medium italic">{highlight}</p>
                                     </div>
                                 )}
                             </div>
                         ) : (
                             // Default fallback if not an image placeholder (standard split content cards)
                             <div className="grid grid-cols-1 gap-5">
                                 {content?.map((item, idx) => (
                                    <motion.div key={idx} variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-secondaryBg/50 transition-all">
                                        <p className="text-2xl text-mainText">{item}</p>
                                    </motion.div>
                                 ))}
                             </div>
                         )}
                     </motion.div>
                 </div>
             </div>
        )
    }

    // -- SECTION LAYOUT (General - Centered Title Left, List Right) --
    if (layout === 'section') {
        return (
          <div className="flex flex-col h-full justify-center px-16 max-w-[1600px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                     <div className="w-20 h-2 bg-highlight mb-8" />
                    <h2 className="font-serif text-6xl text-mainText font-bold mb-6 leading-tight">{title}</h2>
                    {subtitle && <p className="font-sans text-3xl text-mainText/60 font-light mb-10">{subtitle}</p>}

                    {highlight && (
                        <div className="bg-highlight text-white p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                            <p className="font-medium text-2xl leading-relaxed">{highlight}</p>
                        </div>
                    )}
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                    <ul className="space-y-5">
                        {content?.map((item, idx) => (
                             <motion.li key={idx} variants={itemVariants} className="bg-white p-6 rounded-xl border-l-4 border-secondaryBg hover:border-highlight shadow-sm transition-all hover:translate-x-2 group">
                                <div className="flex items-start gap-4">
                                     <div className="mt-1 text-secondaryBg group-hover:text-highlight transition-colors">
                                        <ChevronRight />
                                     </div>
                                    <p className="text-2xl text-mainText">{item}</p>
                                </div>
                             </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
          </div>
        );
      }

    // -- CLOSING LAYOUT (REFORMULADO COM ANIMAÇÕES INCRÍVEIS) --
    if (layout === 'closing') {
        const authorName = data.authorName ?? "KARINA BOTTI";
        const authorRole = data.authorRole ?? "Assessora Jurídica";
        const authorOab = data.authorOAB ?? data.authorOab ?? "OAB/MG 111.637";
        const authorImage = data.authorImage ?? karinaPortrait;

        // Floating particles configuration
        const particles = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            delay: i * 0.3,
            duration: 8 + (i % 3) * 2,
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: 0.5 + Math.random() * 0.5
        }));

        return (
            <div className="relative flex h-full w-full max-w-[1800px] mx-auto px-16 items-center overflow-hidden bg-gradient-to-br from-[#FDF6E3] via-white to-[#FDF6E3]">
                {/* Animated gradient blobs */}
                <motion.div
                    animate={{
                        x: [0, 40, -20, 0],
                        y: [0, -30, 20, 0],
                        scale: [1, 1.15, 0.95, 1],
                        opacity: [0.2, 0.35, 0.25, 0.2],
                        rotate: [0, 90, 180, 270, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 -left-32 w-[60vh] h-[60vh] rounded-full bg-gradient-to-br from-highlight/50 to-[#C5A059]/50 blur-[100px] z-0"
                />
                <motion.div
                    animate={{
                        x: [0, -45, 25, 0],
                        y: [0, 40, -25, 0],
                        scale: [1, 1.2, 0.9, 1],
                        opacity: [0.2, 0.4, 0.3, 0.2],
                        rotate: [360, 270, 180, 90, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-40 -right-32 w-[70vh] h-[70vh] rounded-full bg-gradient-to-tl from-[#C5A059]/60 to-highlight/40 blur-[110px] z-0"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.35, 0.15],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] rounded-full bg-[#DECBA4]/40 blur-[80px] z-0"
                />

                {/* Floating particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            y: [particle.y + '%', (particle.y - 30) + '%'],
                            x: [particle.x + '%', (particle.x + 5) + '%', (particle.x - 5) + '%', particle.x + '%'],
                            scale: [particle.scale, particle.scale * 1.2, particle.scale]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut"
                        }}
                        className="absolute w-2 h-2 bg-highlight/30 rounded-full z-0"
                        style={{ left: particle.x + '%', top: particle.y + '%' }}
                    />
                ))}

                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-[0.08] z-0 pointer-events-none"
                     style={{
                         backgroundImage: "radial-gradient(circle at center, #7A2B35 1.5px, transparent 1.5px)",
                         backgroundSize: "40px 40px"
                     }}
                />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 w-full items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        {/* Title with stagger animation */}
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="font-serif text-7xl md:text-8xl font-bold text-mainText mb-4 leading-tight"
                            >
                                {title}
                            </motion.h2>
                        </div>

                        {/* Animated divider */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-1 bg-gradient-to-r from-highlight via-[#C5A059] to-transparent rounded-full"
                        />

                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="text-3xl text-mainText/70 font-light leading-relaxed"
                            >
                                {subtitle}
                            </motion.p>
                        )}

                        {/* Quote with enhanced styling */}
                        {highlight && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                whileHover={{ scale: 1.02 }}
                                className="relative bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-highlight/20 shadow-xl"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-2 left-2 text-[3.5rem] font-serif text-highlight/40 leading-none"
                                >
                                    &ldquo;
                                </motion.div>
                                <p className="relative z-10 text-3xl md:text-4xl font-serif italic text-highlight leading-relaxed px-6">
                                    {highlight}
                                </p>
                                <motion.div
                                    animate={{ rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                                    className="absolute bottom-2 right-2 text-[3.5rem] font-serif text-highlight/40 leading-none"
                                >
                                    &rdquo;
                                </motion.div>

                                {/* Sparkle effect on hover */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="absolute top-2 right-2"
                                >
                                    <Sparkles className="text-[#C5A059]" size={24} />
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Author info with refined animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="pt-8 space-y-3"
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "120px" }}
                                transition={{ duration: 0.8, delay: 1.3 }}
                                className="h-0.5 bg-gradient-to-r from-secondaryBg/60 to-transparent rounded-full mb-4"
                            />

                            <p className="text-xs uppercase tracking-[0.3em] text-mainText/50 font-bold">
                                Apresentado por
                            </p>

                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <p className="text-5xl font-serif font-bold bg-gradient-to-r from-highlight to-[#C5A059] bg-clip-text text-transparent">
                                    {authorName}
                                </p>
                            </motion.div>

                            <p className="text-2xl text-mainText/70 font-medium">{authorRole}</p>
                            <p className="text-xl text-mainText/60">{authorOab}</p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image with enhanced effects */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                        className="h-[650px] w-full relative group perspective-1000"
                    >
                        {authorImage ? (
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl shadow-highlight/30"
                            >
                                {/* Inner decorative border */}
                                <motion.div
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                        scale: [1, 1.02, 1]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-6 rounded-2xl border-2 border-highlight/30 pointer-events-none z-20"
                                />

                                {/* Corner accents */}
                                <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-[#C5A059] rounded-tl-xl z-20 opacity-70" />
                                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-highlight rounded-br-xl z-20 opacity-70" />

                                {/* Image container */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                        src={authorImage}
                                        alt={authorName}
                                        className="h-full w-full object-cover object-top"
                                        loading="lazy"
                                        decoding="async"
                                    />

                                    {/* Gradient overlay on hover */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-gradient-to-t from-highlight/20 via-transparent to-transparent"
                                    />
                                </div>

                                {/* Animated glow effect */}
                                <motion.div
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -inset-1 bg-gradient-to-r from-highlight/20 via-[#C5A059]/20 to-highlight/20 rounded-3xl blur-xl -z-10"
                                />
                            </motion.div>
                        ) : (
                            <PlaceholderImage />
                        )}
                    </motion.div>
                </div>

                {/* Bottom decorative element */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-highlight to-transparent opacity-30"
                />
            </div>
        )
    }

  return <div>Unknown Layout</div>;
};

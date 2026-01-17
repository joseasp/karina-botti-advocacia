import React from 'react';
import { motion } from 'framer-motion';
import { SlideData } from '../types';
import { ChevronRight, ShieldCheck, FileText, CheckCircle2, ArrowRight, Image as ImageIcon, Sparkles } from 'lucide-react';
import logoHeader from '@/assets/logoheader.png';
import acessoIntegridade from '@/assets/slides/acesso-assinatura-integridade.png';
import cidadaoCelular from '@/assets/slides/cidadao-acompanhando-no-celular.png';
import organizaRegistra from '@/assets/slides/organiza-registra-e-prova.png';
import sucessoEquipe from '@/assets/slides/sucesso-em-equipe.png';

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
  23: { src: sucessoEquipe, alt: 'Sucesso em equipe' },
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

export const SlideRenderer: React.FC<SlideRendererProps> = ({ data }) => {
  const { layout, title, subtitle, content, cards, highlight, imagePlaceholder } = data;
  const slideImage = slideImages[data.id];

  // -- COVER LAYOUT --
  if (layout === 'cover') {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-16 relative">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 z-10"
        >
          <div className="w-32 h-2.5 bg-highlight mb-12 mx-auto rounded-full shadow-lg shadow-highlight/20" />
          <h1 className="font-serif text-7xl md:text-8xl text-mainText font-bold tracking-tight mb-8 leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <h2 className="font-sans text-3xl md:text-4xl text-mainText/80 font-light mb-8 max-w-5xl mx-auto leading-relaxed">
              {subtitle}
            </h2>
          )}
        </motion.div>

        {highlight && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-12 md:bottom-24 max-w-4xl bg-white/80 backdrop-blur-md px-10 py-6 rounded-2xl border-l-8 border-highlight shadow-xl"
          >
            <p className="text-2xl md:text-3xl text-highlight font-medium font-serif italic leading-relaxed">
              {highlight}
            </p>
          </motion.div>
        )}
      </div>
    );
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

    // -- CLOSING LAYOUT --
    if (layout === 'closing') {
        return (
            <div className="flex h-full w-full max-w-[1800px] mx-auto px-16 items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full items-center">
                    {/* Text Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="font-serif text-7xl font-bold text-mainText mb-6">{title}</h2>
                        {subtitle && <p className="text-3xl text-mainText/60 mb-12">{subtitle}</p>}
                        
                        {highlight && (
                            <div className="relative">
                                <span className="absolute -top-10 -left-6 text-9xl font-serif text-secondaryBg/40">“</span>
                                <p className="relative z-10 text-4xl font-serif italic text-highlight leading-relaxed">
                                    {highlight}
                                </p>
                            </div>
                        )}
                        
                        {/* Logo Space */}
                        <div className="mt-20 border-t border-secondaryBg pt-8 flex items-center gap-6">
                             <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md shadow-secondaryBg/30">
                                 <img src={logoHeader} alt="Karina Botti Advocacia" className="h-16 w-auto" />
                             </div>
                             <div>
                                 <p className="text-xs uppercase tracking-widest text-mainText/50 font-bold mb-1">Apresentado por</p>
                                 <p className="text-2xl font-serif font-bold text-mainText">Karina Botti</p>
                             </div>
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-[600px] w-full group"
                    >
                        {imagePlaceholder && (
                            slideImage ? (
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
                            )
                        )}
                    </motion.div>
                </div>
            </div>
        )
    }

  return <div>Unknown Layout</div>;
};

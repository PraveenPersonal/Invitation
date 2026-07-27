import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Moon } from 'lucide-react';

const Petals = () => {
  return (
    <>
      <style>{`
        @keyframes floatDown {
          0% { transform: translate(0, -10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(var(--tx), 110vh) rotate(var(--rot)); opacity: 0; }
        }
        .petal {
          position: fixed;
          top: -20px;
          z-index: 0;
          pointer-events: none;
          animation: floatDown var(--duration) linear infinite;
          animation-delay: var(--delay);
        }
        .shimmer-button {
          background: linear-gradient(90deg, #C9A84C 0%, #FDF6E3 50%, #C9A84C 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      {Array.from({ length: 20 }).map((_, i) => (
        <svg
          key={i}
          className="petal text-[#C9A84C]/40"
          style={{
            left: `${Math.random() * 100}vw`,
            '--duration': `${10 + Math.random() * 10}s`,
            '--delay': `-${Math.random() * 10}s`,
            '--tx': `${(Math.random() - 0.5) * 200}px`,
            '--rot': `${(Math.random() > 0.5 ? 1 : -1) * 360}deg`,
            width: `${10 + Math.random() * 15}px`,
            height: `${10 + Math.random() * 15}px`,
          } as React.CSSProperties}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8 2 4 6 4 12c0 6 8 10 8 10s8-4 8-10c0-6-4-10-8-10z" />
        </svg>
      ))}
    </>
  );
};

const CornerOrnaments = () => (
  <>
    <svg className="absolute top-2 left-2 w-12 h-12 text-[#C9A84C] opacity-70" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
       <path d="M10 10 Q 50 10 50 50 Q 50 90 90 90 Q 50 90 50 50 Q 50 10 10 10 Z" fill="currentColor" fillOpacity="0.2" />
       <circle cx="50" cy="50" r="4" fill="currentColor" />
       <path d="M10 10 L 35 10 M10 10 L 10 35" />
    </svg>
    <svg className="absolute top-2 right-2 w-12 h-12 text-[#C9A84C] opacity-70 rotate-90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
       <path d="M10 10 Q 50 10 50 50 Q 50 90 90 90 Q 50 90 50 50 Q 50 10 10 10 Z" fill="currentColor" fillOpacity="0.2" />
       <circle cx="50" cy="50" r="4" fill="currentColor" />
       <path d="M10 10 L 35 10 M10 10 L 10 35" />
    </svg>
    <svg className="absolute bottom-2 right-2 w-12 h-12 text-[#C9A84C] opacity-70 rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
       <path d="M10 10 Q 50 10 50 50 Q 50 90 90 90 Q 50 90 50 50 Q 50 10 10 10 Z" fill="currentColor" fillOpacity="0.2" />
       <circle cx="50" cy="50" r="4" fill="currentColor" />
       <path d="M10 10 L 35 10 M10 10 L 10 35" />
    </svg>
    <svg className="absolute bottom-2 left-2 w-12 h-12 text-[#C9A84C] opacity-70 -rotate-90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
       <path d="M10 10 Q 50 10 50 50 Q 50 90 90 90 Q 50 90 50 50 Q 50 10 10 10 Z" fill="currentColor" fillOpacity="0.2" />
       <circle cx="50" cy="50" r="4" fill="currentColor" />
       <path d="M10 10 L 35 10 M10 10 L 10 35" />
    </svg>
  </>
);

const LotusDivider = () => (
  <svg className="w-40 h-6 text-[#C9A84C]" viewBox="0 0 200 30" fill="none" stroke="currentColor" strokeWidth="1">
    <line x1="0" y1="15" x2="70" y2="15" />
    <line x1="130" y1="15" x2="200" y2="15" />
    <path d="M100 5 C110 5 120 15 100 25 C80 15 90 5 100 5 Z" fill="currentColor" fillOpacity="0.3" />
    <path d="M100 10 C105 10 110 15 100 20 C90 15 95 10 100 10 Z" fill="currentColor" />
    <circle cx="75" cy="15" r="2" fill="currentColor" />
    <circle cx="125" cy="15" r="2" fill="currentColor" />
  </svg>
);

const LargeFloralDivider = () => (
  <svg className="w-64 h-8 text-[#C9A84C]" viewBox="0 0 300 50" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M0 25 Q 50 0 100 25 T 200 25 T 300 25" fill="none" />
    <path d="M0 25 Q 50 50 100 25 T 200 25 T 300 25" fill="none" opacity="0.3" />
    <circle cx="150" cy="25" r="5" fill="currentColor" />
    <path d="M150 10 L 154 18 L 162 18 L 156 22 L 158 30 L 150 25 L 142 30 L 144 22 L 138 18 L 146 18 Z" fill="currentColor" />
  </svg>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowCard(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="min-h-[100dvh] w-full bg-[#3D0C14] overflow-x-hidden relative font-sans text-center text-[#5A1421]">
      <Petals />
      
      <AnimatePresence>
        {!showCard && (
          <motion.div 
            className="fixed inset-0 flex flex-col items-center justify-center z-10 p-4"
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.8 } }}
          >
            {/* The Envelope */}
            <div className="relative w-full max-w-[340px] aspect-[4/3] perspective-[1200px] mb-12">
              {/* Back */}
              <div className="absolute inset-0 bg-[#4A101A] rounded-lg shadow-2xl" />
              
              {/* Inner Pattern */}
              <div className="absolute inset-1 bg-[#5A1421] rounded opacity-50 bg-[radial-gradient(#C9A84C_1px,transparent_1px)] [background-size:12px_12px]" />

              {/* Thumbnail Card sliding out */}
              <motion.div
                className="absolute left-4 right-4 bottom-2 bg-[#FDF6E3] rounded-t-md border-t border-l border-r border-[#C9A84C] shadow-lg flex flex-col items-center pt-6 z-10"
                initial={{ top: '20px' }}
                animate={{ top: isOpen ? '-100px' : '20px' }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <div className="w-10 h-10 rounded-full border border-[#C9A84C] mb-3 flex items-center justify-center">
                  <span className="font-serif text-[#C9A84C] text-[10px]">ॐ</span>
                </div>
                <div className="w-20 h-[1px] bg-[#C9A84C] mb-2" />
                <div className="w-32 h-[1px] bg-[#C9A84C]" />
              </motion.div>

              {/* Front Flaps */}
              <div className="absolute inset-0 z-20 pointer-events-none drop-shadow-xl overflow-hidden rounded-b-lg">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[#6B1B2A]">
                  <polygon points="0,100 50,45 100,100" fill="currentColor" stroke="#812234" strokeWidth="0.5" />
                  <polygon points="0,0 50,45 0,100" fill="#5A1421" stroke="#4A101A" strokeWidth="0.5" />
                  <polygon points="100,0 50,45 100,100" fill="#5A1421" stroke="#4A101A" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Top Flap */}
              <motion.div
                className="absolute top-0 left-0 w-full h-[60%] origin-top z-30 drop-shadow-2xl"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: isOpen ? -180 : 0, zIndex: isOpen ? 5 : 30 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[#7A1F30]">
                  <polygon points="0,0 100,0 50,100" fill="currentColor" stroke="#812234" strokeWidth="0.5" />
                </svg>
                
                {/* Wax Seal */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full shadow-lg flex items-center justify-center border border-[#E8D385] bg-gradient-to-br from-[#D4AF37] to-[#AA8022]"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-[85%] h-[85%] rounded-full border border-[#5A1421]/20 flex items-center justify-center bg-gradient-to-br from-[#C9A84C] to-[#B89635]">
                    <span className="font-serif text-[#5A1421] text-xl font-bold tracking-tighter">K&S</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Open Button */}
            {!isOpen && (
              <motion.button
                onClick={handleOpen}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="shimmer-button px-8 py-3 rounded-full text-[#5A1421] font-serif font-bold tracking-widest uppercase shadow-lg shadow-[#C9A84C]/20 hover:scale-105 active:scale-95 transition-transform border border-[#C9A84C]/50"
              >
                Open Invitation
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCard && (
          <motion.div 
            className="relative z-20 w-full max-w-[480px] mx-auto min-h-screen py-6 px-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full bg-[#FDF6E3] shadow-2xl relative p-1 rounded-sm">
              <div className="w-full h-full border-[1.5px] border-[#C9A84C] relative px-6 py-12 flex flex-col items-center">
                <CornerOrnaments />

                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
                  }}
                  className="flex flex-col items-center w-full"
                >
                  {/* 1. Header */}
                  <motion.div variants={sectionVariants} className="mb-6 flex flex-col items-center">
                    <p className="font-sans italic text-[#C9A84C] text-sm font-semibold tracking-wide">
                      Sri Ganeshaya Namaha
                    </p>
                    <div className="mt-3">
                      <LotusDivider />
                    </div>
                  </motion.div>

                  {/* 2. Opening */}
                  <motion.div variants={sectionVariants} className="mb-10 text-center px-4">
                    <p className="text-xs uppercase tracking-[0.2em] leading-relaxed text-[#6B1B2A]/80 font-medium">
                      With the blessings of God and our families
                    </p>
                  </motion.div>

                  {/* 3. Couple */}
                  <motion.div variants={sectionVariants} className="text-center mb-12 w-full">
                    <h1 className="font-serif text-4xl sm:text-5xl text-[#6B1B2A] mb-2 drop-shadow-sm">M. Karthikeyan</h1>
                    <p className="text-[10px] sm:text-xs text-[#6B1B2A]/80 uppercase tracking-wider mb-6 leading-relaxed max-w-[80%] mx-auto">
                      B.E., MBA | Lead Software Engineer, Fidelity Investments, Chennai
                    </p>
                    
                    <div className="flex justify-center items-center my-6">
                      <span className="font-serif text-3xl sm:text-4xl text-[#C9A84C]">&amp;</span>
                    </div>

                    <h1 className="font-serif text-4xl sm:text-5xl text-[#6B1B2A] mb-2 drop-shadow-sm">K. Soundariya</h1>
                    <p className="text-[10px] sm:text-xs text-[#6B1B2A]/80 uppercase tracking-wider leading-relaxed max-w-[80%] mx-auto">
                      B.E. | Senior Software Engineer, TCS, Chennai
                    </p>
                  </motion.div>

                  {/* 4. Details Box */}
                  <motion.div variants={sectionVariants} className="w-full bg-[#FDF6E3] border border-[#C9A84C]/50 p-5 rounded mb-12 shadow-[inset_0_0_15px_rgba(201,168,76,0.1)] relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A84C]" />
                    <div className="flex flex-col gap-4 text-[13px] sm:text-sm text-[#5A1421] pl-2">
                      <div className="flex items-center gap-4">
                        <Calendar className="w-5 h-5 text-[#C9A84C] shrink-0" strokeWidth={1.5} />
                        <span className="font-semibold tracking-wide">Monday, 07 September 2026</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Clock className="w-5 h-5 text-[#C9A84C] shrink-0" strokeWidth={1.5} />
                        <span className="tracking-wide">Muhurtham: 9:00 AM – 10:00 AM</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Moon className="w-5 h-5 text-[#C9A84C] shrink-0" strokeWidth={1.5} />
                        <span className="tracking-wide">Tamil Date: Aavani 21, 2026</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-[#C9A84C] mt-0.5 shrink-0" strokeWidth={1.5} />
                        <span className="text-left leading-relaxed">Kongu Vellala Goundar Thirumana Mandapam, Cuddalore Main Road, Ammapet, Salem</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* 5. Parents */}
                  <motion.div variants={sectionVariants} className="w-full mb-10 relative">
                    <div className="text-center mb-6">
                      <h2 className="font-serif text-xl text-[#C9A84C] italic">Family</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                      <div className="text-center sm:text-right sm:pr-6">
                        <h3 className="font-serif text-[#6B1B2A] text-lg mb-3">Groom's Parents</h3>
                        <p className="text-sm font-bold text-[#5A1421]">Mr. N. R. Magenthiran</p>
                        <p className="text-[10px] sm:text-[11px] text-[#5A1421]/80 mb-3 uppercase tracking-wide leading-relaxed">B.Com., CAIIB<br/>Chief Manager (Retd.), IOB</p>
                        <p className="text-sm font-bold text-[#5A1421]">Mrs. M. Shanthi</p>
                        <p className="text-[10px] sm:text-[11px] text-[#5A1421]/80 mb-3 uppercase tracking-wide">B.Sc.</p>
                        <p className="text-[11px] text-[#C9A84C] font-semibold mt-1">Contact: 82208 32697</p>
                      </div>
                      
                      <div className="hidden sm:block absolute top-10 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#C9A84C]/40 to-transparent" />

                      <div className="text-center sm:text-left sm:pl-6">
                        <h3 className="font-serif text-[#6B1B2A] text-lg mb-3">Bride's Parents</h3>
                        <p className="text-sm font-bold text-[#5A1421]">Mr. M. Kannan</p>
                        <p className="text-[10px] sm:text-[11px] text-[#5A1421]/80 mb-3 uppercase tracking-wide leading-relaxed">AMK Jewel Works &amp; Gems</p>
                        <p className="text-sm font-bold text-[#5A1421]">Mrs. K. Vijaya</p>
                        <p className="text-[10px] sm:text-[11px] text-[#5A1421]/80 mb-3 uppercase tracking-wide">B.A.</p>
                        <p className="text-[11px] text-[#C9A84C] font-semibold mt-1">Contact: 98431 42063</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* 6. Family */}
                  <motion.div variants={sectionVariants} className="w-full mb-12">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-[1px] bg-[#C9A84C]/40" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="text-center sm:text-right sm:pr-6">
                        <p className="text-[10px] tracking-widest uppercase text-[#C9A84C] mb-2 font-semibold">Groom's Family</p>
                        <p className="text-sm font-bold text-[#5A1421]">Mr. M. Ramesh Aravind, B.E.</p>
                        <p className="text-[10px] text-[#5A1421]/70 uppercase tracking-wide mt-1">Senior Engineer, Ford Motors</p>
                      </div>
                      <div className="text-center sm:text-left sm:pl-6">
                        <p className="text-[10px] tracking-widest uppercase text-[#C9A84C] mb-2 font-semibold">Bride's Family</p>
                        <p className="text-sm font-bold text-[#5A1421]">Mr. K. Praveenkumar, B.C.A.</p>
                        <p className="text-[10px] text-[#5A1421]/70 uppercase tracking-wide mt-1">Software Developer, Avitam Tech</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* 7. Blessing */}
                  <motion.div variants={sectionVariants} className="w-full bg-white/40 border border-[#C9A84C]/30 p-6 rounded-lg mb-10">
                    <p className="font-serif italic text-sm sm:text-base text-center text-[#6B1B2A]/90 leading-relaxed">
                      "We warmly invite you to grace this auspicious occasion with your presence and shower your blessings upon the newly married couple as they embark on a beautiful journey of togetherness."
                    </p>
                  </motion.div>

                  {/* 8. Footer */}
                  <motion.div variants={sectionVariants} className="flex flex-col items-center">
                    <LargeFloralDivider />
                    <p className="mt-6 font-serif text-[#C9A84C] text-lg sm:text-xl italic">
                      With love &amp; warmth, Karthikeyan &amp; Soundariya
                    </p>
                  </motion.div>

                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

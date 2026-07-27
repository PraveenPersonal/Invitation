import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Moon, Heart, Sparkles, Navigation, CheckCircle2, Send, Share2, ZoomIn, X, Phone } from 'lucide-react';
import coupleImg from './assets/couple.png';
import flowerImg from './assets/flowers.png';
import cardBg from './assets/card_bg.png';

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  if (!target.dataset.fallbackCount) {
    target.dataset.fallbackCount = '1';
    target.src = '/couple.png';
  } else if (target.dataset.fallbackCount === '1') {
    target.dataset.fallbackCount = '2';
    target.src = '/couple.jpg';
  }
};

const Petals = () => {
  return (
    <>
      <style>{`
        @keyframes floatDown {
          0% { transform: translate(0, -10vh) rotate(0deg) scale(0.8); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { transform: translate(var(--tx), 110vh) rotate(var(--rot)) scale(1.1); opacity: 0; }
        }
        .petal {
          position: fixed;
          top: -20px;
          z-index: 1;
          pointer-events: none;
          animation: floatDown var(--duration) linear infinite;
          animation-delay: var(--delay);
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }
        .shimmer-button {
          background: linear-gradient(90deg, #D4AF37 0%, #FFE89C 30%, #D4AF37 60%, #AA8022 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .royal-glow {
          box-shadow: 0 10px 30px -5px rgba(212, 175, 55, 0.3), 0 0 15px rgba(212, 175, 55, 0.2);
        }
        .gold-border-ornate {
          border: 2px solid;
          border-image: linear-gradient(to bottom right, #FFE89C, #D4AF37, #AA8022, #F5E08F) 1;
        }
      `}</style>
      {Array.from({ length: 24 }).map((_, i) => {
        const isGold = i % 3 === 0;
        const color = isGold ? 'text-[#D4AF37]/50' : i % 2 === 0 ? 'text-[#E63946]/40' : 'text-[#FB8500]/40';
        return (
          <svg
            key={i}
            className={`petal ${color}`}
            style={{
              left: `${Math.random() * 100}vw`,
              '--duration': `${12 + Math.random() * 10}s`,
              '--delay': `-${Math.random() * 12}s`,
              '--tx': `${(Math.random() - 0.5) * 220}px`,
              '--rot': `${(Math.random() > 0.5 ? 1 : -1) * 360}deg`,
              width: `${12 + Math.random() * 16}px`,
              height: `${12 + Math.random() * 16}px`,
            } as React.CSSProperties}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8 2 4 6 4 12c0 6 8 10 8 10s8-4 8-10c0-6-4-10-8-10z" />
          </svg>
        );
      })}
    </>
  );
};

const CornerOrnaments = () => (
  <>
    <svg className="absolute top-2 left-2 w-14 h-14 text-[#D4AF37] opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 10 Q 50 10 50 50 Q 50 90 90 90 Q 50 90 50 50 Q 50 10 10 10 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
      <path d="M10 10 L 40 10 M10 10 L 10 40" strokeWidth="2.5" />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
    </svg>
    <svg className="absolute top-2 right-2 w-14 h-14 text-[#D4AF37] opacity-80 rotate-90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 10 Q 50 10 50 50 Q 50 90 90 90 Q 50 90 50 50 Q 50 10 10 10 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
      <path d="M10 10 L 40 10 M10 10 L 10 40" strokeWidth="2.5" />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
    </svg>
    <svg className="absolute bottom-2 right-2 w-14 h-14 text-[#D4AF37] opacity-80 rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 10 Q 50 10 50 50 Q 50 90 90 90 Q 50 90 50 50 Q 50 10 10 10 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
      <path d="M10 10 L 40 10 M10 10 L 10 40" strokeWidth="2.5" />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
    </svg>
    <svg className="absolute bottom-2 left-2 w-14 h-14 text-[#D4AF37] opacity-80 -rotate-90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 10 Q 50 10 50 50 Q 50 90 90 90 Q 50 90 50 50 Q 50 10 10 10 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
      <path d="M10 10 L 40 10 M10 10 L 10 40" strokeWidth="2.5" />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
    </svg>
  </>
);

const LotusDivider = () => (
  <svg className="w-48 h-7 text-[#D4AF37]" viewBox="0 0 200 30" fill="none" stroke="currentColor" strokeWidth="1.2">
    <line x1="0" y1="15" x2="65" y2="15" />
    <line x1="135" y1="15" x2="200" y2="15" />
    <path d="M100 3 C112 3 124 14 100 27 C76 14 88 3 100 3 Z" fill="currentColor" fillOpacity="0.25" />
    <path d="M100 8 C107 8 114 14 100 22 C86 14 93 8 100 8 Z" fill="currentColor" fillOpacity="0.6" />
    <circle cx="100" cy="15" r="2.5" fill="#FFE89C" />
    <circle cx="70" cy="15" r="2" fill="currentColor" />
    <circle cx="130" cy="15" r="2" fill="currentColor" />
  </svg>
);

const SectionDivider = () => (
  <div className="flex items-center justify-center my-6 w-full gap-3 opacity-90">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
    <span className="text-[#D4AF37] font-serif text-sm">✦ ॐ ✦</span>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
  </div>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showRsvpModal, setShowRsvpModal] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [blessingMsg, setBlessingMsg] = useState('');
  const [blessingSubmitted, setBlessingSubmitted] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);

    const weddingDate = new Date('2026-09-07T09:00:00+05:30').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowCard(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1100);
  };

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent("Wedding: M. Karthikeyan & K. Soundariya");
    const details = encodeURIComponent("You are cordially invited to the wedding ceremony of M. Karthikeyan & K. Soundariya.");
    const location = encodeURIComponent("Kongu Vellala Goundar Thirumana Mandapam, Cuddalore Main Road, Ammapet, Salem");
    const dates = "20260907T033000Z/20260907T043000Z";
    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`, '_blank');
  };

  const handleMaps = () => {
    const venue = encodeURIComponent("M662+RGX, Kamarajar Nagar Colony, Ammapet, Salem (M.Corp.), Tamil Nadu 636014");
    window.open(`https://www.google.com/maps/search/?api=1&query=${venue}`, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Wedding Invitation — M. Karthikeyan & K. Soundariya',
          text: 'You are cordially invited to the wedding of M. Karthikeyan & K. Soundariya on 07 September 2026 in Salem.',
          url: window.location.href,
        });
      } catch {
        // Fallback copy
        navigator.clipboard.writeText(window.location.href);
        alert('Invitation link copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  const submitBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName.trim()) {
      setBlessingSubmitted(true);
    }
  };

  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden relative font-sans text-center">
      <Petals />


      {/* ENVELOPE ENTRY SCREEN */}
      <AnimatePresence>
        {!showCard && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center z-30 p-4 sm:p-6 overflow-y-auto text-center select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.8 } }}
          >
            {/* Centered Content Wrapper */}
            <div className="my-auto w-full max-w-sm sm:max-w-md flex flex-col items-center justify-center space-y-5 sm:space-y-6 px-2 py-4">

              {/* Ambient Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <p className="font-serif italic text-[#D4AF37] text-xl sm:text-2xl tracking-widest">
                  Wedding Invitation
                </p>
              </motion.div>

              {/* The Royal Envelope Card Cover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative w-full max-w-[450px] sm:max-w-[480px] aspect-[2/3]   rounded-2xl cursor-pointer royal-glow group"
                onClick={handleOpen}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Parchment background texture */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 pointer-events-none z-0"
                  style={{ backgroundImage: `url(${cardBg})` }}
                />

                {/* Center Content Box inside Envelope */}
                <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-full px-3 sm:px-4 py-4 sm:py-5  rounded-xl shadow-inner flex flex-col items-center space-y-2">
                    <p className="text-xs font-serif italic text-[#800020] tracking-wider uppercase">Save The Date</p>

                    <LotusDivider />

                    <div className="py-1">
                      <p className="font-cinzel text-base sm:text-lg text-[#4A101A] font-bold uppercase tracking-wider drop-shadow-sm leading-tight">
                        M. Karthikeyan
                      </p>
                      <span className="font-script text-3xl text-[#D4AF37] lowercase font-normal my-0.5 inline-block">&amp;</span>
                      <p className="font-cinzel text-base sm:text-lg text-[#4A101A] font-bold uppercase tracking-wider drop-shadow-sm leading-tight">
                        K. Soundariya
                      </p>
                    </div>

                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-0.5" />

                    <p className="text-[11px] font-cinzel font-semibold tracking-widest text-[#6B1B2A] uppercase">
                      Monday • 07 Sep 2026
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Tap to Open CTA Button */}
              {!isOpen && (
                <motion.button
                  onClick={handleOpen}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="shimmer-button px-8 py-3.5 rounded-full text-[#3D0C14] font-cinzel font-bold text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95 transition-all border border-[#FFE89C]/80 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#3D0C14] animate-pulse" />
                  <span>Open Royal Invitation</span>
                  <Sparkles className="w-4 h-4 text-[#3D0C14] animate-pulse" />
                </motion.button>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN INVITATION CARD DISPLAY */}
      <AnimatePresence>
        {showCard && (
          <motion.div
            className="relative z-20 w-full max-w-[520px] mx-auto min-h-screen py-6 px-3 sm:px-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Card Container */}
            <div className="w-full bg-[#FDF6E3] shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative p-2 sm:p-3 rounded-lg border-2 border-[#D4AF37]/50 royal-glow">
              <div className="w-full h-full border-[1.5px] border-[#D4AF37] relative px-4 sm:px-8 py-10 sm:py-12 flex flex-col items-center rounded bg-gradient-to-b from-[#FFFDF7] via-[#FDF6E3] to-[#FFFDF7]">
                <CornerOrnaments />

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
                  }}
                  className="flex flex-col items-center w-full"
                >
                  {/* 1. Auspicious Invocation Header */}
                  <motion.div variants={sectionVariants} className="mb-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-[#4A101A] text-[#FFE89C] shadow-md mb-2">
                      <span className="font-serif text-2xl drop-shadow">ॐ</span>
                    </div>
                    <p className="font-serif italic text-[#9B2226] text-base font-semibold tracking-wider">
                      Sri Ganeshaya Namaha
                    </p>
                    <div className="mt-2">
                      <LotusDivider />
                    </div>
                  </motion.div>

                  {/* 2. Opening Invitation Text */}
                  <motion.div variants={sectionVariants} className="mb-6 text-center px-2">
                    <p className="font-serif italic text-base text-[#6B1B2A] mb-1">
                      Together with our families
                    </p>
                    <p className="text-xs uppercase tracking-[0.25em] leading-relaxed text-[#6B1B2A]/90 font-semibold font-cinzel">
                      We cordially invite you to celebrate the auspicious marriage of
                    </p>
                  </motion.div>

                  {/* 3. HERO SECTION: COUPLE PORTRAIT IMAGE */}
                  <motion.div variants={sectionVariants} className="w-full my-4 flex flex-col items-center relative">
                    <div className="relative group cursor-pointer max-w-[360px] w-full" onClick={() => setIsZoomed(true)}>
                      {/* Luxury Golden Ornate Frame */}
                      <div className="relative rounded-2xl overflow-hidden p-2.5 bg-gradient-to-b from-[#FFE89C] via-[#D4AF37] to-[#AA8022] shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-[1.02]">
                        <div className="relative rounded-xl overflow-hidden border-2 border-[#FFE89C]">
                          <img
                            src={coupleImg}
                            onError={handleImageError}
                            alt="M. Karthikeyan & K. Soundariya"
                            className="w-full h-auto object-cover max-h-[520px] rounded-xl shadow-inner"
                          />
                          {/* Soft Vignette & Light Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#2A080E]/60 via-transparent to-transparent pointer-events-none" />

                          {/* Zoom Icon Hint */}
                          <div className="absolute bottom-3 right-3 bg-[#3D0C14]/80 text-[#FFE89C] p-2 rounded-full backdrop-blur-md opacity-90 group-hover:scale-110 transition-transform border border-[#D4AF37]">
                            <ZoomIn className="w-4 h-4" />
                          </div>

                          <div className="absolute bottom-3 left-3 text-left">
                            <p className="font-script text-2xl text-[#FFE89C] drop-shadow-md">Karthikeyan &amp; Soundariya</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-[10px] text-[#D4AF37] italic mt-2 tracking-wide font-serif">Tap image to view full portrait</p>
                    </div>
                  </motion.div>

                  {/* 4. COUPLE NAMES & QUALIFICATIONS */}
                  <motion.div variants={sectionVariants} className="text-center my-6 w-full">
                    {/* Groom */}
                    <div className="mb-4">
                      <h1 className="font-cinzel text-3xl sm:text-4xl text-[#6B1B2A] font-bold tracking-tight mb-1 drop-shadow-sm">
                        M. Karthikeyan
                      </h1>
                      <p className="text-xs sm:text-sm font-serif font-bold text-[#D4AF37] tracking-wider uppercase mb-1">
                        B.E., MBA
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#5A1421]/90 uppercase tracking-widest font-semibold">
                        Lead Software Engineer, Fidelity Investments, Chennai
                      </p>
                    </div>

                    {/* Ampersand */}
                    <div className="flex justify-center items-center my-3">
                      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                      <span className="font-script text-4xl sm:text-5xl text-[#D4AF37] px-4">&amp;</span>
                      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
                    </div>

                    {/* Bride */}
                    <div className="mt-2">
                      <h1 className="font-cinzel text-3xl sm:text-4xl text-[#6B1B2A] font-bold tracking-tight mb-1 drop-shadow-sm">
                        K. Soundariya
                      </h1>
                      <p className="text-xs sm:text-sm font-serif font-bold text-[#D4AF37] tracking-wider uppercase mb-1">
                        B.E.
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#5A1421]/90 uppercase tracking-widest font-semibold">
                        Senior Software Engineer, TCS, Chennai
                      </p>
                    </div>
                  </motion.div>

                  {/* <SectionDivider /> */}

                  {/* 6. EVENT & VENUE DETAILS CARD */}
                  <motion.div variants={sectionVariants} className="w-full bg-[#FFFDF7] border-2 border-[#D4AF37] p-5 sm:p-6 rounded-xl my-6 shadow-[0_8px_25px_rgba(212,175,55,0.15)] relative text-left">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFE89C] to-[#D4AF37]" />

                    <div className="text-center mb-5">
                      <h3 className="font-cinzel text-lg text-[#6B1B2A] font-bold tracking-wider uppercase">Auspicious Ceremony</h3>
                      <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-1" />
                    </div>

                    <div className="flex flex-col gap-4 text-sm text-[#5A1421]">
                      <div className="flex items-start gap-3.5">
                        <div className="p-2 rounded-full bg-[#4A101A] text-[#FFE89C] shrink-0 mt-0.5 shadow-sm">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold">Date</p>
                          <p className="font-bold text-[#6B1B2A] text-base">Monday, 07 September 2026</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="p-2 rounded-full bg-[#4A101A] text-[#FFE89C] shrink-0 mt-0.5 shadow-sm">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold">Muhurtham</p>
                          <p className="font-bold text-[#6B1B2A] text-base">9:00 AM – 10:00 AM</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="p-2 rounded-full bg-[#4A101A] text-[#FFE89C] shrink-0 mt-0.5 shadow-sm">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold">Venue</p>
                          <p className="font-bold text-[#6B1B2A]">Kongu Vellala Goundar Thirumana Mandapam</p>
                          <p className="text-xs text-[#5A1421]/90 leading-relaxed mt-0.5">Cuddalore Main Road, Ammapet, Salem, Tamil Nadu</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons: Calendar & Map */}
                    <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#D4AF37]/30">
                      <button
                        onClick={handleGoogleCalendar}
                        className="py-2.5 px-3 rounded-lg bg-[#4A101A] text-[#FFE89C] font-serif text-xs font-semibold flex items-center justify-center gap-1.5 shadow hover:bg-[#3D0C14] active:scale-95 transition-all border border-[#D4AF37]/60"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        Add to Calendar
                      </button>

                      <button
                        onClick={handleMaps}
                        className="py-2.5 px-3 rounded-lg bg-[#D4AF37] text-[#3D0C14] font-serif text-xs font-bold flex items-center justify-center gap-1.5 shadow hover:bg-[#FFE89C] active:scale-95 transition-all border border-[#AA8022]"
                      >
                        <Navigation className="w-3.5 h-3.5 text-[#3D0C14]" />
                        Get Directions
                      </button>
                    </div>
                  </motion.div>

                  {/* 7. PARENTS & LINEAGE SECTION */}
                  <motion.div variants={sectionVariants} className="w-full my-6">
                    <div className="text-center mb-6">
                      <h2 className="font-serif text-xl text-[#C9A84C] italic">Family</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                      {/* Groom Parents */}
                      <div className="bg-[#FFFDF7] border border-[#D4AF37]/60 p-4 rounded-lg shadow-sm text-center sm:text-right">
                        <h3 className="font-cinzel font-bold text-[#6B1B2A] text-sm mb-2 border-b border-[#D4AF37]/30 pb-1">Groom's Parents</h3>
                        <p className="text-sm font-bold text-[#5A1421]">Mr. N. R. Magendiran</p>
                        <p className="text-[10px] text-[#5A1421]/80 mb-2 uppercase tracking-wide">B.Com., CAIIB • Chief Manager (Retd.), IOB</p>
                        <p className="text-sm font-bold text-[#5A1421]">Mrs. M. Shanthi</p>
                        <p className="text-[10px] text-[#5A1421]/80 mb-2 uppercase tracking-wide">B.Sc.</p>
                        <a href="tel:+918220832697" className="inline-flex items-center gap-1.5 text-xs text-[#5A1421] font-sans hover:text-[#6B1B2A] transition-colors mt-1 font-medium">
                          <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>82208 32697</span>
                        </a>
                      </div>

                      {/* Bride Parents */}
                      <div className="bg-[#FFFDF7] border border-[#D4AF37]/60 p-4 rounded-lg shadow-sm text-center sm:text-left">
                        <h3 className="font-cinzel font-bold text-[#6B1B2A] text-sm mb-2 border-b border-[#D4AF37]/30 pb-1">Bride's Parents</h3>
                        <p className="text-sm font-bold text-[#5A1421]">Mr. M. Kannan</p>
                        <p className="text-[10px] text-[#5A1421]/80 mb-2 uppercase tracking-wide">AMK Jewel Works &amp; Gems</p>
                        <p className="text-sm font-bold text-[#5A1421]">Mrs. K. Vijaya</p>
                        <p className="text-[10px] text-[#5A1421]/80 mb-2 uppercase tracking-wide">B.A.</p>
                        <a href="tel:+919843142063" className="inline-flex items-center gap-1.5 text-xs text-[#5A1421] font-sans hover:text-[#6B1B2A] transition-colors mt-1 font-medium">
                          <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>98431 42063</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* 8. FAMILY / SIBLINGS SECTION */}
                  <motion.div variants={sectionVariants} className="w-full mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-[#4A101A]/5 border border-[#D4AF37]/40 p-3.5 rounded-lg text-center sm:text-right">
                        <p className="text-[10px] tracking-widest uppercase font-cinzel text-[#D4AF37] mb-1 font-bold">Groom's Brother</p>
                        <p className="text-xs font-bold text-[#5A1421]">Mr. M. Ramesh Aravind, B.E.</p>
                        <p className="text-[10px] text-[#5A1421]/70 uppercase tracking-wide">Senior Engineer, Ford Motors</p>
                      </div>

                      <div className="bg-[#4A101A]/5 border border-[#D4AF37]/40 p-3.5 rounded-lg text-center sm:text-left">
                        <p className="text-[10px] tracking-widest uppercase font-cinzel text-[#D4AF37] mb-1 font-bold">Bride's Brother</p>
                        <p className="text-xs font-bold text-[#5A1421]">Mr. K. Praveenkumar, B.C.A.</p>
                        <p className="text-[10px] text-[#5A1421]/70 uppercase tracking-wide">Software Developer, Avitam Tech</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* 9. BLESSINGS CARD */}
                  <motion.div variants={sectionVariants} className="w-full bg-[#4A101A] text-[#FFE89C] border border-[#D4AF37] p-6 rounded-xl my-4 shadow-lg text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                    <p className="font-serif italic text-base sm:text-lg leading-relaxed mb-4 text-[#FFE89C]/90">
                      "We warmly invite you to grace this auspicious occasion with your presence and shower your blessings upon the couple as they embark on a beautiful journey of togetherness."
                    </p>

                    {/* Interactive RSVP & Share buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                      <button
                        onClick={() => setShowRsvpModal(true)}
                        className="py-2.5 px-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA8022] text-[#3D0C14] font-cinzel font-bold text-xs tracking-wider uppercase shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                      >
                        <Heart className="w-3.5 h-3.5 text-[#3D0C14] fill-current" />
                        Send Best Wishes / RSVP
                      </button>

                      <button
                        onClick={handleShare}
                        className="py-2.5 px-4 rounded-full bg-[#3D0C14] text-[#FFE89C] font-cinzel text-xs font-semibold tracking-wider uppercase border border-[#D4AF37]/60 hover:bg-[#2A080E] active:scale-95 transition-all flex items-center gap-1.5"
                      >
                        <Share2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        Share Invitation
                      </button>
                    </div>
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

      {/* FULLSCREEN IMAGE ZOOM MODAL */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setIsZoomed(false)}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 text-[#FFE89C] bg-[#4A101A] p-2.5 rounded-full border border-[#D4AF37]"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-[90vw] max-h-[85vh] rounded-xl overflow-hidden border-2 border-[#D4AF37] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={coupleImg} onError={handleImageError} alt="Full Portrait" className="w-auto h-auto max-h-[85vh] object-contain" />
            </motion.div>
            <p className="font-serif text-[#FFE89C] text-sm mt-3 italic">M. Karthikeyan &amp; K. Soundariya</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RSVP / SEND BLESSINGS MODAL */}
      <AnimatePresence>
        {showRsvpModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setShowRsvpModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#FDF6E3] border-2 border-[#D4AF37] rounded-xl p-6 w-full max-w-[420px] shadow-2xl relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowRsvpModal(false)}
                className="absolute top-3 right-3 text-[#5A1421] p-1.5 rounded-full hover:bg-[#D4AF37]/20"
              >
                <X className="w-5 h-5" />
              </button>

              {!blessingSubmitted ? (
                <>
                  <div className="text-center mb-4">
                    <h3 className="font-cinzel text-lg text-[#6B1B2A] font-bold">Send Your Blessings</h3>
                    <p className="text-xs text-[#5A1421]/80 font-serif">Shower your warm wishes upon Karthikeyan &amp; Soundariya</p>
                  </div>

                  <form onSubmit={submitBlessing} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase font-cinzel font-bold text-[#6B1B2A] mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 rounded-lg border border-[#D4AF37] bg-[#FFFDF7] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-cinzel font-bold text-[#6B1B2A] mb-1">Your Blessing / Message</label>
                      <textarea
                        rows={3}
                        value={blessingMsg}
                        onChange={(e) => setBlessingMsg(e.target.value)}
                        placeholder="Wishing you a lifetime of love and happiness..."
                        className="w-full px-3 py-2 rounded-lg border border-[#D4AF37] bg-[#FFFDF7] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA8022] text-[#3D0C14] font-cinzel font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow hover:opacity-95 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      Send Blessings
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 animate-bounce" />
                  <h3 className="font-cinzel text-lg text-[#6B1B2A] font-bold mb-1">Thank You, {guestName}!</h3>
                  <p className="text-sm text-[#5A1421] font-serif italic mb-4">Your heartfelt blessings have been sent to the couple!</p>
                  <button
                    onClick={() => { setShowRsvpModal(false); setBlessingSubmitted(false); setGuestName(''); setBlessingMsg(''); }}
                    className="px-6 py-2 rounded-full bg-[#4A101A] text-[#FFE89C] text-xs font-cinzel font-bold"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

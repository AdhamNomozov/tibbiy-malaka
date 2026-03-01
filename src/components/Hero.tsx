"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useInView } from "framer-motion";
import { Stethoscope, HeartPulse, Activity, ArrowRight, Award, GraduationCap, ShieldCheck, ClipboardCheck } from "lucide-react";
import Image from "next/image";

// CountUp Component for Stats
const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { stiffness: 40, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B1120] overflow-hidden pt-20">
      
      {/* 1. Animated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#14b8a6]/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#0d1a2d]/40 blur-[140px] animate-pulse delay-700" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-600/10 blur-[100px] animate-pulse delay-1000" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/50 to-[#0B1120]" />
      </div>

      {/* 4. Floating Medical Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] opacity-[0.05] text-teal-400"
        >
          <Stethoscope size={80} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[15%] opacity-[0.05] text-white"
        >
          <HeartPulse size={100} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[10%] right-[35%] opacity-[0.05] text-teal-500"
        >
          <Activity size={120} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          
          {/* Left Column: Typography Enhancement */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                  Rasmiy davlat litsenziyasi №1138493
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-center lg:text-left">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400">
                  Tibbiyotda professional
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                  malaka oshirish
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                Davlat standartlariga moslashtirilgan 26 turdagi o&apos;quv dasturlari. 
                Tibbiyot xodimlari uchun zamonaviy va amaliy bilimlar markazi.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <a 
                href="https://test.tibbiy-malaka.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <ClipboardCheck className="w-5 h-5" />
                Kirish testini topshirish
              </a>
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all hover:bg-white/10 active:scale-[0.98] flex items-center justify-center gap-3"
              >
                Konsultatsiya olish
                <ArrowRight size={18} />
              </button>
            </motion.div>

            {/* 5. Stats Counter */}
            
          </div>

          {/* 2. Right Side: Clean Logo with Floating Badges */}
          <div className="relative lg:flex hidden items-center justify-center py-20">
            
            {/* Logo with Glow and Animation */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img 
                src="/images/MALAKA_LOGO.png" 
                alt="Tibbiy Malaka Logo"
                className="w-full max-w-[320px] h-auto object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.3)]"
              />
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] right-[10%] z-20 px-3 py-1.5 rounded-full bg-teal-500/10 backdrop-blur-md border border-teal-500/20 shadow-lg shadow-teal-900/20"
            >
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">26+ Yo&apos;nalish</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[15%] left-[5%] z-20 px-3 py-1.5 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 shadow-lg shadow-emerald-900/20"
            >
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">100% Litsenziya</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] right-[5%] z-20 px-3 py-1.5 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/20 shadow-lg shadow-amber-900/20"
            >
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Premium Sifat</span>
            </motion.div>

            {/* Background Decorative Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -z-10" />

          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(200%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

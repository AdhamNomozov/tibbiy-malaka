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
          className="absolute top-[15%] left-[5%] opacity-10 text-teal-400"
        >
          <Stethoscope size={80} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[15%] opacity-[0.08] text-white"
        >
          <HeartPulse size={100} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[10%] right-[35%] opacity-[0.12] text-teal-500"
        >
          <Activity size={120} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
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

              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400">
                  Tibbiyotda professional
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                  malaka oshirish
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 leading-relaxed max-w-xl text-center lg:text-left">
                Davlat standartlariga moslashtirilgan 26 turdagi o&apos;quv dasturlari. 
                Tibbiyot xodimlari uchun zamonaviy va amaliy bilimlarning yagona markazi.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a 
                href="https://test.tibbiy-malaka.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-2xl shadow-teal-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <ClipboardCheck size={18} />
                Kirish testini topshirish
              </a>

              <button 
                onClick={scrollToContact}
                className="px-10 py-5 border-2 border-slate-700 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/5 hover:border-slate-500 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                Konsultatsiya olish
                <ArrowRight size={18} />
              </button>
            </motion.div>

            {/* 5. Stats Counter */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5"
            >
              <div className="space-y-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C5A059]">
                   <GraduationCap size={18} />
                   <p className="text-2xl font-black text-white"><CountUp value={26} suffix="+" /></p>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Yo&apos;nalishlar</p>
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C5A059]">
                   <ShieldCheck size={18} />
                   <p className="text-2xl font-black text-white"><CountUp value={100} suffix="%" /></p>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Litsenziya</p>
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C5A059]">
                   <Award size={18} />
                   <p className="text-2xl font-black text-white">Premium</p>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Sifat darajasi</p>
              </div>
            </motion.div>
          </div>

          {/* 2. Right Side: Glassmorphism Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative group lg:block hidden"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] backdrop-blur-[16px] saturate-[180%] bg-white/[0.05] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              
              {/* Image with subtle overlay */}
              <div className="absolute inset-0">
                <Image 
                  src="/images/models-1.jpg" 
                  alt="Medical Training Center" 
                  fill 
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  onError={(e) => {
                    (e.target as any).src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
              </div>

              {/* Floating Badge in Card */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                    <Activity className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Amaliy ko&apos;nikmalar</h4>
                    <p className="text-xs text-slate-400">Zamonaviy simulyatsiya markazi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Back Gradients */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10 group-hover:bg-teal-500/20 transition-colors" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

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

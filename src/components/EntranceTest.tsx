"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  CheckCircle, 
  ArrowRight, 
  FileText, 
  Award 
} from "lucide-react";

const EntranceTest = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background - gradient with pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
      
      {/* Floating icons - very subtle */}
      <div className="absolute top-10 right-20 opacity-10 hidden lg:block">
        <FileText className="w-24 h-24 text-white" />
      </div>
      <div className="absolute bottom-10 left-20 opacity-10 hidden lg:block">
        <Award className="w-20 h-20 text-white" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest rounded-full"
            >
              📋 Onlayn test tizimi
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight"
            >
              Kirish testini topshiring va <br />
              <span className="text-teal-100">o&apos;z bilimingizni sinang</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-teal-50/80 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Malaka oshirish kurslariga yozilishdan oldin bilim darajangizni tekshiring. 
              Test natijalariga qarab sizga mos o&apos;quv dasturi tavsiya etiladi.
            </motion.p>
            
            {/* Stats row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-12 pt-4">
              <div className="text-center">
                <div className="text-4xl font-black text-white">30</div>
                <div className="text-teal-100/60 text-xs font-bold uppercase tracking-widest mt-1">daqiqa</div>
              </div>
              <div className="text-center border-x border-white/10 px-12">
                <div className="text-4xl font-black text-white">50</div>
                <div className="text-teal-100/60 text-xs font-bold uppercase tracking-widest mt-1">savol</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white">24/7</div>
                <div className="text-teal-100/60 text-xs font-bold uppercase tracking-widest mt-1">istalgan vaqt</div>
              </div>
            </div>
          </div>
          
          {/* Right side - CTA card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-sm"
          >
            <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-teal-100">
                <ClipboardCheck className="w-8 h-8 text-teal-600" />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Hoziroq boshlang
              </h3>
              
              <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                Ro&apos;yxatdan o&apos;ting va kirish testini bepul topshiring. Natija darhol ekranda.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Bepul va majburiyatsiz",
                  "Natija bir zumda",
                  "Sertifikat tavsiyasi"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0">
                      <CheckCircle size={14} strokeWidth={3} />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://test.tibbiy-malaka.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-teal-900/20 hover:shadow-teal-900/40 transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.98]"
              >
                Testni boshlash
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default EntranceTest;

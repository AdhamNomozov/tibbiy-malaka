"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Copy, 
  Check,
  Download,
  Maximize2,
  X
} from "lucide-react";

const trustIndicators = [
  {
    title: "Davlat namunasi",
    desc: "Sertifikat berish huquqi",
  },
  {
    title: "Hududiy qamrov",
    desc: "Barcha viloyatlarda amal qiladi",
  },
  {
    title: "Raqamli nazorat",
    desc: "QR-kod orqali tekshirish",
  },
  {
    title: "Rasmiy reyestr",
    desc: "Yagona tizimga kiritilgan",
  }
];

const License = () => {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const licenseNumber = "№1138493";

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="litsenziya" className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">

    {/* Background Watermark Pattern */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side Content: 55% Width */}
          <div className="w-full lg:w-[55%] space-y-10">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-teal-900/10">
                <ShieldCheck size={14} /> Rasmiy Ma&apos;lumot
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Davlat litsenziyasi va <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                  akkreditatsiya
                </span>
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm group max-w-lg">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Litsenziya raqami</p>
                  <p className="text-2xl font-black text-slate-900">{licenseNumber}</p>
                </div>
                <div className="h-10 w-px bg-slate-100 hidden sm:block mx-4" />
                <button 
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 hover:bg-teal-50 text-slate-600 hover:text-teal-700 rounded-xl transition-all font-bold text-sm active:scale-95"
                >
                  {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
                  {copied ? "Nusxalandi" : "Nusxa olish"}
                </button>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Markazimiz O&apos;zbekiston Respublikasi Oliy ta&apos;lim, fan va innovatsiyalar vazirligi tomonidan 
                berilgan rasmiy litsenziya asosida faoliyat yuritadi.
              </p>
            </motion.div>

            {/* Trust Indicator Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              {trustIndicators.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Oliy Toifali Markaz Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 text-white flex items-center gap-6 shadow-xl relative overflow-hidden group max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#C5A059] shadow-inner relative z-10">
                <Award size={32} />
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-1 text-[#C5A059]">Oliy Toifali Markaz</h4>
                <p className="text-sm text-slate-400">Markazimiz davlat akkreditatsiyasidan o&apos;tgan.</p>
              </div>
            </div>
          </div>

          {/* Right Side: REAL License Certificate Display - 45% Width */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end">
            <motion.div 
              initial={{ rotateY: -15, rotateX: 5, opacity: 0, scale: 0.9 }}
              whileInView={{ rotateY: -5, rotateX: 2, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ 
                rotateY: { duration: 0.8 },
                rotateX: { duration: 0.8 },
                scale: { duration: 0.3 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative group cursor-pointer w-full max-w-[500px] lg:max-w-lg"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Certificate Container: White with depth */}
              <div className="relative bg-white rounded-xl p-4 shadow-2xl border border-slate-200 overflow-hidden">
                <div className="relative aspect-[1/1.41] w-full overflow-hidden rounded-lg">
                  <Image 
                    src="/images/Tasdiqnoma.png" 
                    alt="Official License Certificate" 
                    fill 
                    className="object-contain"
                    onError={(e) => {
                      (e.target as any).src = "https://placehold.co/800x1131/white/slate?text=Tasdiqnoma";
                    }}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
                      <Maximize2 size={28} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-teal-500/5 blur-3xl -z-10 group-hover:bg-teal-500/10 transition-colors" />
            </motion.div>

            {/* Actions & Verification Text: Subtle & Minimal */}
            <div className="mt-6 space-y-4 text-center lg:text-right w-full max-w-[500px] lg:max-w-lg">
              <div className="flex flex-col lg:flex-row items-center lg:justify-end gap-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center lg:text-right max-w-[200px]">
                  QR kodni skanerlang va <span className="text-teal-600">license.gov.uz</span> da tekshiring
                </p>
                <a 
                  href="/documents/Tasdiqnoma.pdf" 
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-transparent border border-teal-600/50 text-teal-600 hover:bg-teal-600 hover:text-white font-bold text-sm rounded-xl shadow-lg transition-all active:scale-95 group"
                >
                  <Download className="w-4 h-4" />
                  PDF yuklab olish
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <button aria-label="Close modal" className="absolute top-6 right-6 p-3 text-white/50 hover:text-white transition-colors" onClick={() => setIsModalOpen(false)}>
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-full aspect-[1/1.41] bg-white rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src="/images/Tasdiqnoma.png" 
                alt="Full License Certificate" 
                fill 
                className="object-contain"
                onError={(e) => {
                  (e.target as any).src = "https://placehold.co/800x1131/white/slate?text=Tasdiqnoma";
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default License;

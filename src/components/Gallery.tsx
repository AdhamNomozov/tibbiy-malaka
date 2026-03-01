"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Building2, 
  Microscope, 
  Monitor, 
  Users, 
  Beaker, 
  Stethoscope, 
  Maximize2, 
  X
} from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Asosiy o'quv binosi",
    description: "Markazimizning tashqi ko'rinishi va kirish qismi",
    icon: <Building2 className="w-12 h-12" />,
    gradient: "from-teal-500/10 to-emerald-500/5",
    area: "large",
    src: "/images/classroom-1.jpg"
  },
  {
    id: 2,
    title: "Simulyatsiya markazi",
    description: "Amaliy ko'nikmalarni rivojlantirish xonasi",
    icon: <Stethoscope className="w-10 h-10" />,
    gradient: "from-blue-500/10 to-indigo-500/5",
    area: "med1",
    src: "/images/models-1.jpg"
  },
  {
    id: 3,
    title: "Kompyuter laboratoriyasi",
    description: "Zamonaviy IT va elektron kutubxona",
    icon: <Monitor className="w-10 h-10" />,
    gradient: "from-teal-600/10 to-cyan-500/5",
    area: "med2",
    src: "/images/computer-lab.jpg"
  },
  {
    id: 4,
    title: "Laboratoriya xonasi",
    description: "Kimyoviy va biologik tadqiqotlar markazi",
    icon: <Microscope className="w-8 h-8" />,
    gradient: "from-emerald-500/10 to-teal-400/5",
    area: "med3",
    src: "/images/models-2.jpg"
  },
  {
    id: 5,
    title: "Konferensiya zali",
    description: "Ma'ruzalar va seminarlar o'tkazish joyi",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-cyan-500/10 to-blue-400/5",
    area: "med4",
    src: "/images/classroom-2.jpg"
  },
  {
    id: 6,
    title: "Kutish hududi",
    description: "Talabalar uchun dam olish maskani",
    icon: <Beaker className="w-6 h-6" />,
    gradient: "from-slate-200 to-slate-100",
    area: "small",
    src: "/images/waiting-area.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Gallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedItem = galleryItems.find(item => item.id === selectedId);

  return (
    <section id="infratuzilma" className="relative py-32 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
      
      {/* 1. Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. Section Header (Light Mode) */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8 rounded-full"
          />
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Zamonaviy o&apos;quv <span className="text-teal-600">infratuzilmasi</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 font-medium"
          >
            Nazariy bilimlarni amaliyot bilan mustahkamlash uchun barcha sharoitlar yaratilgan.
          </motion.p>
        </div>

        {/* 3. Bento Grid - Updated for Light Mode */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-template-areas-desktop"
        >
          {galleryItems.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-teal-500/20 ${
                item.area === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full h-full min-h-[280px]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as any).style.display = 'none';
                  }}
                />
                
                {/* Vibrant Gradient Placeholder (when image is hidden/loading) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br ${item.gradient} transition-opacity`}>
                  <div className="text-teal-600/40 group-hover:text-teal-600 group-hover:scale-110 transition-all duration-500 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-slate-800 font-bold text-center transition-colors">
                    {item.title}
                  </h4>
                </div>

                {/* 5. Hover Overlay (Light Mode Optimized) */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white mb-4"
                  >
                    <Maximize2 size={24} />
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    <span className="inline-block px-3 py-1 bg-teal-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-3 shadow-lg shadow-teal-500/20">
                      Ko&apos;rish
                    </span>
                    <p className="text-white font-bold text-xl mb-1">{item.title}</p>
                    <p className="text-white/80 text-sm font-medium">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 6. Lightbox Modal */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-slate-900/95 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <button 
              className="absolute top-6 right-6 p-3 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedId(null)}
            >
              <X size={32} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-slate-900 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedItem.title}</h3>
                <p className="text-slate-300 text-lg">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (min-width: 768px) {
          .md\:grid-template-areas-desktop {
            grid-template-areas: 
              "large large med1"
              "large large med2"
              "med3 med4 small";
            grid-template-rows: 280px 280px 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;

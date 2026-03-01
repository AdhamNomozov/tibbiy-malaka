"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    icon: <Building2 className="w-6 h-6" />,
    gradient: "from-teal-500/20 to-emerald-500/10",
    area: "large",
    src: "/gallery/classroom-1.jpg"
  },
  {
    id: 2,
    title: "Simulyatsiya markazi",
    description: "Amaliy ko'nikmalarni rivojlantirish xonasi",
    icon: <Stethoscope className="w-6 h-6" />,
    gradient: "from-blue-500/20 to-indigo-500/10",
    area: "med1",
    src: "/gallery/models-1.jpg"
  },
  {
    id: 3,
    title: "Kompyuter laboratoriyasi",
    description: "Zamonaviy IT va elektron kutubxona",
    icon: <Monitor className="w-6 h-6" />,
    gradient: "from-teal-600/20 to-cyan-500/10",
    area: "med2",
    src: "/gallery/computer-lab.jpg"
  },
  {
    id: 4,
    title: "Laboratoriya xonasi",
    description: "Kimyoviy va biologik tadqiqotlar markazi",
    icon: <Microscope className="w-6 h-6" />,
    gradient: "from-emerald-500/20 to-teal-400/10",
    area: "med3",
    src: "/gallery/models-2.jpg"
  },
  {
    id: 5,
    title: "Konferensiya zali",
    description: "Ma'ruzalar va seminarlar o'tkazish joyi",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-cyan-500/20 to-blue-400/10",
    area: "med4",
    src: "/gallery/classroom-2.jpg"
  },
  {
    id: 6,
    title: "Kutish hududi",
    description: "Talabalar uchun dam olish maskani",
    icon: <Beaker className="w-6 h-6" />,
    gradient: "from-slate-200 to-slate-100",
    area: "small",
    src: "/gallery/waiting-area.jpg"
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
    <section id="infratuzilma" className="relative py-32 bg-white overflow-hidden">
      
      {/* 1. Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
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
          <p className="text-lg text-slate-600 font-medium">
            Nazariy bilimlarni amaliyot bilan mustahkamlash uchun barcha sharoitlar yaratilgan.
          </p>
        </div>

        {/* 3. Bento Grid */}
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
              onClick={() => item.src && setSelectedId(item.id)}
              className={`group relative overflow-hidden rounded-3xl bg-slate-100 transition-all duration-500 ${
                item.src ? 'cursor-pointer hover:shadow-2xl' : ''
              } ${
                item.area === 'large' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="relative w-full h-full min-h-[280px] overflow-hidden">
                {item.src ? (
                  <>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  </>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center`} />
                )}
                
                {/* Content Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white`}>
                  <div className={`${item.src ? 'text-white' : 'text-teal-600'} mb-3 transition-transform duration-500 group-hover:scale-110 origin-left`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 ${item.src ? 'text-white' : 'text-slate-800'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm font-medium ${item.src ? 'text-white/80' : 'text-slate-600'} max-w-xs`}>
                    {item.description}
                  </p>
                </div>

                {/* Lightbox Trigger Icon (only if image exists) */}
                {item.src && (
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={18} />
                  </div>
                )}
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
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
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

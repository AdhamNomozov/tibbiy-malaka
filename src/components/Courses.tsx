"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Microscope, 
  Pill, 
  Activity, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

interface CoursesProps {
  onOpenModal: () => void;
}

const courseCategories = [
  {
    icon: <Stethoscope className="w-6 h-6 text-white" />,
    title: "Ixtisoslashtirilgan hamshiralik",
    items: [
      "Anestezist",
      "Operatsion hamshira",
      "Reanimatsiya",
      "Akusherlik",
      "Jarrohlik",
    ],
  },
  {
    icon: <Microscope className="w-6 h-6 text-white" />,
    title: "Laboratoriya va Diagnostika",
    items: [
      "Laboratoriya laboranti",
      "Rentgen",
      "Funksional diagnostika",
    ],
  },
  {
    icon: <Pill className="w-6 h-6 text-white" />,
    title: "Farmatsevtika va Sanitariya",
    items: [
      "Farmasevt assistenti",
      "Sterilizatsiya",
      "Sanitariya-epidemiologiya",
    ],
  },
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    title: "Maxsus va Boshqaruv kurslari",
    items: [
      "Fizioterapiya",
      "Massaj",
      "Tibbiy statistika",
      "Oilaviy tibbiyot",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Courses = ({ onOpenModal }: CoursesProps) => {
  return (
    <section id="yonalishlar" className="relative py-32 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] overflow-hidden">
      
      {/* 1. Curved SVG Transition from Dark Hero */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-[#0B1120]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* 1. Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[#0f172a] pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="currentColor">
          <path d="M45 10 H55 V45 H90 V55 H55 V90 H45 V55 H10 V45 H45 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* 1. Section Header (Updated for Light Theme) */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-[3px] bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6 rounded-full"
          />
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight"
          >
            Malaka oshirish va <br />
            <span className="text-teal-600">qayta tayyorlash yo&apos;nalishlari</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 font-medium"
          >
            Markazimizda 26 ta yo&apos;nalish bo&apos;yicha davlat namunasidagi sertifikat beruvchi kurslar mavjud.
          </motion.p>
        </div>

        {/* 2. Redesigned Cards (White with depth) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {courseCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] border border-[#e2e8f0] transition-all duration-300 overflow-hidden"
            >
              {/* Hover Left-border */}
              <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-teal-500 transition-all duration-300" />
              
              {/* 4. Icon Container with Shadow */}
              <div className="relative mb-8">
                <div className="relative w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(20,184,166,0.3)] group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0f172a] mb-6 leading-tight group-hover:text-teal-600 transition-colors">
                {category.title}
              </h3>
              
              <ul className="space-y-3 w-full flex-grow">
                {category.items.map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-center justify-center gap-2 text-slate-700 text-sm group/item cursor-default"
                  >
                    <div className="w-1.5 h-1.5 bg-teal-500/30 rounded-full group-hover/item:bg-teal-500 transition-colors" />
                    <span className="group-hover/item:text-[#0f172a] transition-colors font-medium">
                      {item}
                    </span>
                    <ChevronRight className="w-3 h-3 text-teal-500 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. Bottom CTA Button (Solid Teal) */}
        <div className="mt-20 text-center">
          <motion.button 
            onClick={onOpenModal}
            whileHover={{ scale: 1.05, backgroundColor: "#0d9488" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-teal-600 rounded-full text-white font-bold shadow-lg shadow-teal-900/20 transition-all"
          >
            Barcha yo&apos;nalishlar bilan tanishish
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Courses;

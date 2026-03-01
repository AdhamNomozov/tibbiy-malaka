"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Quote } from "lucide-react";

const keyTeachers = [
  { 
    name: "Allayarova Ruxsora", 
    role: "Bosh mutaxassis", 
    image: "https://ui-avatars.com/api/?name=Allayarova+Ruxsora&size=120&background=14b8a6&color=ffffff" 
  },
  { 
    name: "Muhammadiyeva Gulchexra", 
    role: "Katta o'qituvchi", 
    image: "https://ui-avatars.com/api/?name=Muhammadiyeva+Gulchexra&size=120&background=0d9488&color=ffffff" 
  },
  { 
    name: "Panjiyeva Iroda", 
    role: "Ixtisoslashtirilgan hamshira", 
    image: "https://ui-avatars.com/api/?name=Panjiyeva+Iroda&size=120&background=0f766e&color=ffffff" 
  },
  { 
    name: "Karimov Behzod", 
    role: "Laboratoriya mutaxassisi", 
    image: "https://ui-avatars.com/api/?name=Karimov+Behzod&size=120&background=115e59&color=ffffff" 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Team = () => {
  return (
    <section id="jamoa" className="relative py-32 bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8 rounded-full"
          />
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Bizning professional <span className="text-teal-600">jamoamiz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 font-medium"
          >
            Darslar ko&apos;p yillik tajribaga ega bo&apos;lgan malakali mutaxassislar tomonidan olib boriladi.
          </motion.p>
        </div>

        {/* 2. Director Hero Card */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-24"
        >
          <div className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-600 to-emerald-700 p-8 md:p-12 shadow-2xl shadow-teal-900/20 text-white">
            {/* Watermark Pattern */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
              <Award size={400} strokeWidth={0.5} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Director Avatar - Using regular img tag for external placeholders */}
              <div className="relative">
                <img 
                  src="https://ui-avatars.com/api/?name=Xudoyberdiyev+Akram&size=200&background=0d9488&color=ffffff&bold=true"
                  alt="Xudoyberdiyev Akram Rustamovich"
                  className="w-40 h-40 md:w-56 md:h-56 rounded-3xl bg-white border-4 border-white/30 shadow-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl bg-[#C5A059] flex items-center justify-center shadow-lg border-4 border-teal-600">
                  <Award size={20} className="text-white" />
                </div>
              </div>

              {/* Director Content */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-widest">
                  Muassasa direktori
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                  Xudoyberdiyev Akrom Rustamovich
                </h3>
                <div className="relative">
                  <Quote size={40} className="absolute -top-4 -left-6 opacity-20 text-white" />
                  <p className="text-lg md:text-xl font-medium leading-relaxed italic text-teal-50 pl-4">
                    &quot;Bizning maqsadimiz — O&apos;zbekiston tibbiyot tizimi uchun eng yuqori malakali va zamonaviy bilimlarga ega mutaxassislarni tayyorlashdir.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Team Member Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {keyTeachers.map((teacher, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1.5 bg-teal-500 transition-all duration-300" />
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-20 h-20 rounded-full border-2 border-teal-500 shadow-lg overflow-hidden">
                  <img 
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 leading-tight">{teacher.name}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{teacher.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em]">
            Va boshqa 15+ malakali mutaxassislar
          </p>
        </div>

      </div>
    </section>
  );
};

export default Team;

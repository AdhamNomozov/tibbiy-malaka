"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, BookOpen, ArrowRight } from "lucide-react";

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (direction: string) => void;
}

const allDirections = [
  { 
    category: "Ixtisoslashtirilgan hamshiralik", 
    items: [
      "Anestezist(ka) hamshirasi",
      "Bolalar va kattalar yuqumli kasalliklarida hamshiralik ishi",
      "Davolash profilaktika muassasalarida akusherlik va ginekologik yordam",
      "Operatsion hamshira",
      "Reanimatsiya va intensiv terapiyada hamshiralik ishi",
      "Jarrohlik bo'limlari hamshirasi",
      "Shoshilinch tibbiy yordam hamshirasi"
    ]
  },
  { 
    category: "Laboratoriya va Diagnostika", 
    items: [
      "Laboratoriya laboranti",
      "Rentgen laboranti", 
      "Funksional diagnostika hamshirasi",
      "Tibbiy tahlil laboratoriyasi mutaxassisi"
    ]
  },
  { 
    category: "Farmatsevtika va Sanitariya", 
    items: [
      "Farmasevt assistenti",
      "Sterilizatsiya hamshirasi",
      "Sanitariya-epidemiologiya laboranti",
      "Vrach-laborant yordamchisi"
    ]
  },
  { 
    category: "Maxsus va Boshqaruv kurslari", 
    items: [
      "Fizioterapiya hamshirasi",
      "Massaj hamshirasi",
      "Tibbiy statistika hamshirasi",
      "Oilaviy tibbiyot hamshirasi",
      "Sog'liqni saqlash menejmenti"
    ]
  }
];

const DirectionsModal = ({ isOpen, onClose, onSelect }: DirectionsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-8 md:p-10 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-widest rounded-full">
                  <BookOpen size={14} /> 26 ta yo&apos;nalish
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Barcha o&apos;quv <span className="text-teal-600">yo&apos;nalishlari</span>
                </h2>
                <p className="text-slate-500 font-medium">Davlat standartlariga moslashtirilgan ixtisoslashtirilgan dasturlar</p>
              </div>
              <button 
                onClick={onClose}
                className="p-3 bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-900 rounded-2xl border border-slate-200 transition-all shadow-sm"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-10 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {allDirections.map((category, idx) => (
                  <div key={idx} className="space-y-6">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-teal-600 flex items-center gap-3">
                      <span className="w-8 h-px bg-teal-200" />
                      {category.category}
                    </h3>
                    <div className="grid gap-3">
                      {category.items.map((item, i) => (
                        <button 
                          key={i}
                          onClick={() => onSelect(item)}
                          className="group text-left p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-between"
                        >
                          <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                            {item}
                          </span>
                          <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-300 group-hover:text-teal-600 group-hover:border-teal-500 transition-all">
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Kerakli yo&apos;nalishni tanlang va biz siz bilan bog&apos;lanamiz
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DirectionsModal;

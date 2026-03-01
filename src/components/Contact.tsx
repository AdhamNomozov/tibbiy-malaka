"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Building2, 
  User2, 
  Send, 
  Lock, 
  BookOpen,
  Loader2,
  Check,
  MessageCircle,
  GraduationCap,
  Sparkles,
  Phone
} from "lucide-react";

interface ContactProps {
  selectedDirection?: string;
}

const Contact = ({ selectedDirection }: ContactProps) => {
  const [activeTab, setActiveTab] = useState<"individual" | "organization">("individual");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    direction: "",
    organization: ""
  });

  useEffect(() => {
    if (selectedDirection) {
      setFormData(prev => ({ ...prev, direction: selectedDirection }));
    }
  }, [selectedDirection]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      
      // Reset form
      setTimeout(() => {
        setSubmitStatus('idle');
        setFormData({ name: "", phone: "", direction: "", organization: "" });
      }, 4000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    "Anestezist(ka) hamshirasi",
    "Operatsion hamshira",
    "Reanimatsiya hamshirasi",
    "Laboratoriya laboranti",
    "Rentgen laboranti",
    "Farmasevt assistenti",
    "Fizioterapiya hamshirasi",
    "Massaj hamshirasi",
    "Tibbiy statistika",
    "Oilaviy tibbiyot"
  ];

  return (
    <section id="contact-form" className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      
      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 text-teal-600 pointer-events-none"
      >
        <Sparkles size={120} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Motivational Content */}
          <div className="w-full lg:w-[45%] space-y-10 py-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-widest"
              >
                <MessageCircle size={14} /> Qabul ochiq
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
              >
                Kelajagingizni <br />
                <span className="text-teal-600">bugun boshlang</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg text-slate-600 leading-relaxed max-w-md"
              >
                O&apos;z sohangizda yetuk mutaxassis bo&apos;lishingiz uchun biz barcha sharoitlarni yaratdik. 
                Professional malaka oshirishni hoziroq boshlang.
              </motion.p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-5">
              {[
                "24 soat ichida aloqa",
                "Bepul mutaxassis konsultatsiyasi",
                "100% kafolatlangan davlat sertifikati"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-slate-700 font-semibold"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100">
                    <CheckCircle2 size={18} />
                  </div>
                  {text}
                </motion.div>
              ))}
            </div>

            {/* Achievement Stat */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">500+ bitiruvchilar</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">2026-yildan buyon</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form with States */}
          <div className="w-full lg:w-[55%] relative">
            <div className="absolute inset-0 bg-teal-500/5 blur-[100px] -z-10 rounded-full" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 min-h-[500px] flex flex-col"
            >
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-100 shadow-xl">
                      <Check size={40} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900">Arizangiz qabul qilindi!</h3>
                      <p className="text-slate-600 max-w-xs mx-auto">Tez orada mutaxassislarimiz siz bilan bog&apos;lanishadi.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0, y: -20 }} className="space-y-8">
                    {/* Tab Switcher */}
                    <div className="flex p-1.5 bg-slate-100 rounded-2xl">
                      <button
                        onClick={() => setActiveTab("individual")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${
                          activeTab === "individual" 
                          ? "bg-white text-teal-600 shadow-sm" 
                          : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        <User2 size={18} /> Jismoniy shaxs
                      </button>
                      <button
                        onClick={() => setActiveTab("organization")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${
                          activeTab === "organization" 
                          ? "bg-white text-teal-600 shadow-sm" 
                          : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        <Building2 size={18} /> Tashkilot
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeTab === "organization" && (
                          <div className="md:col-span-2 space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Muassasa nomi</label>
                            <div className="relative">
                              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                              <input 
                                type="text" 
                                required
                                value={formData.organization}
                                onChange={(e) => setFormData({...formData, organization: e.target.value})}
                                placeholder="Muassasa yoki klinika nomi"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-5 text-slate-900 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                              />
                            </div>
                          </div>
                        )}

                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                            {activeTab === "individual" ? "To'liq ismingiz" : "Mas'ul shaxs F.I.O."}
                          </label>
                          <div className="relative">
                            <User2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                            <input 
                              type="text" 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="F.I.O."
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-5 text-slate-900 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Telefon raqam</label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">
                               <Phone size={18} />
                            </div>
                            <input 
                              type="tel" 
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              placeholder="+998 __ ___ __ __"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-5 text-slate-900 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-2 space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">O&apos;quv yo&apos;nalishi</label>
                          <div className="relative">
                            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                            <select 
                              required
                              value={formData.direction}
                              onChange={(e) => setFormData({...formData, direction: e.target.value})}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-10 text-slate-900 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all appearance-none"
                            >
                              <option value="">Yo&apos;nalishni tanlang</option>
                              {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-teal-900/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group uppercase tracking-widest text-xs"
                      >
                        {isSubmitting ? (
                          <Loader2 className="animate-spin" size={20} />
                        ) : (
                          <>
                            Arizani yuborish
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                      
                      {submitStatus === 'error' && (
                        <p className="text-red-500 text-xs font-bold text-center animate-pulse">Xatolik yuz berdi. Iltimos qaytadan urinib ko&apos;ring.</p>
                      )}
                    </form>

                    <div className="flex items-center justify-center gap-2 text-slate-400">
                      <Lock size={12} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Xavfsiz va litsenziyalangan tizim</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

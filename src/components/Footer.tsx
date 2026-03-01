"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Send, 
  Globe,
  Award
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070B14] text-gray-400 py-20 overflow-hidden">
      
      {/* 1. Subtle Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-lg shadow-teal-900/20">
                <Award size={24} />
              </div>
              <h3 className="text-white font-black text-2xl tracking-tighter">
                TIBBIY <span className="text-teal-500">MALAKA</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              &quot;XODIMLAR MALAKASINI OSHIRISH VA ULARNI QAYTA TAYYORLASH ILM DARGOHI&quot; NTM. 
              Sog&apos;liqni saqlash sohasida professional kadrlarni tayyorlash bo&apos;yicha ishonchli hamkoringiz.
            </p>
            {/* 3. Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal-600 hover:text-white hover:scale-110 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal-600 hover:text-white hover:scale-110 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Telegram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal-600 hover:text-white hover:scale-110 transition-all duration-300">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Foydali havolalar</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#yonalishlar" className="hover:text-teal-500 transition-all duration-300">O&apos;quv yo&apos;nalishlari</Link></li>
              <li><Link href="#litsenziya" className="hover:text-teal-500 transition-all duration-300">Davlat litsenziyasi</Link></li>
              <li><Link href="#infratuzilma" className="hover:text-teal-500 transition-all duration-300">Infratuzilma</Link></li>
              <li><Link href="#jamoa" className="hover:text-teal-500 transition-all duration-300">Bizning jamoa</Link></li>
              <li><Link href="#aloqa" className="hover:text-teal-500 transition-all duration-300">Bog&apos;lanish</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-8">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Aloqa</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-teal-500 flex-shrink-0" />
                <span className="text-slate-400">Surxondaryo viloyati, Sho&apos;rchi tumani, Navro&apos;z MFY, A.Boybutaev ko&apos;chasi, 22-a-uy.</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-teal-500 flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                   <a href="tel:+998996611234" className="text-slate-300 hover:text-white transition-colors">+998 99 661 12 34</a>
                   <a href="tel:+998978433600" className="text-slate-300 hover:text-white transition-colors">+998 97 843 36 00</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Globe size={18} className="text-teal-500 flex-shrink-0" />
                <span className="text-slate-300">tibbiy-malaka.uz</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Maps Widget */}
          <div className="space-y-8">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest">Xaritada</h3>
            <div className="w-full h-44 rounded-2xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-slate-800 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.6542154367!2d67.7812345!3d38.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDAwJzQ0LjQiTiA2N8KwNDYnNTIuNCJF!5e0!3m2!1sen!2suz!4v1700000000000!5m2!1sen!2suz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* 5. Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
          <p className="text-slate-600 text-center md:text-left">© {currentYear} TIBBIY MALAKA. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-slate-600 hover:text-white transition-colors">Maxfiylik siyosati</Link>
            <Link href="#" className="text-slate-600 hover:text-white transition-colors">Shartlar</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

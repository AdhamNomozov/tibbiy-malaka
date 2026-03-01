"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogIn, Menu, X, ClipboardCheck } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Yo'nalishlar", href: "#yonalishlar" },
    { name: "Infratuzilma", href: "#infratuzilma" },
    { name: "Litsenziya", href: "#litsenziya" },
    { name: "Jamoa", href: "#jamoa" },
    { name: "Aloqa", href: "#contact-form" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-auto">
              <img 
                src="/images/MALAKA_LOGO.png" 
                alt="TIBBIY MALAKA Logo"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-[#C5A059] transition-colors">
              TIBBIY <span className="text-[#C5A059]">MALAKA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#C5A059] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A059] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://test.tibbiy-malaka.uz" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 flex items-center gap-2"
            >
              <ClipboardCheck className="w-4 h-4" />
              KIRISH TESTI
            </a>
            <a 
              href="https://admin.tibbiy-malaka.uz"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2.5 border border-white/10 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2 active:scale-95"
            >
              <LogIn size={16} />
              Kirish
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 border-t border-white/5" : "max-h-0 opacity-0"
        } bg-[#0B1120] shadow-2xl`}
      >
        <div className="px-6 pt-6 pb-12 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-lg font-bold text-slate-300 hover:text-[#C5A059] py-2 transition-colors border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 space-y-4">
            <a 
              href="https://test.tibbiy-malaka.uz" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-lg shadow-teal-500/20"
            >
              <ClipboardCheck className="w-5 h-5" />
              KIRISH TESTI
            </a>
            <a 
              href="https://admin.tibbiy-malaka.uz"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl"
            >
              <LogIn size={18} />
              Tizimga kirish
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

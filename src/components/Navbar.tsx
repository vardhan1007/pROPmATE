"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react"; // Added Menu and X icons
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ isAuthPage = false }: { activeIndex?: number; isAuthPage?: boolean }) {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile state

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "COMMERCIAL", path: "/properties/commercial", sub: ["Retail", "Office", "Industrial"] },
    { name: "RESIDENTIAL", path: "/properties/residential", sub: ["Villas", "Apartments", "Houses"] },
    { name: "INVESTMENT", path: "/properties/investment", sub: ["Funds", "Land"] },
    { name: "MIXED-USE", path: "/properties/mixed-use", sub: ["Complexes"] }, 
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] mt-4 px-4 md:px-8">
      <div 
        className={`max-w-[1750px] mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-500 rounded-xl border shadow-2xl ${
          isAuthPage 
            ? "bg-white/90 backdrop-blur-md border-slate-200 py-3" 
            : `bg-slate-950 border-slate-800 ${isScrolled ? "py-2" : "py-4"}`
        }`}
      >
        
        {/* LOGO - Always Visible */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/20">P</div>
          <span className={`text-xl font-black tracking-tighter uppercase font-sans ${isAuthPage ? "text-[#073A4B]" : "text-white"}`}>
            PROPMATE
          </span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS - Hidden on Mobile */}
        <div className="hidden lg:flex justify-center items-center h-full gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="group relative h-full flex items-center">
              <button className={`text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-1.5 transition-colors ${isAuthPage ? "text-[#073A4B]/70 group-hover:text-[#108AB1]" : "text-white/80 group-hover:text-blue-500"}`}>
                {item.name} <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110]">
                <div className={`border shadow-2xl rounded-xl overflow-hidden p-1 ${isAuthPage ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800"}`}>
                  {item.sub.map((sub) => (
                    <Link key={sub} href={`/properties/${sub.toLowerCase()}`} className={`block px-4 py-3 text-[9px] font-black transition-all rounded-lg uppercase tracking-widest ${isAuthPage ? "text-[#073A4B]/60 hover:bg-[#108AB1]/10 hover:text-[#108AB1]" : "text-white/60 hover:bg-blue-600 hover:text-white"}`}>
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ACTION AREA - Responsive */}
        <div className="flex items-center gap-4">
          {/* Desktop User Info / Sign In */}
          <div className="hidden md:flex items-center">
            {session ? (
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest leading-none">Welcome</p>
                  <p className={`text-xs font-bold mt-1 ${isAuthPage ? 'text-[#073A4B]' : 'text-white'}`}>{session.user?.name?.split(' ')[0]}</p>
                </div>
                <button onClick={() => signOut()} className="px-5 py-2 bg-red-500/10 border border-red-500/20 text-red-500 font-black text-[9px] uppercase tracking-widest rounded-lg hover:bg-red-500 hover:text-white transition-all">Sign Out</button>
              </div>
            ) : (
              <Link href="/auth/signin" className={`px-6 py-2 font-black text-[10px] uppercase tracking-widest rounded-lg shadow-lg ${isAuthPage ? "bg-[#073A4B] text-white" : "bg-blue-600 text-white"}`}>SIGN IN</Link>
            )}
          </div>

          {/* HAMBURGER BUTTON - Mobile Only */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isAuthPage ? "text-[#073A4B] bg-slate-100" : "text-white bg-white/10"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN - Clean & Neat Interface Card */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`lg:hidden mt-2 p-4 rounded-xl border shadow-2xl ${isAuthPage ? "bg-white border-slate-200" : "bg-slate-950 border-slate-800"}`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <p className="text-[10px] font-black text-blue-500 tracking-[0.2em]">{item.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.sub.map((sub) => (
                      <Link 
                        key={sub} 
                        href={`/properties/${sub.toLowerCase()}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-3 py-2 text-[9px] font-bold rounded-md border ${isAuthPage ? "border-slate-100 text-[#073A4B]" : "border-slate-800 text-white/70"}`}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                {session ? (
                  <button onClick={() => signOut()} className="text-red-500 text-[10px] font-black tracking-widest uppercase">Sign Out</button>
                ) : (
                  <Link href="/auth/signin" onClick={() => setIsMobileMenuOpen(false)} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-black text-[10px] tracking-widest w-full">SIGN IN</Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
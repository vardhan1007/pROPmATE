"use client";

import React from "react";
import { MapPin, BedDouble, Bath, Square, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyCard({ data }: { data: any }) {
  return (
    <motion.div 
      // 1. Initial State: Desaturated
      initial={{ filter: "grayscale(100%)", opacity: 0.9 }}
      
      // 2. Mobile Fix: Reveal color when just 20% of the card is visible
      whileInView={{ 
        filter: "grayscale(0%)", 
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" } 
      }}
      
      // 3. Desktop: Smooth hover scaling
      whileHover={{ 
        scale: 1.03,
        filter: "grayscale(0%)",
        transition: { duration: 0.2 }
      }}
      
      // Crucial: once: false ensures it re-animates if they scroll back up
      viewport={{ once: false, amount: 0.2 }} 
      className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        {/* REVEAL: Static grayscale removed from className to prevent CSS-lock */}
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
            {data.status}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-blue-600 mb-2">
          <MapPin size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">{data.location}</span>
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-6 line-clamp-2 leading-tight">{data.title}</h3>
        
        <div className="flex items-center justify-between py-4 border-y border-slate-100 mb-6 text-slate-600">
          <div className="flex gap-2"><BedDouble size={18} /><span className="text-sm font-bold">{data.beds}</span></div>
          <div className="flex gap-2"><Bath size={18} /><span className="text-sm font-bold">{data.baths}</span></div>
          <div className="flex gap-2"><Square size={18} /><span className="text-sm font-bold">{data.sqft}</span></div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Starting at</span>
            <span className="text-2xl font-black text-slate-900">{data.price}</span>
          </div>
          <button className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg active:scale-90">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
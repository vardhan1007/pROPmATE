"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Apple, Smartphone, Sparkles, Loader2, ArrowRight, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- STEP 2: MODAL COMPONENT (Satisfying the requirement) ---
const AppInstallModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
      >
        <div className="p-8 text-center">
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full p-2 text-slate-400 hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Smartphone className="text-blue-500" size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Get the Propmate App</h2>
          <p className="mt-3 text-slate-500 text-sm leading-relaxed px-4">
            Experience architectural excellence and premium listings directly on your mobile device.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-8 pt-0">
          <a href="#" className="flex items-center justify-center gap-4 rounded-2xl bg-slate-900 px-6 py-5 text-white hover:bg-black transition-all active:scale-[0.98] shadow-lg">
            <Apple size={28} fill="white" />
            <div className="text-left">
              <div className="text-[10px] uppercase opacity-60 leading-none mb-1">Download on the</div>
              <div className="text-lg font-bold leading-none">App Store</div>
            </div>
          </a>

          <a href="#" className="flex items-center justify-center gap-4 rounded-2xl bg-white border-2 border-slate-100 px-6 py-5 text-slate-900 hover:border-blue-400 transition-all active:scale-[0.98]">
            <PlayCircle size={28} className="text-blue-500" />
            <div className="text-left">
              <div className="text-[10px] uppercase text-slate-400 leading-none mb-1">Get it on</div>
              <div className="text-lg font-bold leading-none">Google Play</div>
            </div>
          </a>
        </div>

        <div className="bg-slate-50 p-5 text-center border-t border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Access • iOS & Android</p>
        </div>
      </motion.div>
    </div>
  );
};

// --- REST OF YOUR CODE REMAINS UNCHANGED ---
const TAGLINES: Record<string, string> = {
  retail: "Where flagship ambition meets consumer prestige.",
  office: "Architectural excellence for the modern corporate legacy.",
  industrial: "Strategic infrastructure for global scale and efficiency.",
  villas: "Secluded sanctuaries of unparalleled private luxury.",
  apartments: "Skyline sophistication redefined for urban icons.",
  houses: "Timeless architecture crafted for multi-generational comfort.",
  funds: "Diversified portfolios for the visionary wealth-builder.",
  land: "The ultimate canvas for your future architectural masterpiece.",
  complexes: "Integrated ecosystems designed for multi-dimensional living.",
};

const GET_CATEGORY_DATA = (cat: string) => {
  const normalizedCat = cat.toLowerCase();
  if (normalizedCat === "industrial") {
    return [
      { id: "1", title: "Omni-Channel Logistics Park", loc: "BHIWANDI", img: "/properties/i1.jpg", price: "₹54.2 Cr" },
      { id: "2", title: "Manesar Manufacturing Hub", loc: "GURGAON", img: "/properties/i2.jpg", price: "₹88.5 Cr" },
      { id: "3", title: "Sri City Precision Unit", loc: "ANDHRA PRADESH", img: "/properties/i3.jpg", price: "₹112.0 Cr" },
      { id: "4", title: "Chakan Industrial Zone", loc: "PUNE", img: "/properties/i4.jpg", price: "₹42.8 Cr" },
    ];
  }
  if (normalizedCat === "office") {
    return [
      { id: "1", title: "Skyline Corporate Hub", loc: "GURGAON", img: "/properties/office-1.jpg", price: "₹45.0 Cr" },
      { id: "2", title: "Zenith Business Park", loc: "MUMBAI (BKC)", img: "/properties/office-2.jpg", price: "₹82.5 Cr" },
      { id: "3", title: "Innovation Tech Center", loc: "BANGALORE", img: "/properties/office-3.jpg", price: "₹38.2 Cr" },
      { id: "4", title: "Legacy Executive Suites", loc: "PUNE", img: "/properties/office-4.jpg", price: "₹21.7 Cr" },
    ];
  }
  if (normalizedCat === "villas") {
    return [
      { id: "1", title: "The Azure Retreat", loc: "GURGAON", img: "/properties/villa-1.jpg", price: "₹45.0 Cr" },
      { id: "2", title: "Infinity Palms Estate", loc: "MUMBAI (BKC)", img: "/properties/villa-2.jpg", price: "₹82.5 Cr" },
      { id: "3", title: "Whispering Woods Manor", loc: "BANGALORE", img: "/properties/villa-3.jpg", price: "₹38.2 Cr" },
      { id: "4", title: "The Heritage Hacienda", loc: "PUNE", img: "/properties/villa-4.jpg", price: "₹21.7 Cr" },
    ];
  }
  if (normalizedCat === "apartments") {
    return [
      { id: "1", title: "The Celestia Penthouse", loc: "MUMBAI (WORLI)", img: "/properties/a1.jpg", price: "₹65.5 Cr" },
      { id: "2", title: "Skyview Signature Suites", loc: "GURGAON (GOLF COURSE RD) ", img: "/properties/a2.jpg", price: "₹28.5 Cr" },
      { id: "3", title: "The Meridian Heights", loc: "BANGALORE", img: "/properties/a3.jpg", price: "₹18.2 Cr" },
      { id: "4", title: "Elysian Urban Lofts", loc: "HYDERABAD", img: "/properties/a4.jpg", price: "₹12.7 Cr" },
    ];
  }
  if (normalizedCat === "houses") {
    return [
      { id: "1", title: "The Verdant Hillside Manor", loc: "GURGAON", img: "/properties/h1.jpg", price: "₹45.0 Cr" },
      { id: "2", title: "The Regal Palladium", loc: "MUMBAI", img: "/properties/h2.jpg", price: "₹82.5 Cr" },
      { id: "3", title: "The Terracotta Sanctuary", loc: "BANGALORE", img: "/properties/h3.jpg", price: "₹38.2 Cr" },
      { id: "4", title: "Lakeside Heritage Estate", loc: "PUNE", img: "/properties/h4.jpg", price: "₹21.7 Cr" },
    ];
  }
  if (normalizedCat === "funds") {
    return [
      { id: "1", title: "Prime Commercial REIT", loc: "MUMBAI (BKC)", img: "/properties/f1.jpg", price: "₹150.0 Cr" },
      { id: "2", title: "Logistics Alpha Fund",loc: "BHIWANDI", img: "/properties/f2.jpg", price: "₹85.5 Cr" },
      { id: "3", title: "Urban Residential Equity", loc: "BANGALORE", img: "/properties/f3.jpg", price: "₹110.2 Cr" },
      { id: "4", title: "Strategic Land Bank", loc: "HYDERABAD", img: "/properties/f4.jpg", price: "₹45.7 Cr" }
    ];
  }
  if (normalizedCat === "land") {
    return [
      { id: "1", title: "The Sovereign Plotted Acres", loc: "GURGAON", img: "/properties/l1.jpg", price: "₹45.0 Cr" },
      { id: "2", title: "Coastal Heritage Domain", loc: "MUMBAI", img: "/properties/l2.jpg", price: "₹82.5 Cr" },
      { id: "3", title: "Golden Harvest Landbank", loc: "BANGALORE", img: "/properties/l3.jpg", price: "₹38.2 Cr" },
      { id: "4", title: "The Industrial Frontier", loc: "PUNE", img: "/properties/l4.jpg", price: "₹21.7 Cr" },
    ];
  }
  if (normalizedCat === "complexes") {
    return [
      { id: "1", title: "The Grand Atrium", loc: "MUMBAI (LOWER PAREL)", img: "/properties/d1.jpg", price: "₹125.0 Cr" },
      { id: "2", title: "Coastal Heritage Domain", loc: "MUMBAI", img: "/properties/d2.jpg", price: "₹82.5 Cr" },
      { id: "3", title: "Golden Harvest Landbank", loc: "BANGALORE", img: "/properties/d3.jpg", price: "₹38.2 Cr" },
      { id: "4", title: "The Industrial Frontier", loc: "PUNE", img: "/properties/d4.jpg", price: "₹21.7 Cr" },
    ];
  }
  return [
    { id: "1", title: "Viceroy Timepieces", loc: "MUMBAI", img: "/properties/retail-watch.jpg", price: "₹35.5 Cr" },
    { id: "2", title: "The Roasted Bean Cafe", loc: "BANGALORE", img: "/properties/coffee-shop.jpg", price: "₹12.2 Cr" },
    { id: "3", title: "Silk & Stones Boutique", loc: "DELHI", img: "/properties/boutique.jpg", price: "₹18.8 Cr" },
    { id: "4", title: "Cornerstone Essentials", loc: "HYDERABAD", img: "/properties/mall.jpg", price: "₹8.1 Cr" },
  ];
};

const LEFT_SLIDES = ["/properties/retail-watch.jpg", "/properties/i1.jpg", "/properties/office-1.jpg", "/properties/villa-1.jpg", "/properties/a1.jpg"];
const RIGHT_SLIDES = ["/properties/coffee-shop.jpg", "/properties/i2.jpg", "/properties/office-2.jpg", "/properties/villa-2.jpg", "/properties/a2.jpg"];

export default function CategoryPage() {
  const params = useParams();
  const category = (params?.category as string) || "Retail";
  const letters = category.toLowerCase().split("");
  const currentTagline = TAGLINES[category.toLowerCase()] || "A curated selection for refined tastes";
  const categoryData = GET_CATEGORY_DATA(category);

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const leftInterval = setInterval(() => setLeftIndex((prev) => (prev + 1) % LEFT_SLIDES.length), 3500);
    const rightInterval = setInterval(() => setRightIndex((prev) => (prev + 1) % RIGHT_SLIDES.length), 5000);
    return () => { clearInterval(leftInterval); clearInterval(rightInterval); };
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      <Navbar isAuthPage={true} />

      <div className="max-w-[1750px] mx-auto px-10 pt-40 pb-24">
        {/* --- PIXAR-STYLE HEADER --- */}
        <header className="flex flex-col items-center justify-center min-h-[320px] mb-16 text-center">
          <div className="flex items-end justify-center">
            <div className="flex overflow-hidden h-[8rem] md:h-[12rem] items-end pb-2">
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 + (i * 0.1) }}
                  className="text-8xl md:text-[11rem] font-extralight text-slate-900 lowercase tracking-tighter leading-none inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <motion.span
              initial={{ y: -800 }}
              animate={{ y: [0, -120, 0, -50, 0] }}
              transition={{ duration: 1.5, times: [0, 0.4, 0.6, 0.8, 1], ease: "easeInOut" }}
              className="w-5 h-5 md:w-7 md:h-7 bg-blue-400 rounded-full mb-5 ml-1 shadow-lg shadow-blue-400/20"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-[11px] font-medium tracking-[0.4em] text-slate-400 uppercase mt-2 max-w-2xl"
          >
            {currentTagline}
          </motion.p>
        </header>

        {/* --- PROPERTY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {categoryData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative p-4 bg-white rounded-[2rem] shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${idx % 2 === 0 ? "-rotate-1" : "rotate-1"} hover:rotate-0`}
            >
              <Link href={`/properties/${category.toLowerCase()}/${item.id}`}>
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-50 mb-6">
                  <img src={item.img} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={item.title} />
                </div>
                <div className="text-center pb-4 px-2">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em]">{item.loc}</span>
                  <h3 className="text-xl font-serif font-bold text-slate-800 mt-1 leading-tight">{item.title}</h3>
                  <p className="text-blue-500 font-bold text-sm mt-2">{item.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* --- FIXED WIDE SLIDESHOW BOX ---
        <section className="pb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full bg-white border border-slate-100 rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.06)] relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:h-[550px]">
              <div className="relative h-64 lg:h-full lg:col-span-3 overflow-hidden bg-slate-100 order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.img key={leftIndex} src={LEFT_SLIDES[leftIndex]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000" alt="Preview Left" />
                </AnimatePresence>
              </div>

              <div className="relative z-20 flex flex-col justify-center items-center p-12 lg:p-16 text-center lg:col-span-6 bg-white order-1 lg:order-2">
                <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Extend your search</span>
                <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-6 leading-tight">
                  Discover the <span className="italic font-serif text-blue-400">exclusive</span> <br /> mobile collection.
                </h2>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-slate-900 text-white font-medium text-[13px] tracking-wide px-10 py-4 rounded-full hover:bg-blue-500 transition-all shadow-xl active:scale-95"
                >
                  Install Propmate App
                </button>
              </div>

              <div className="relative h-64 lg:h-full lg:col-span-3 overflow-hidden bg-slate-100 order-3">
                <AnimatePresence mode="wait">
                  <motion.img key={rightIndex} src={RIGHT_SLIDES[rightIndex]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000" alt="Preview Right" />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </section> */}
        {/* --- VISIONARY ASYMMETRICAL CARD --- */}
<section className="pb-40 px-6 md:px-20 overflow-visible">
  <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    className="relative max-w-[1400px] mx-auto min-h-[600px] flex items-center justify-center"
  >
    {/* 1. THE GLASS BACKGROUND PANEL */}
    <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50/50 rounded-[4rem] border border-white/80 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] backdrop-blur-xl" />

    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full px-8 md:px-16">
      
      {/* 2. LEFT: FLOATING "FEATURE" IMAGE (Asymmetrical) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="lg:col-span-4 relative group"
      >
        <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl rotate-[-3deg] group-hover:rotate-0 transition-all duration-700 border-[8px] border-white">
           <AnimatePresence mode="wait">
             <motion.img 
               key={leftIndex} src={LEFT_SLIDES[leftIndex]} 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
             />
           </AnimatePresence>
        </div>
        {/* Decorative Glowing Orbit */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/10 blur-[80px] rounded-full" />
      </motion.div>

      {/* 3. CENTER: EDITORIAL TEXT BOX */}
      <div className="lg:col-span-4 text-center space-y-8 py-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em]">Don't Just Search it. Own it.</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-extralight text-slate-900 tracking-tighter leading-[0.9]">
          Elevate Your <br />
          <span className="italic font-serif font-normal text-blue-500">Perspective.</span>
        </h2>
        
        <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs mx-auto">
          Our exclusive collection, curated for the modern visionary. Available at your fingertips.
        </p>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="group relative px-12 py-5 bg-slate-900 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
        >
          <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="relative z-10 text-white font-bold text-[11px] uppercase tracking-widest">Install Propmate App</span>
        </button>
      </div>

      {/* 4. RIGHT: OVERLAPPING GALLERY STACK */}
      <div className="lg:col-span-4 relative flex items-center justify-end">
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="relative w-full aspect-[4/5] md:w-[80%]"
        >
          {/* Main Right Image */}
          <div className="absolute inset-0 rounded-[3.5rem] overflow-hidden shadow-2xl rotate-[3deg] border-[12px] border-white z-20">
             <AnimatePresence mode="wait">
               <motion.img 
                 key={rightIndex} src={RIGHT_SLIDES[rightIndex]} 
                 className="w-full h-full object-cover" 
               />
             </AnimatePresence>
          </div>
          
          {/* Decorative Background Card */}
          <div className="absolute -inset-4 bg-blue-500/5 rounded-[4rem] rotate-[-6deg] z-10 border border-blue-100" />
        </motion.div>
      </div>

    </div>
  </motion.div>
</section>
      </div>

      {/* --- ADDED MODAL COMPONENT (Satisfying Step 2) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <AppInstallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
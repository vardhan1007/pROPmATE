"use client";
import React from 'react';
import { X, Apple, PlayCircle } from 'lucide-react';

interface AppInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppInstallModal({ isOpen, onClose }: AppInstallModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="p-6 text-center">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Get the Propmate App</h2>
          <p className="mt-2 text-gray-500">Experience the best of real estate on your mobile device.</p>
        </div>

        {/* Store Buttons */}
        <div className="flex flex-col gap-3 p-6 pt-0">
          <a href="#" className="flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-white hover:bg-gray-800 transition-all active:scale-[0.98]">
            <Apple size={24} fill="white" />
            <div className="text-left">
              <div className="text-[10px] uppercase opacity-70 leading-none">Download on the</div>
              <div className="text-lg font-semibold leading-none">App Store</div>
            </div>
          </a>

          <a href="#" className="flex items-center justify-center gap-3 rounded-xl bg-gray-900 px-6 py-4 text-white hover:bg-black transition-all active:scale-[0.98]">
            <PlayCircle size={24} fill="white" />
            <div className="text-left">
              <div className="text-[10px] uppercase opacity-70 leading-none">Get it on</div>
              <div className="text-lg font-semibold leading-none">Google Play</div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center">
          <p className="text-xs text-gray-400">Available globally on iOS and Android</p>
        </div>
      </div>
    </div>
  );
}
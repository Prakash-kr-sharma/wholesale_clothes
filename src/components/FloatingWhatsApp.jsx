import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp B2B Support" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip / Ping notification banner */}
      <a
        href="https://wa.me/919876543210?text=Hello%20THREADHUB,%20I%20am%20a%20retailer%20interested%20in%20bulk%20wholesale%20clothing%20catalog."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 rounded-full bg-neutral-900/90 border border-emerald-500/40 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md hover:border-emerald-400 transition group"
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-neutral-300 group-hover:text-emerald-300">Wholesale Desk Online</span>
      </a>

      {/* Main Floating Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20THREADHUB,%20I%20am%20a%20retailer%20interested%20in%20bulk%20wholesale%20clothing%20catalog."
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-2xl shadow-emerald-500/30 transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat with Wholesale Specialist on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </aside>
  );
}

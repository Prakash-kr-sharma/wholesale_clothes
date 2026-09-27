import React from 'react';
import { X, Download, MessageCircle, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { OCCASIONS } from '../data/wholesaleData';

export default function DigitalLookbookModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a downloadable text/json summary or alert
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'THREADHUB_2026_Wholesale_Occasions_Lookbook.pdf');
    alert('2026 Wholesale Lookbook & Fabric Swatch Catalog PDF download initiated!');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 sm:p-6 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-neutral-950 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8 z-10 animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-400 mb-2">
            <BookOpen className="h-3.5 w-3.5" /> 2026 Master Wholesale Catalog
          </div>
          <h3 className="text-2xl font-black text-white">Digital Lookbook & Fabric Swatches</h3>
          <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
            Download our curated 76-page wholesale lookbook featuring over 5,000 styles across all 9 occasions, fabric specifications, and confidential tier price breaks.
          </p>
        </div>

        {/* Lookbook preview cards */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {OCCASIONS.filter(o => o.image).slice(0, 4).map((occ) => (
            <div key={occ.id} className="relative h-28 rounded-2xl overflow-hidden border border-white/10">
              <img src={occ.image} alt={occ.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <span className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white truncate">
                {occ.name}
              </span>
            </div>
          ))}
        </div>

        {/* Feature inclusions */}
        <div className="mt-6 space-y-2 rounded-2xl bg-neutral-900 p-4 text-xs text-neutral-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>Complete size ratio charts (Carton Breakdown)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>Fabric GSM certifications & Color Fastness ratings</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>Private Labeling, Neck Tag & Polybag Customization guides</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-400 py-3 text-xs font-black text-black transition shadow-lg cursor-pointer"
          >
            <Download className="h-4 w-4" /> Download PDF Lookbook (14 MB)
          </button>

          <a
            href="https://wa.me/919876543210?text=Hi%20THREADHUB,%20please%20send%20the%202026%20Digital%20Lookbook%20PDF%20to%20my%20WhatsApp."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500 hover:text-black py-3 text-xs font-bold text-emerald-400 transition"
          >
            <MessageCircle className="h-4 w-4" /> Receive on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

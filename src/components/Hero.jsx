import React from 'react';
import { ArrowRight, Calculator, Download, ShieldCheck, Sparkles, Building2, Truck, Star } from 'lucide-react';

export default function Hero({ onOpenLookbook, onSelectOccasion }) {
  const occasionPills = [
    { id: "wedding", label: "💍 Wedding & Bridal", color: "from-rose-500/20 to-amber-500/20" },
    { id: "festive", label: "🪔 Festive & Ethnic", color: "from-amber-500/20 to-orange-500/20" },
    { id: "corporate", label: "👔 Corporate & Office", color: "from-blue-500/20 to-indigo-500/20" },
    { id: "casual", label: "⚡ 240 GSM Streetwear", color: "from-purple-500/20 to-pink-500/20" },
    { id: "party", label: "🍸 Party & Nightwear", color: "from-fuchsia-500/20 to-rose-500/20" },
    { id: "athleisure", label: "🏃 Performance Gym", color: "from-emerald-500/20 to-teal-500/20" },
    { id: "resort", label: "🏖️ Resort & Holiday", color: "from-cyan-500/20 to-sky-500/20" },
    { id: "seasonal", label: "❄️ Winter Fleece", color: "from-slate-500/20 to-zinc-500/20" },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-24 pb-16">
      {/* Background with multiple gradient overlays and fashion backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transition duration-1000"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2200&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/15 via-transparent to-transparent pointer-events-none" />

      {/* Decorative ambient lighting spheres */}
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-orange-600/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Tag & Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" /> India's Premier B2B Apparel Manufacturer
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> GST Invoiced • Zero Middlemen
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-5xl text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Wholesale Clothes For{" "}
          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
            Every Occasion.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-3xl text-base sm:text-xl leading-relaxed text-neutral-300 font-normal">
          From grand wedding lehengas and festive Chikankari sets to 240 GSM streetwear, corporate blazers, and luxury resort wear. Direct factory supply for boutiques, retailers, resellers & e-commerce brands with 50% to 75% profit margins.
        </p>

        {/* Interactive Occasion Quick Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 mr-2 flex items-center gap-1">
            Filter Occasion:
          </span>
          {occasionPills.map((pill) => (
            <button
              key={pill.id}
              onClick={() => {
                onSelectOccasion(pill.id);
                const el = document.getElementById("catalog");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full border border-white/15 bg-neutral-900/80 hover:border-orange-500/70 hover:bg-orange-500/15 px-3.5 py-1.5 text-xs font-semibold text-neutral-200 hover:text-white transition duration-200 cursor-pointer shadow-sm hover:scale-105"
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Primary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href="#catalog"
            className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-center text-sm font-black text-black transition duration-300 hover:scale-105 hover:from-orange-400 hover:to-amber-400 shadow-xl shadow-orange-500/20"
          >
            <span>Explore Occasion Catalog</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#calculator"
            className="flex items-center justify-center gap-2 rounded-full border border-orange-500/40 bg-neutral-900/80 px-7 py-4 text-center text-sm font-bold text-orange-300 transition duration-300 hover:border-orange-400 hover:bg-neutral-800"
          >
            <Calculator className="h-4 w-4 text-orange-400" />
            <span>Calculate Bulk Profit</span>
          </a>

          <button
            onClick={onOpenLookbook}
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-center text-sm font-bold text-neutral-200 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            <Download className="h-4 w-4 text-neutral-400" />
            <span>Download 2026 Lookbook</span>
          </button>
        </div>

        {/* Verified Wholesale Trust Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-white">5,000+</span>
              <span className="text-xs font-bold text-orange-400">Styles</span>
            </div>
            <p className="mt-1 text-xs text-neutral-400">Ready-to-Ship & Custom Occasion wear</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-white">3,200+</span>
              <span className="text-xs font-bold text-orange-400">Retailers</span>
            </div>
            <p className="mt-1 text-xs text-neutral-400">Boutiques, MBOs & online store owners</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-white">15 Pcs</span>
              <span className="text-xs font-bold text-orange-400">Low MOQ</span>
            </div>
            <p className="mt-1 text-xs text-neutral-400">Mix & match sizes with flexible packs</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-white">24-48h</span>
              <span className="text-xs font-bold text-orange-400">Dispatch</span>
            </div>
            <p className="mt-1 text-xs text-neutral-400">Fast cargo transit across 19,000+ PIN codes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

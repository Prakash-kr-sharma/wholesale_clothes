import React from 'react';
import { OCCASIONS } from '../data/wholesaleData';
import { ArrowRight, Sparkles, TrendingUp, Layers } from 'lucide-react';

export default function OccasionGrid({ onSelectOccasion }) {
  // Exclude 'all' for the showcase cards
  const displayOccasions = OCCASIONS.filter(item => item.id !== 'all');

  return (
    <section id="occasions" className="bg-neutral-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-white relative">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">
              <Sparkles className="h-3.5 w-3.5" /> Curated Occasion Collections
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Clothes Engineered for <br />
              <span className="text-orange-500">Every Single Occasion.</span>
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm sm:text-base leading-relaxed">
            Stock your boutique or retail racks with trend-tested wholesale collections designed specifically for India's biggest life events and everyday lifestyles.
          </p>
        </div>

        {/* Grid of Occasion Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayOccasions.map((occ, idx) => (
            <div
              key={occ.id}
              onClick={() => {
                onSelectOccasion(occ.id);
                const el = document.getElementById("catalog");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Background Image */}
              <img
                src={occ.image}
                alt={occ.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-85"
                loading="lazy"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition duration-300" />

              {/* Card Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[11px] font-bold tracking-wide text-orange-400 border border-orange-500/30">
                  {occ.itemCount}
                </span>
                <span className="rounded-full bg-emerald-500/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-extrabold text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> {occ.avgMargin} Margin
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 p-6 text-white w-full">
                <p className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-1">
                  Occasion 0{idx + 1}
                </p>
                <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-orange-400 transition-colors">
                  {occ.name}
                </h3>
                <p className="mt-2 text-xs text-neutral-300 line-clamp-2">
                  {occ.tagline}
                </p>

                {/* Fabric Specialization Tag */}
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <Layers className="h-3 w-3 text-orange-400" />
                  <span className="truncate">{occ.popularFabrics}</span>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-orange-400 group-hover:text-orange-300">
                  <span>Browse Wholesale Lots</span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-orange-500 group-hover:text-black transition">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner below occasions */}
        <div className="mt-12 rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-950/40 via-neutral-900 to-amber-950/30 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-black font-black text-xl">
              %
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need Custom Garments for an Upcoming Festive or Wedding Season?</h4>
              <p className="text-xs text-neutral-400">We manufacture customized batch orders with 3-week lead time and sample approval.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-orange-500 hover:bg-orange-400 px-6 py-2.5 text-xs font-bold text-black transition"
          >
            Submit Custom Occasion RFQ
          </a>
        </div>
      </div>
    </section>
  );
}

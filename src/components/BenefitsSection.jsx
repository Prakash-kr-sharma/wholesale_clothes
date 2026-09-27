import React from 'react';
import { WHOLESALE_BENEFITS } from '../data/wholesaleData';
import { ShieldCheck, Truck, Factory, Sparkles, Tag, CheckCircle2 } from 'lucide-react';

export default function BenefitsSection({ onOpenSampleKit }) {
  return (
    <section id="about" className="bg-neutral-950 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
            <Factory className="h-3.5 w-3.5" /> Built for Retailers & Boutiques
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            More Than Clothes. <br />
            <span className="text-orange-500">We Power Retail Empires.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Eliminate unreliable brokers, unpredictable delivery delays, and inconsistent stitching quality. Partner directly with an integrated clothing manufacturer.
          </p>
        </div>

        {/* 6 Feature Advantage Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHOLESALE_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-white/10 bg-neutral-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-neutral-900"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-[11px] font-bold text-orange-400">
                  {benefit.tag}
                </span>
                <span className="text-sm font-black text-neutral-600 font-mono">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-black text-white group-hover:text-orange-400 transition-colors">
                {benefit.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {benefit.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-neutral-500">Wholesale Edge:</span>
                <span className="font-extrabold text-emerald-400">{benefit.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Swatch Guarantee Banner */}
        <div className="mt-16 rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-950/40 via-neutral-900 to-amber-950/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400">
                <CheckCircle2 className="h-3.5 w-3.5" /> 100% Quality Assurance
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Never Order 500 Pieces In The Dark.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Order our physical <strong>Retailer Sample Swatch & Master Fit Box</strong>. Test our 240 GSM collar tension, feel the heavy bridal raw silk embroidery, and inspect the seam density before releasing bulk capital.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenSampleKit}
                className="rounded-full bg-orange-500 hover:bg-orange-400 px-8 py-4 text-xs font-black text-black transition duration-200 shadow-xl cursor-pointer text-center"
              >
                Request 3-Piece Sample Box
              </button>
              <a
                href="#contact"
                className="rounded-full border border-white/20 hover:border-white px-7 py-4 text-xs font-bold text-white transition text-center"
              >
                Book Factory Video Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

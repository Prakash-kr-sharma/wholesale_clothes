import React from 'react';
import { RETAILER_TESTIMONIALS } from '../data/wholesaleData';
import { Star, Quote, Building2, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-neutral-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-white relative border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">
            <Building2 className="h-3.5 w-3.5" /> Verified Retail Partners
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Trusted by <span className="text-orange-500">3,200+ Retailers</span> Across India
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            From high-street boutiques in Bandra to multi-brand apparel distributors in Delhi and Bangalore.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {RETAILER_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-neutral-950 p-8 sm:p-10 flex flex-col justify-between hover:border-orange-500/40 transition duration-300 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-white/5 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-neutral-400 ml-2">5.0 / 5.0</span>
                </div>

                {/* Quote */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-orange-500/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {t.name}
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-orange-400">{t.store}</p>
                    <p className="text-[11px] text-neutral-500">{t.city}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-[11px] font-bold text-orange-400">
                    {t.ordersCount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

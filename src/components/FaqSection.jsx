import React, { useState } from 'react';
import { WHOLESALE_FAQS } from '../data/wholesaleData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="bg-neutral-950 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-white relative border-t border-white/10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">
            <HelpCircle className="h-3.5 w-3.5" /> B2B Trade Policies
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Frequently Asked <span className="text-orange-500">Wholesale Questions</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Everything you need to know about MOQs, ratio packs, private labeling, transport billing, and credit terms.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {WHOLESALE_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-orange-500/50 bg-neutral-900/90 shadow-xl'
                    : 'border-white/10 bg-neutral-900/40 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-orange-500 text-black' : 'text-neutral-400'
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help footer */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-900/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Have a custom question regarding fabric blends or contract manufacturing?</h4>
            <p className="text-xs text-neutral-400">Our wholesale desk is active Monday through Saturday 9:00 AM to 8:30 PM IST.</p>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%20THREADHUB,%20I%20have%20a%20specific%20custom%20garment%20wholesale%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 px-6 py-2.5 text-xs font-bold text-black transition shrink-0"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

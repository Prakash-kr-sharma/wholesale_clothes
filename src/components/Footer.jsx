import React, { useState } from 'react';
import { Sparkles, Mail, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { OCCASIONS } from '../data/wholesaleData';

export default function Footer({ onSelectOccasion }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/10 text-white font-sans pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Stock Drops Subscription */}
        <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-r from-neutral-900 via-neutral-900 to-orange-950/20 p-8 sm:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 mb-2">
              <Sparkles className="h-3 w-3" /> Retailer Weekly Broadcast
            </span>
            <h3 className="text-2xl font-black text-white">
              Get Weekly Fresh Stock & Festival Launch Drops
            </h3>
            <p className="mt-2 text-xs text-neutral-400">
              Receive confidential price lists, new occasion fabric releases, and clearance bulk carton alerts straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 px-5 py-3 text-xs font-bold text-emerald-400">
                <CheckCircle2 className="h-4 w-4" /> You're on the confidential retailer drop list!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Enter store manager email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-2xl bg-neutral-950 border border-white/15 px-4 py-3 text-xs text-white placeholder-neutral-500 focus:border-orange-500 focus:outline-none w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-orange-500 hover:bg-orange-400 px-6 py-3 text-xs font-black text-black transition shadow-lg shrink-0 cursor-pointer"
                >
                  Join Wholesale Alert
                </button>
              </>
            )}
          </form>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-black font-black text-lg">
                TH
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">
                  THREAD<span className="text-orange-500">HUB</span>
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-neutral-400 font-semibold -mt-1">
                  Wholesale Fashion Co.
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              India's premier B2B clothing manufacturer and wholesale distribution network. Supplying curated fashion for wedding, festive, corporate, casual, and partywear to 3,200+ retailers nationwide.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <p>🏭 Central Mill Hub: Surat Textile Park-2, Ring Road, Surat</p>
              <p>🏢 North India Trade Center: Okhla Phase 1, New Delhi</p>
              <p>🧶 Knitwear Factory: Cotton Market, Tirupur, TN</p>
            </div>
          </div>

          {/* Occasions Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Occasions Directory
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {OCCASIONS.filter(o => o.id !== 'all').map((occ) => (
                <li key={occ.id}>
                  <button
                    onClick={() => {
                      onSelectOccasion(occ.id);
                      const el = document.getElementById("catalog");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-white transition text-left cursor-pointer"
                  >
                    {occ.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* B2B Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Wholesale Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#about" className="hover:text-white transition">Direct Mill Sourcing</a></li>
              <li><a href="#about" className="hover:text-white transition">Private Label & Neck Tags</a></li>
              <li><a href="#calculator" className="hover:text-white transition">Margin Simulator</a></li>
              <li><a href="#about" className="hover:text-white transition">Retailer Sample Swatch Boxes</a></li>
              <li><a href="#faq" className="hover:text-white transition">Carton Size Ratio Packs</a></li>
              <li><a href="#warehouses" className="hover:text-white transition">Showroom In-Person Buying</a></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              B2B Compliance
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <p className="font-semibold text-neutral-300">GST Registration:</p>
                <p className="font-mono text-[11px] text-orange-400">24AAACT1984Q1Z8</p>
                <p className="text-[10px] text-neutral-500">100% Tax Invoiced with ITC</p>
              </div>
              <p className="text-[11px]">MSME Reg: UDYAM-GJ-22-004921</p>
              <p className="text-[11px]">IEC Code: 0309018442</p>
              <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Bureau of Indian Standards (BIS) Certified
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} THREADHUB Wholesale Fashion Co. All rights reserved. Strictly B2B Wholesale Trade.</p>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-neutral-400 transition">Wholesale Terms</a>
            <span>•</span>
            <a href="#faq" className="hover:text-neutral-400 transition">Defect Replacement Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-neutral-400 transition">B2B Partner Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

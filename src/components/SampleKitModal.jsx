import React, { useState } from 'react';
import { X, CheckCircle2, Package, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { OCCASIONS, WHOLESALE_PRODUCTS } from '../data/wholesaleData';

export default function SampleKitModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedOccasion, setSelectedOccasion] = useState('casual');
  const [storeName, setStoreName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [city, setCity] = useState('');
  const [ordered, setOrdered] = useState(false);

  const occasionOptions = OCCASIONS.filter(o => o.id !== 'all');

  const handleOrderSample = (e) => {
    e.preventDefault();
    setOrdered(true);
  };

  const handleWhatsAppSample = () => {
    const text = `Hi THREADHUB Wholesale, I want to order the Retailer Quality Sample Box (3 pieces):
• Store/Brand: ${storeName || 'New Boutique'}
• City: ${city || 'India'}
• Phone: ${contactNumber}
• Selected Occasion: ${selectedOccasion.toUpperCase()}
Please send payment link (₹999 refundable against first bulk order) and dispatch details.`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 sm:p-6 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-neutral-950 border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8 z-10 animate-in fade-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {ordered ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-black text-white">Sample Box Request Received!</h3>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              Our dispatch department is curating your 3-piece sample kit for <strong className="text-orange-400 uppercase">{selectedOccasion}</strong> with complete fabric swatch rings.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppSample}
                className="rounded-full bg-emerald-500 hover:bg-emerald-400 px-6 py-3 text-xs font-bold text-black flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="h-4 w-4" /> Finalize Dispatch on WhatsApp
              </button>
              <button
                onClick={onClose}
                className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold text-neutral-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleOrderSample} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-400 mb-2">
                <Package className="h-3.5 w-3.5" /> 100% Refundable Sample Kit
              </div>
              <h3 className="text-2xl font-black text-white">Order Retailer Quality Sample Box</h3>
              <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                Receive 3 finished production garments across your chosen occasion + fabric swatch book + size chart rings. Test quality before booking 500 pieces.
              </p>
            </div>

            {/* Refundable Policy Alert */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 flex items-start gap-2.5 text-xs text-neutral-200">
              <Sparkles className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>100% Capital Refund Guarantee:</strong> The sample box fee (₹999) is fully credited onto your first bulk order of 50+ pieces.
              </span>
            </div>

            {/* Occasion Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                Select Occasion for Sample Box:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {occasionOptions.map((occ) => (
                  <button
                    key={occ.id}
                    type="button"
                    onClick={() => setSelectedOccasion(occ.id)}
                    className={`rounded-xl p-2.5 text-xs font-bold text-left transition border ${
                      selectedOccasion === occ.id
                        ? 'bg-orange-500 text-black border-orange-400'
                        : 'bg-neutral-900 text-neutral-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {occ.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Details Fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Retail Store / Boutique Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amber Chic Store"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    WhatsApp Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Shipping City:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bangalore"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full rounded-2xl bg-orange-500 hover:bg-orange-400 py-3 text-xs font-black text-black transition shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Sample Box (Dispatched in 24 Hrs)</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleWhatsAppSample}
                className="w-full rounded-2xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500 hover:text-black py-2.5 text-xs font-bold text-emerald-400 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" /> Fast Track Sample Order via WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

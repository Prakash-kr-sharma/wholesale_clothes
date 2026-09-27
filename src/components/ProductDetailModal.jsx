import React, { useState } from 'react';
import { X, Check, ShoppingBag, MessageCircle, Layers, Tag, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(product.moq);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);

  // Compute unit price based on quantity
  let currentTierPrice = product.wholesalePrice;
  if (product.tierPricing && product.tierPricing.length > 0) {
    if (quantity >= 300) {
      currentTierPrice = product.tierPricing[product.tierPricing.length - 1].price;
    } else if (quantity >= 100 && product.tierPricing.length > 1) {
      currentTierPrice = product.tierPricing[1].price;
    }
  }

  const batchTotal = currentTierPrice * quantity;
  const retailProfit = (product.retailPrice - currentTierPrice) * quantity;
  const marginPercent = Math.round(((product.retailPrice - currentTierPrice) / product.retailPrice) * 100);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const getWhatsAppInquiryUrl = () => {
    const text = `Hi THREADHUB Wholesale, I want to place an order for:
Product: ${product.name} (ID: ${product.id})
Occasion: ${product.occasion.toUpperCase()}
Quantity: ${quantity} pcs
Target Rate: ₹${currentTierPrice}/pc
Estimated Batch Investment: ₹${batchTotal.toLocaleString('en-IN')}
Please share color shade card & dispatch timeline.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 sm:p-6 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-neutral-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl text-white my-8 z-10 animate-in fade-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 border border-white/20 text-neutral-300 hover:text-white hover:bg-neutral-800 transition"
          aria-label="Close Modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image & Badges */}
          <div className="relative h-80 md:h-full min-h-[380px] bg-neutral-900 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/30" />

            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-black text-black uppercase tracking-wider shadow-lg">
                {product.badge}
              </span>
              <span className="rounded-full bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-neutral-200 border border-white/10">
                {product.category} • {product.occasion.toUpperCase()}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 p-3 flex items-center justify-between text-xs">
              <span className="text-neutral-400">Retail MSRP: <strong className="text-white">₹{product.retailPrice}</strong></span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> {marginPercent}% Gross Margin
              </span>
            </div>
          </div>

          {/* Right Column: Specs, Tiers, and Cart action */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-orange-400 font-bold">
                Occasion: {product.occasion.toUpperCase()} COLLECTION
              </p>
              <h3 className="mt-1 text-2xl font-black text-white leading-tight">
                {product.name}
              </h3>
              <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications */}
              <div className="mt-4 rounded-2xl bg-neutral-900 border border-white/10 p-4 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Fabric Composition:</span>
                  <strong className="text-white">{product.fabric}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">GSM / Density:</span>
                  <strong className="text-orange-400">{product.gsm}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Available Sizes:</span>
                  <strong className="text-neutral-200">{product.sizes.join(', ')}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Minimum Order (MOQ):</span>
                  <strong className="text-white">{product.moq} pieces</strong>
                </div>
              </div>

              {/* Volume Tier Matrix Table */}
              <div className="mt-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-orange-400 mb-2">
                  Volume Tier Wholesale Pricing:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {product.tierPricing.map((tier, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/10 bg-neutral-900/60 p-2 text-center"
                    >
                      <p className="text-[10px] text-neutral-400">{tier.qty}</p>
                      <p className="text-sm font-black text-orange-400 mt-0.5">₹{tier.price}/pc</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Swatch Picker */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-300">Available Colorways:</span>
                <div className="flex items-center gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(c)}
                      className={`h-5 w-5 rounded-full border-2 transition ${
                        selectedColor === c ? 'border-orange-500 scale-125' : 'border-neutral-700'
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity Picker & Batch Calculation */}
              <div className="mt-5 rounded-2xl bg-neutral-900 border border-orange-500/20 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-neutral-300">Select Batch Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(product.moq, quantity - 10))}
                      className="h-7 w-7 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-bold flex items-center justify-center text-sm"
                    >
                      -
                    </button>
                    <span className="font-mono font-black text-orange-400 px-2 text-sm">
                      {quantity} pcs
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 10)}
                      className="h-7 w-7 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-bold flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-neutral-400">Total Wholesale: </span>
                    <strong className="text-white text-sm">₹{batchTotal.toLocaleString('en-IN')}</strong>
                  </div>
                  <div>
                    <span className="text-neutral-400">Est. Store Profit: </span>
                    <strong className="text-emerald-400 text-sm">₹{retailProfit.toLocaleString('en-IN')}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleAdd}
                className={`flex items-center justify-center gap-2 rounded-2xl py-3 px-4 text-xs font-black transition duration-200 cursor-pointer ${
                  added ? 'bg-emerald-500 text-black' : 'bg-orange-500 text-black hover:bg-orange-400'
                }`}
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4" /> Added {quantity} Pcs to RFQ
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" /> Add to Bulk RFQ ({quantity} pcs)
                  </>
                )}
              </button>

              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500 hover:text-black py-3 px-4 text-xs font-bold text-emerald-400 transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

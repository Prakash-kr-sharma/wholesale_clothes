import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, MessageCircle, ArrowRight, DollarSign, Package } from 'lucide-react';
import { WHOLESALE_PRODUCTS } from '../data/wholesaleData';

export default function BulkMarginCalculator({ onAddToCart }) {
  // Select default product
  const [selectedProductId, setSelectedProductId] = useState(WHOLESALE_PRODUCTS[0].id);
  const [quantity, setQuantity] = useState(100);
  const [sellingPrice, setSellingPrice] = useState(WHOLESALE_PRODUCTS[0].retailPrice);

  const selectedProduct = WHOLESALE_PRODUCTS.find((p) => p.id === selectedProductId) || WHOLESALE_PRODUCTS[0];

  // Calculate volume discount based on quantity
  let discountMultiplier = 1.0;
  if (quantity >= 500) {
    discountMultiplier = 0.82; // 18% off
  } else if (quantity >= 200) {
    discountMultiplier = 0.88; // 12% off
  } else if (quantity >= 100) {
    discountMultiplier = 0.93; // 7% off
  }

  const effectiveWholesaleRate = Math.round(selectedProduct.wholesalePrice * discountMultiplier);
  const totalWholesaleInvestment = effectiveWholesaleRate * quantity;
  const totalRetailRevenue = sellingPrice * quantity;
  const netProfit = totalRetailRevenue - totalWholesaleInvestment;
  const profitMarginPercent = totalRetailRevenue > 0 ? Math.round((netProfit / totalRetailRevenue) * 100) : 0;

  const handleProductChange = (productId) => {
    setSelectedProductId(productId);
    const prod = WHOLESALE_PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setSellingPrice(prod.retailPrice);
      setQuantity(Math.max(prod.moq, 50));
    }
  };

  const getWhatsAppDealUrl = () => {
    const text = `Hello THREADHUB Wholesale, I used your Bulk Profit Calculator and want to lock in a wholesale batch:
Product: ${selectedProduct.name}
Occasion: ${selectedProduct.occasion.toUpperCase()}
Quantity: ${quantity} pcs
Estimated Wholesale Rate: ₹${effectiveWholesaleRate}/pc (Total: ₹${totalWholesaleInvestment.toLocaleString('en-IN')})
Please share pro-forma invoice and delivery timeline.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="bg-neutral-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-white relative border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">
            <Calculator className="h-3.5 w-3.5" /> Retailer Margin Simulator
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Wholesale Bulk <span className="text-orange-500">Profit Calculator</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            See exactly how much profit your store will generate before placing your wholesale batch order. Higher quantities unlock factory direct volume rebates.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="rounded-3xl border border-white/10 bg-neutral-950 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Controls (Inputs & Sliders) - 7 cols */}
            <div className="lg:col-span-7 space-y-6">
              {/* Product Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
                  Select Garment Style & Occasion:
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => handleProductChange(e.target.value)}
                  className="w-full rounded-2xl bg-neutral-900 border border-white/15 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none cursor-pointer"
                >
                  {WHOLESALE_PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      [{p.occasion.toUpperCase()}] {p.name} — Base ₹{p.wholesalePrice}/pc (MOQ: {p.moq})
                    </option>
                  ))}
                </select>
                <div className="mt-2 flex items-center justify-between text-xs text-neutral-400">
                  <span>Fabric: <strong className="text-neutral-200">{selectedProduct.fabric}</strong></span>
                  <span>Category: <strong className="text-neutral-200">{selectedProduct.category}</strong></span>
                </div>
              </div>

              {/* Quantity Slider */}
              <div className="bg-neutral-900/70 p-5 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Order Quantity (Pieces):
                  </label>
                  <span className="text-xl font-black text-orange-400">
                    {quantity} <span className="text-xs font-normal text-neutral-400">pcs</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={selectedProduct.moq}
                  max="1500"
                  step="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-2 bg-neutral-800 rounded-lg"
                />
                <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>MOQ: {selectedProduct.moq} pcs</span>
                  <span>100 pcs (-7%)</span>
                  <span>200 pcs (-12%)</span>
                  <span className="text-orange-400 font-bold">500+ pcs (-18% Factory Direct)</span>
                </div>
              </div>

              {/* Retail Selling Price Slider */}
              <div className="bg-neutral-900/70 p-5 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                    Your Planned Retail Selling Price (MSRP):
                  </label>
                  <span className="text-xl font-black text-emerald-400">
                    ₹{sellingPrice} <span className="text-xs font-normal text-neutral-400">/ pc</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={Math.round(selectedProduct.wholesalePrice * 1.2)}
                  max={Math.round(selectedProduct.retailPrice * 1.5)}
                  step="50"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-neutral-800 rounded-lg"
                />
                <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Discounted Sale: ₹{Math.round(selectedProduct.wholesalePrice * 1.3)}</span>
                  <span>Suggested Catalog MSRP: ₹{selectedProduct.retailPrice}</span>
                  <span className="text-emerald-400 font-bold">Premium Boutique: ₹{Math.round(selectedProduct.retailPrice * 1.3)}</span>
                </div>
              </div>

              {/* Effective Rates Summary */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-[11px] text-neutral-400">Base Wholesale Price</p>
                  <p className="text-base font-bold text-neutral-300">₹{selectedProduct.wholesalePrice} / pc</p>
                </div>
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <p className="text-[11px] text-orange-400 font-semibold">Tier Rate Applied ({quantity} pcs)</p>
                  <p className="text-base font-black text-orange-400">₹{effectiveWholesaleRate} / pc</p>
                </div>
              </div>
            </div>

            {/* Right Display (Profit Dashboard Card) - 5 cols */}
            <div className="lg:col-span-5 rounded-3xl border border-orange-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-orange-950/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Batch Profit Summary
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-extrabold text-emerald-400 border border-emerald-500/30">
                    <TrendingUp className="h-3 w-3" /> {profitMarginPercent}% Margin
                  </span>
                </div>

                {/* Big Profit Highlight */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    Your Estimated Net Profit:
                  </p>
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 mt-1">
                    ₹{netProfit.toLocaleString('en-IN')}
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    (₹{(sellingPrice - effectiveWholesaleRate).toLocaleString('en-IN')} net margin per garment piece)
                  </p>
                </div>

                {/* Investment Breakdown */}
                <div className="space-y-3 border-t border-white/10 pt-4 text-xs">
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>Wholesale Batch Cost ({quantity} pcs):</span>
                    <strong className="text-white text-sm">₹{totalWholesaleInvestment.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>Expected Retail Revenue:</span>
                    <strong className="text-emerald-400 text-sm">₹{totalRetailRevenue.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>GST (5% ITC Claimable):</span>
                    <span className="text-neutral-400">₹{Math.round(totalWholesaleInvestment * 0.05).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => onAddToCart(selectedProduct, quantity)}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-400 py-3.5 px-4 text-xs font-black text-black transition duration-200 shadow-lg cursor-pointer"
                >
                  <Package className="h-4 w-4" />
                  Add This Batch to Bulk RFQ ({quantity} pcs)
                </button>

                <a
                  href={getWhatsAppDealUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500 hover:text-black py-3 px-4 text-xs font-bold text-emerald-400 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  Lock In Tier Price on WhatsApp
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useMemo } from 'react';
import { OCCASIONS, WHOLESALE_PRODUCTS } from '../data/wholesaleData';
import { 
  Search, SlidersHorizontal, Eye, ShoppingBag, MessageCircle, 
  Sparkles, Check, ArrowUpDown, Tag, Layers, TrendingUp 
} from 'lucide-react';

export default function WholesaleCatalog({ 
  selectedOccasion, 
  setSelectedOccasion, 
  onOpenProductModal, 
  onAddToCart 
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [addedItemIds, setAddedItemIds] = useState(new Set());

  const categories = ['All', 'Men', 'Women', 'Kids', 'Unisex'];

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return WHOLESALE_PRODUCTS.filter((prod) => {
      // Occasion filter
      const matchOccasion = selectedOccasion === 'all' || prod.occasion === selectedOccasion;
      // Category filter
      const matchCategory = selectedCategory === 'All' || prod.category.toLowerCase() === selectedCategory.toLowerCase();
      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        prod.name.toLowerCase().includes(q) ||
        prod.fabric.toLowerCase().includes(q) ||
        prod.occasion.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q);

      return matchOccasion && matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.wholesalePrice - b.wholesalePrice;
      if (sortBy === 'price-high') return b.wholesalePrice - a.wholesalePrice;
      if (sortBy === 'margin') {
        const marginA = ((a.retailPrice - a.wholesalePrice) / a.retailPrice) * 100;
        const marginB = ((b.retailPrice - b.wholesalePrice) / b.retailPrice) * 100;
        return marginB - marginA;
      }
      if (sortBy === 'moq-low') return a.moq - b.moq;
      // Default: featured by rating/reviews
      return b.rating * b.reviewsCount - a.rating * a.reviewsCount;
    });
  }, [selectedOccasion, selectedCategory, searchQuery, sortBy]);

  const handleQuickAdd = (product, e) => {
    e.stopPropagation();
    onAddToCart(product, product.moq);
    setAddedItemIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItemIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1800);
  };

  const getWhatsAppInquiryUrl = (product) => {
    const text = `Hi THREADHUB Wholesale, I want to inquire about bulk ordering:
Product: ${product.name} (ID: ${product.id})
Occasion: ${product.occasion.toUpperCase()}
Wholesale Rate: ₹${product.wholesalePrice}/pc
MOQ: ${product.moq} pcs
Please share stock availability and color shade card.`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="catalog" className="bg-neutral-950 py-20 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">
            <Sparkles className="h-3.5 w-3.5" /> B2B Factory Inventory
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Wholesale Catalog & <span className="text-orange-500">Tier Pricing</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Select an occasion, view minimum order quantities (MOQ), check tier discounts, and request immediate pro-forma invoicing.
          </p>
        </div>

        {/* Occasion Filter Tabs Bar */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {OCCASIONS.map((occ) => (
            <button
              key={occ.id}
              onClick={() => setSelectedOccasion(occ.id)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                selectedOccasion === occ.id
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-white/10'
              }`}
            >
              {occ.name}
            </button>
          ))}
        </div>

        {/* Search, Category, and Sorting Controls */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-neutral-900/80 p-4 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search fabric, style name, or occasion..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl bg-neutral-950 border border-white/10 pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-orange-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs (Men, Women, Kids, Unisex) */}
          <div className="flex items-center gap-1.5 bg-neutral-950 p-1 rounded-xl border border-white/10 w-full sm:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-xs text-neutral-400 hidden sm:inline flex items-center gap-1">
              <ArrowUpDown className="h-3 w-3" /> Sort by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl bg-neutral-950 border border-white/10 px-3 py-2 text-xs text-neutral-200 focus:border-orange-500 focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured / Top Selling</option>
              <option value="price-low">Wholesale: Low to High</option>
              <option value="price-high">Wholesale: High to Low</option>
              <option value="margin">Highest Retail Profit Margin %</option>
              <option value="moq-low">Lowest MOQ First</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-neutral-400">
          <p>
            Showing <span className="font-bold text-white">{filteredProducts.length}</span> wholesale designs
            {selectedOccasion !== 'all' && (
              <span> for <span className="text-orange-400 font-semibold uppercase">{selectedOccasion}</span></span>
            )}
          </p>
          {(selectedOccasion !== 'all' || selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedOccasion('all');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-orange-400 hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-12 text-center my-8">
            <p className="text-lg font-bold text-neutral-300">No wholesale items match your exact filter criteria.</p>
            <p className="mt-2 text-xs text-neutral-500">Try switching the occasion or resetting your search keywords.</p>
            <button
              onClick={() => {
                setSelectedOccasion('all');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-6 rounded-full bg-orange-500 px-6 py-2.5 text-xs font-bold text-black"
            >
              Show All Occasion Clothes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const marginPercent = Math.round(
                ((product.retailPrice - product.wholesalePrice) / product.retailPrice) * 100
              );
              const isAdded = addedItemIds.has(product.id);

              return (
                <div
                  key={product.id}
                  onClick={() => onOpenProductModal(product)}
                  className="group rounded-3xl border border-white/10 bg-neutral-900/90 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/15 cursor-pointer flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative h-72 w-full overflow-hidden bg-neutral-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/40" />

                    {/* Badge top-left */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <span className="rounded-full bg-orange-500 px-2.5 py-0.5 text-[11px] font-black text-black uppercase tracking-wider shadow">
                        {product.badge}
                      </span>
                      <span className="rounded-full bg-black/70 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-neutral-200 border border-white/10">
                        {product.category} • {product.occasion.toUpperCase()}
                      </span>
                    </div>

                    {/* Margin Badge top-right */}
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-emerald-500/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-black text-black flex items-center gap-1 shadow">
                        <TrendingUp className="h-3 w-3" /> {marginPercent}% Margin
                      </span>
                    </div>

                    {/* MOQ Badge bottom-left */}
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded-full bg-black/80 backdrop-blur-md border border-orange-500/40 px-3 py-1 text-[11px] font-bold text-orange-400">
                        MOQ: {product.moq} Pcs
                      </span>
                    </div>

                    {/* Quick view button overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                      <span className="rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-xs font-bold text-black flex items-center gap-1.5 shadow-lg">
                        <Eye className="h-3.5 w-3.5" /> View Tier Pricing & Specs
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-lg font-black tracking-tight text-white group-hover:text-orange-400 transition-colors line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Fabric & GSM details */}
                      <div className="mt-2 flex items-center gap-2 text-xs text-neutral-400">
                        <Layers className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                        <span className="truncate">{product.fabric}</span>
                        <span className="text-neutral-600">•</span>
                        <span className="font-semibold text-neutral-300 shrink-0">{product.gsm}</span>
                      </div>

                      {/* Color dots & size info */}
                      <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] text-neutral-500">Shades:</span>
                          <div className="flex items-center -space-x-1">
                            {product.colors.slice(0, 4).map((c, i) => (
                              <span
                                key={i}
                                className="h-3.5 w-3.5 rounded-full border border-black"
                                style={{ backgroundColor: c }}
                              />
                            ))}
                            {product.colors.length > 4 && (
                              <span className="text-[10px] text-neutral-400 pl-1.5 font-bold">
                                +{product.colors.length - 4}
                              </span>
                            )}
                          </div>
                        </div>

                        <span className="text-[11px] text-neutral-400 font-mono">
                          Sizes: {product.sizes.join(', ')}
                        </span>
                      </div>
                    </div>

                    {/* Price and Profit Section */}
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-orange-400 font-bold">
                            Wholesale Rate
                          </p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-white">
                              ₹{product.wholesalePrice}
                            </span>
                            <span className="text-xs text-neutral-400">/ pc</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-[11px] uppercase tracking-wider text-neutral-400">
                            Suggested Retail (MSRP)
                          </p>
                          <div className="flex items-baseline justify-end gap-1.5">
                            <span className="text-sm font-semibold text-neutral-400 line-through">
                              ₹{product.retailPrice}
                            </span>
                            <span className="text-xs font-bold text-emerald-400">
                              +₹{product.retailPrice - product.wholesalePrice} profit
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Tier pricing preview snippet */}
                      <div className="mt-3 rounded-xl bg-white/[0.03] border border-white/5 p-2 flex items-center justify-between text-[11px] text-neutral-300">
                        <span className="text-neutral-400">500+ pcs volume tier:</span>
                        <span className="font-bold text-orange-400">
                          ₹{product.tierPricing[product.tierPricing.length - 1].price}/pc
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <button
                          onClick={(e) => handleQuickAdd(product, e)}
                          className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold transition duration-200 cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-500 text-black'
                              : 'bg-orange-500 text-black hover:bg-orange-400'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="h-3.5 w-3.5" /> Added {product.moq} Pcs
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="h-3.5 w-3.5" /> Add MOQ ({product.moq})
                            </>
                          )}
                        </button>

                        <a
                          href={getWhatsAppInquiryUrl(product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-2.5 text-xs font-bold text-emerald-400 hover:bg-emerald-500 hover:text-black transition"
                        >
                          <MessageCircle className="h-3.5 w-3.5" /> WhatsApp RFQ
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

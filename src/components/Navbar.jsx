import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, Sparkles, MessageCircle, FileText, ChevronRight } from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenSampleKit,
  isAdminLoggedIn,
  onOpenAdminLogin,
  onOpenAdminDashboard
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Occasions", href: "#occasions" },
    { label: "Wholesale Catalog", href: "#catalog" },
    { label: "Profit Calculator", href: "#calculator" },
    { label: "Why Choose Us", href: "#about" },
    { label: "Buyer Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Warehouses", href: "#warehouses" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-neutral-950 via-orange-950 to-neutral-950 border-b border-orange-500/20 px-4 py-2 text-xs text-orange-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/20 px-2 py-0.5 font-bold text-orange-400">
              <Sparkles className="h-3 w-3" /> FACTORY DIRECT
            </span>
            <span className="hidden sm:inline">Pan-India Express Bulk Delivery</span>
            <span className="hidden md:inline">• 100% GST Invoicing & ITC Credit</span>
            <span className="hidden lg:inline">• Private Label & Custom Neck Tags Available</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://wa.me/919876543210?text=Hello%20THREADHUB,%20I%20am%20a%20retailer%20inquiring%20about%20wholesale%20clothing%20catalog."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp B2B Desk
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="tel:+919876543210" className="hidden sm:flex items-center gap-1 text-white/80 hover:text-white">
              <Phone className="h-3 w-3 text-orange-400" /> +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="px-3 pt-3">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-white/10 px-5 py-3 text-white shadow-2xl">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-black font-black text-lg shadow-lg group-hover:scale-105 transition">
              TH
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white">
                THREAD<span className="text-orange-500">HUB</span>
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-widest text-neutral-400 -mt-1 font-semibold">
                Wholesale Fashion Co.
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-neutral-300 hover:text-orange-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Store Admin Portal Trigger */}
            {isAdminLoggedIn ? (
              <button
                onClick={onOpenAdminDashboard}
                className="flex items-center gap-1.5 rounded-full border border-orange-500/60 bg-gradient-to-r from-orange-500/20 to-amber-500/20 px-3.5 py-1.5 text-xs font-bold text-orange-300 hover:border-orange-400 hover:text-white transition shadow-sm"
                title="Open Wholesale ERP Admin Dashboard"
              >
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Admin ERP</span>
              </button>
            ) : (
              <button
                onClick={onOpenAdminLogin}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 hover:border-orange-500/50 hover:bg-neutral-800 px-3 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white transition cursor-pointer"
                title="Store Manager & Wholesale Admin Login"
              >
                <span className="text-[11px] font-bold">Admin Login</span>
              </button>
            )}

            {/* Sample Kit Request Button */}
            <button
              onClick={onOpenSampleKit}
              className="hidden xl:flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1.5 text-xs font-bold text-orange-300 hover:bg-orange-500 hover:text-black transition duration-200"
            >
              <FileText className="h-3.5 w-3.5" />
              Order Sample Kit
            </button>

            {/* Bulk Cart / RFQ Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-400 px-4 py-2 text-xs font-bold text-black transition duration-200 shadow-md hover:scale-105 cursor-pointer"
              aria-label="View Wholesale Cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden md:inline">Bulk RFQ</span>
              {cartCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[11px] font-black text-orange-400 ring-2 ring-orange-500">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden items-center justify-center rounded-lg p-2 text-neutral-300 hover:bg-white/10 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-3 mt-2 rounded-2xl bg-neutral-950/95 border border-white/15 p-5 text-white shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-3">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-2.5 text-sm font-medium text-neutral-200 hover:text-orange-400"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 text-neutral-500" />
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              {isAdminLoggedIn ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdminDashboard();
                  }}
                  className="w-full rounded-xl border border-orange-500 bg-orange-500/20 py-3 text-center text-sm font-bold text-orange-300"
                >
                  ⚡ Open Admin ERP Dashboard
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdminLogin();
                  }}
                  className="w-full rounded-xl border border-white/20 bg-neutral-900 py-3 text-center text-sm font-bold text-neutral-300"
                >
                  🔒 Admin & Store Manager Login
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSampleKit();
                }}
                className="w-full rounded-xl border border-orange-500/50 py-3 text-center text-sm font-bold text-orange-400 bg-orange-500/10"
              >
                Order Retailer Sample Kit
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full rounded-xl bg-orange-500 py-3 text-center text-sm font-bold text-black"
              >
                Become an Approved Buyer
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

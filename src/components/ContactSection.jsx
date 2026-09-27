import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { OCCASIONS } from '../data/wholesaleData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    gstin: '',
    primaryOccasion: 'wedding',
    monthlyVolume: '200-500 pcs',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `New Wholesale Buyer Application:
• Business: ${formData.businessName || 'N/A'}
• Owner: ${formData.contactPerson}
• Phone: ${formData.phone}
• City: ${formData.city}
• GSTIN: ${formData.gstin || 'Unregistered / Retail Trader'}
• Target Occasion: ${formData.primaryOccasion.toUpperCase()}
• Monthly Volume: ${formData.monthlyVolume}
• Notes: ${formData.notes || 'Interested in wholesale prices & catalog'}`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="bg-neutral-950 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-white relative border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
                <Building2 className="h-3.5 w-3.5" /> Direct B2B Accounts Desk
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Become An Approved <br />
                <span className="text-orange-500">Retail Buyer.</span>
              </h2>
              <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
                Unlock wholesale factory rates, custom private labeling, priority transport dispatch, and 30-day revolving credit for established retailers.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 hover:bg-emerald-500/20 transition group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-black">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Instant WhatsApp Wholesale Desk</p>
                  <p className="text-base font-black text-white group-hover:text-emerald-300">+91 98765 43210</p>
                  <p className="text-[11px] text-neutral-400">Available 9:00 AM - 9:00 PM for live catalog & stock queries</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-black">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-400">Direct Factory Hotline</p>
                  <p className="text-base font-black text-white">+91 (0261) 289-4000</p>
                  <p className="text-[11px] text-neutral-400">Surat Mill Head Office & Consignment Dispatch</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-800 text-orange-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">Commercial & Pro-Forma Billing</p>
                  <p className="text-base font-bold text-white">b2b@threadhubwholesale.com</p>
                  <p className="text-[11px] text-neutral-400">Send purchase orders, tender docs, and GST certificates</p>
                </div>
              </div>
            </div>

            {/* Quality Badges */}
            <div className="p-5 rounded-2xl border border-white/10 bg-neutral-900/40 text-xs text-neutral-400 space-y-2">
              <div className="flex items-center gap-2 text-neutral-300 font-semibold">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% Tax Invoiced with GST Input Tax Credit (ITC)
              </div>
              <div className="flex items-center gap-2 text-neutral-300 font-semibold">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Pan-India Cargo Transit Insurance Included
              </div>
              <div className="flex items-center gap-2 text-neutral-300 font-semibold">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Sample Pack Fee Refundable on First Bulk Consignment
              </div>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/15 bg-neutral-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Wholesale Application Received!</h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.contactPerson || 'Partner'}</strong>. Your dedicated B2B Relationship Manager will contact you within 2 business hours with confidential wholesale tier rate cards.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="rounded-full bg-emerald-500 hover:bg-emerald-400 px-6 py-3 text-xs font-bold text-black flex items-center justify-center gap-2 transition"
                    >
                      <MessageCircle className="h-4 w-4" /> Send Details to WhatsApp Now
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-full border border-white/20 hover:border-white px-6 py-3 text-xs font-semibold text-neutral-300 hover:text-white transition"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="text-xl font-black text-white">Wholesale Buyer Registration & RFQ</h3>
                    <p className="text-xs text-neutral-400 mt-1">Fill out this quick form to receive our complete wholesale master price sheet.</p>
                  </div>

                  {/* Row 1: Business Name & Person */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Shop / Boutique / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Royal Fashion Boutique"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full rounded-xl bg-neutral-950 border border-white/10 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full rounded-xl bg-neutral-950 border border-white/10 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl bg-neutral-950 border border-white/10 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Business Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="buyer@yourstore.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-neutral-950 border border-white/10 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 3: City & GSTIN */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        City & State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Surat, Gujarat"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full rounded-xl bg-neutral-950 border border-white/10 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        GSTIN (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 24AAAAA0000A1Z5"
                        value={formData.gstin}
                        onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                        className="w-full rounded-xl bg-neutral-950 border border-white/10 px-4 py-2.5 text-xs text-white uppercase focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 4: Occasion & Monthly Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Primary Occasion Needed
                      </label>
                      <select
                        value={formData.primaryOccasion}
                        onChange={(e) => setFormData({ ...formData, primaryOccasion: e.target.value })}
                        className="w-full rounded-xl bg-neutral-950 border border-white/10 px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none cursor-pointer"
                      >
                        {OCCASIONS.filter(o => o.id !== 'all').map((occ) => (
                          <option key={occ.id} value={occ.id}>
                            {occ.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Expected Monthly Volume
                      </label>
                      <select
                        value={formData.monthlyVolume}
                        onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                        className="w-full rounded-xl bg-neutral-950 border border-white/10 px-3 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none cursor-pointer"
                      >
                        <option value="50-200 pcs">50 - 200 pcs / month (Starter Boutique)</option>
                        <option value="200-500 pcs">200 - 500 pcs / month (Growing Store)</option>
                        <option value="500-1500 pcs">500 - 1,500 pcs / month (Multi-Outlet)</option>
                        <option value="1500+ pcs">1,500+ pcs / month (Distributor / Mill Direct)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special requirements */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Specific Requirements, Fabric Specs, or Private Labeling Details:
                    </label>
                    <textarea
                      rows="3"
                      placeholder="e.g. Looking for 300 pieces of 240 GSM drop shoulder tees with our custom neck label and 50 wedding sherwanis for upcoming wedding season..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-xl bg-neutral-950 border border-white/10 px-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-400 py-3.5 px-6 text-xs font-black text-black transition duration-200 shadow-xl cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    Request Wholesale Price Catalog & Pro-Forma Invoice
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center">
                    🔒 Strictly B2B. We do not sell single pieces to retail consumers. Your business details are kept confidential.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

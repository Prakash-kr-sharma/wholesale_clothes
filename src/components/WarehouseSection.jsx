import React from 'react';
import { WAREHOUSE_LOCATIONS } from '../data/wholesaleData';
import { MapPin, Phone, Clock, User, Building, Navigation } from 'lucide-react';

export default function WarehouseSection() {
  return (
    <section id="warehouses" className="bg-neutral-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-white relative border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-400 mb-3">
              <Building className="h-3.5 w-3.5" /> Physical Showrooms & Hubs
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Visit Our <span className="text-orange-500">Trade Showrooms</span> & Mills
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-sm sm:text-base">
            Touch fabric swatches in person, inspect finished consignments, and discuss custom manufacturing terms with our regional production heads.
          </p>
        </div>

        {/* 3 Warehouse Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {WAREHOUSE_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-neutral-950 p-8 flex flex-col justify-between hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition duration-300"
            >
              <div>
                <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-[11px] font-bold text-orange-400">
                  {loc.type}
                </span>

                <h3 className="mt-5 text-xl font-black text-white">
                  {loc.city}
                </h3>

                <div className="mt-4 space-y-3 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{loc.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 text-neutral-500 shrink-0" />
                    <span>{loc.timing}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <User className="h-4 w-4 text-neutral-500 shrink-0" />
                    <span>{loc.manager}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="font-mono text-emerald-400">{loc.phone}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={`https://wa.me/919876543210?text=Hi%20THREADHUB,%20I%20would%20like%20to%20book%20an%20appointment%20to%20visit%20your%20${encodeURIComponent(loc.city)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-neutral-900 border border-white/10 hover:border-orange-500/50 hover:bg-neutral-800 py-2.5 text-xs font-bold text-neutral-200 hover:text-white transition"
                >
                  <Navigation className="h-3.5 w-3.5 text-orange-400" />
                  Book Showroom Appointment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

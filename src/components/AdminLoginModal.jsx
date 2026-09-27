import React, { useState } from 'react';
import { Lock, Mail, ShieldCheck, X, Sparkles, ArrowRight, Building, Key } from 'lucide-react';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Validate credentials (demo defaults: admin@threadhub.com / admin123 or any non-empty test)
    if (
      (email === 'admin@threadhub.com' && password === 'admin123') ||
      (email === 'admin' && password === 'admin')
    ) {
      setError('');
      localStorage.setItem('threadhub_admin_auth', 'true');
      onLoginSuccess();
    } else {
      setError('Invalid credentials. You can use the Quick Demo Login button below.');
    }
  };

  const handleQuickDemo = () => {
    setEmail('admin@threadhub.com');
    setPassword('admin123');
    setError('');
    localStorage.setItem('threadhub_admin_auth', 'true');
    setTimeout(() => {
      onLoginSuccess();
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans p-4 sm:p-6 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-neutral-950 border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white my-8 z-10 animate-in fade-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white"
          aria-label="Close Admin Login"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-black shadow-lg shadow-orange-500/20 mb-4">
            <Lock className="h-7 w-7" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-400 mb-2">
            <ShieldCheck className="h-3.5 w-3.5" /> Store Manager & ERP Login
          </span>
          <h3 className="text-2xl font-black text-white">Wholesale Admin Portal</h3>
          <p className="mt-1 text-xs text-neutral-400">
            Sign in to access real-time buy/sales data, store employee payroll, inventory, and B2B orders.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              Admin Email / Username
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <input
                type="text"
                required
                placeholder="admin@threadhub.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-neutral-900 border border-white/15 pl-10 pr-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
              Secret Password
            </label>
            <div className="relative">
              <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl bg-neutral-900 border border-white/15 pl-10 pr-4 py-2.5 text-xs text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-400 py-3 text-xs font-black text-black transition duration-200 shadow-xl cursor-pointer"
          >
            <span>Authenticate & Open Dashboard</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Quick Demo One-Click Access */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <button
            type="button"
            onClick={handleQuickDemo}
            className="w-full flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500 hover:text-black py-2.5 text-xs font-bold text-emerald-400 transition"
          >
            <Sparkles className="h-3.5 w-3.5" />
            1-Click Demo Login (Auto-Fill & Access)
          </button>
          <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-neutral-500">
            <span>Demo: <code>admin@threadhub.com</code> / <code>admin123</code></span>
          </div>
        </div>
      </div>
    </div>
  );
}

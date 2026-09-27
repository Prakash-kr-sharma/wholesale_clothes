import React from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, FileText, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export default function BulkCartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const totalPieces = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => {
    // Apply tier discount
    let discount = 1.0;
    if (item.quantity >= 500) discount = 0.82;
    else if (item.quantity >= 200) discount = 0.88;
    else if (item.quantity >= 100) discount = 0.93;
    const rate = Math.round(item.wholesalePrice * discount);
    return acc + rate * item.quantity;
  }, 0);

  const gstTax = Math.round(subtotal * 0.05); // 5% GST for garments
  const estimatedFreight = subtotal > 50000 ? 0 : Math.round(subtotal * 0.03); // Free freight above 50k
  const grandTotal = subtotal + gstTax + estimatedFreight;

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let text = `*OFFICIAL WHOLESALE RFQ - THREADHUB*\n`;
    text += `Total Quantity: ${totalPieces} pieces\n\n`;
    text += `*ITEMS ORDERED:*\n`;

    cartItems.forEach((item, idx) => {
      let discount = 1.0;
      if (item.quantity >= 500) discount = 0.82;
      else if (item.quantity >= 200) discount = 0.88;
      else if (item.quantity >= 100) discount = 0.93;
      const rate = Math.round(item.wholesalePrice * discount);

      text += `${idx + 1}. ${item.name} (${item.occasion.toUpperCase()})\n`;
      text += `   Qty: ${item.quantity} pcs @ ₹${rate}/pc = ₹${(rate * item.quantity).toLocaleString('en-IN')}\n`;
    });

    text += `\n*ESTIMATED TOTALS:*\n`;
    text += `• Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n`;
    text += `• GST (5% ITC): ₹${gstTax.toLocaleString('en-IN')}\n`;
    text += `• Est. Freight: ${estimatedFreight === 0 ? 'FREE (Above ₹50k)' : `₹${estimatedFreight.toLocaleString('en-IN')}`}\n`;
    text += `• Grand Total: ₹${grandTotal.toLocaleString('en-IN')}\n\n`;
    text += `Please issue formal Pro-Forma Invoice and share dispatch schedule.`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handlePrintQuote = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-neutral-950 border-l border-white/10 text-white flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-orange-400" />
              <h2 className="text-lg font-black text-white">Wholesale RFQ Cart</h2>
              <span className="rounded-full bg-orange-500/20 text-orange-400 text-xs px-2.5 py-0.5 font-bold">
                {totalPieces} Pcs
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition"
              aria-label="Close RFQ Cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-neutral-500">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <h3 className="text-base font-bold text-neutral-300">Your Bulk RFQ Cart is empty</h3>
                <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                  Browse our occasion collections and click "Add MOQ" or simulate batch orders with the Profit Calculator.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 rounded-full bg-orange-500 px-6 py-2.5 text-xs font-bold text-black"
                >
                  Explore Wholesale Catalog
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-white/5">
                  <span>Selected Garments</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="h-3 w-3" /> Clear all
                  </button>
                </div>

                {cartItems.map((item) => {
                  let discount = 1.0;
                  if (item.quantity >= 500) discount = 0.82;
                  else if (item.quantity >= 200) discount = 0.88;
                  else if (item.quantity >= 100) discount = 0.93;
                  const unitRate = Math.round(item.wholesalePrice * discount);
                  const itemTotal = unitRate * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-white/10 bg-neutral-900/80 p-4 space-y-3"
                    >
                      <div className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-xl object-cover shrink-0 border border-white/10"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                            {item.occasion} • {item.category}
                          </span>
                          <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                          <p className="text-[11px] text-neutral-400 mt-0.5">
                            Rate: <strong className="text-white">₹{unitRate}/pc</strong>
                            {discount < 1.0 && (
                              <span className="ml-1 text-[10px] text-emerald-400 font-semibold">
                                ({Math.round((1 - discount) * 100)}% tier off)
                              </span>
                            )}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-neutral-500 hover:text-red-400 transition self-start"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-neutral-400 text-[11px]">Qty:</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(item.moq, item.quantity - 10))}
                            className="h-6 w-6 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center font-bold"
                          >
                            -
                          </button>
                          <span className="font-mono font-bold text-white px-2">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 10)}
                            className="h-6 w-6 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white flex items-center justify-center font-bold"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-mono font-black text-white text-sm">
                          ₹{itemTotal.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-neutral-950 space-y-4">
              {/* Cost Summary Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Subtotal ({totalPieces} pieces):</span>
                  <span className="text-white font-mono font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> GST (5% ITC Claimable):
                  </span>
                  <span className="text-white font-mono">₹{gstTax.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Truck className="h-3.5 w-3.5 text-orange-400" /> Est. Pan-India Cargo Freight:
                  </span>
                  <span className="text-white font-mono">
                    {estimatedFreight === 0 ? (
                      <span className="text-emerald-400 font-bold">FREE Above ₹50,000</span>
                    ) : (
                      `₹${estimatedFreight.toLocaleString('en-IN')}`
                    )}
                  </span>
                </div>
                <div className="border-t border-white/10 pt-2 flex items-center justify-between text-sm">
                  <span className="font-bold text-white">Estimated Order Total:</span>
                  <span className="font-black text-xl text-orange-400 font-mono">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 py-3.5 text-xs font-black text-black transition shadow-lg cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Request Official WhatsApp Pro-Forma Invoice
                </button>

                <button
                  onClick={handlePrintQuote}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-neutral-900 hover:bg-neutral-800 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white transition"
                >
                  <FileText className="h-3.5 w-3.5 text-neutral-400" />
                  Print / Save RFQ Quotation
                </button>
              </div>

              <p className="text-[10px] text-center text-neutral-500">
                ⚡ Consignments dispatched within 24-48 hours upon pro-forma confirmation.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OccasionGrid from './components/OccasionGrid';
import WholesaleCatalog from './components/WholesaleCatalog';
import BulkMarginCalculator from './components/BulkMarginCalculator';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import WarehouseSection from './components/WarehouseSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BulkCartDrawer from './components/BulkCartDrawer';
import ProductDetailModal from './components/ProductDetailModal';
import SampleKitModal from './components/SampleKitModal';
import DigitalLookbookModal from './components/DigitalLookbookModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdminLoginModal from './components/AdminLoginModal';
import AdminDashboard from './components/AdminDashboard';
import { ShieldCheck, LayoutDashboard } from 'lucide-react';

function App() {
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [cartItems, setCartItems] = useState([
    {
      id: "prod-cs01",
      name: "Heavyweight 240 GSM Drop-Shoulder Oversized Tee",
      occasion: "casual",
      category: "Unisex",
      wholesalePrice: 240,
      retailPrice: 899,
      moq: 60,
      quantity: 60,
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    }
  ]);

  // View mode: 'storefront' or 'admin'
  const [viewMode, setViewMode] = useState('storefront');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSampleKitOpen, setIsSampleKitOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState(null);

  // Check stored auth on load
  useEffect(() => {
    const auth = localStorage.getItem('threadhub_admin_auth');
    if (auth === 'true') {
      setIsAdminLoggedIn(true);
    }
  }, []);

  // Admin login / logout handlers
  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setIsAdminLoginOpen(false);
    setViewMode('admin'); // Immediately take them to the admin dashboard
  };

  const handleLogout = () => {
    localStorage.removeItem('threadhub_admin_auth');
    setIsAdminLoggedIn(false);
    setViewMode('storefront');
  };

  // Cart operations
  const handleAddToCart = (product, quantity) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartPieces = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // IF ADMIN DASHBOARD MODE IS ACTIVE, RENDER THE DASHBOARD
  if (viewMode === 'admin') {
    return (
      <AdminDashboard
        onLogout={handleLogout}
        onReturnToStore={() => setViewMode('storefront')}
      />
    );
  }

  // OTHERWISE RENDER STOREFRONT
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-orange-500 selection:text-black">
      {/* Sticky Header with B2B Announcement & Admin Login Trigger */}
      <Navbar
        cartCount={totalCartPieces}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSampleKit={() => setIsSampleKitOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
        onOpenAdminDashboard={() => setViewMode('admin')}
      />

      {/* Floating Admin Quick Bar if Admin is logged in while browsing Storefront */}
      {isAdminLoggedIn && (
        <div className="fixed top-20 right-4 z-40 animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => setViewMode('admin')}
            className="flex items-center gap-2 rounded-full border border-orange-500 bg-neutral-900/95 backdrop-blur-md px-4 py-2 text-xs font-bold text-orange-400 shadow-2xl hover:bg-orange-500 hover:text-black transition duration-200 cursor-pointer"
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span>Switch to Admin ERP Dashboard</span>
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main>
        {/* Hero Section with occasion ticker & wholesale stats */}
        <Hero
          onOpenLookbook={() => setIsLookbookOpen(true)}
          onSelectOccasion={(occId) => setSelectedOccasion(occId)}
        />

        {/* Occasions Showcase Grid */}
        <OccasionGrid
          onSelectOccasion={(occId) => setSelectedOccasion(occId)}
        />

        {/* Dynamic Wholesale Product Catalog & Tier Pricing */}
        <WholesaleCatalog
          selectedOccasion={selectedOccasion}
          setSelectedOccasion={setSelectedOccasion}
          onOpenProductModal={(product) => setActiveProductModal(product)}
          onAddToCart={handleAddToCart}
        />

        {/* Wholesale Profit & Margin Simulator */}
        <BulkMarginCalculator
          onAddToCart={handleAddToCart}
        />

        {/* Why Choose Us & B2B Solutions */}
        <BenefitsSection
          onOpenSampleKit={() => setIsSampleKitOpen(true)}
        />

        {/* Verified Retailer Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked B2B Questions */}
        <FaqSection />

        {/* Physical Showrooms & Mill Dispatch Centers */}
        <WarehouseSection />

        {/* Wholesale Buyer Registration & RFQ Application */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onSelectOccasion={(occId) => setSelectedOccasion(occId)}
      />

      {/* Slideover Bulk Cart Drawer */}
      <BulkCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Detail & Volume Tier Modal */}
      <ProductDetailModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Sample Kit Box Modal */}
      <SampleKitModal
        isOpen={isSampleKitOpen}
        onClose={() => setIsSampleKitOpen(false)}
      />

      {/* Digital Lookbook Preview & Download Modal */}
      <DigitalLookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
      />

      {/* Floating WhatsApp Quick Desk */}
      <FloatingWhatsApp />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;
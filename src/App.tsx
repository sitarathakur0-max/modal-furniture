/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { PageId, Product, InquiryItem } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';
import { InquiryModal } from './components/InquiryModal';
import { InquiryBagDrawer } from './components/InquiryBagDrawer';
import { SearchModal } from './components/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { BuyingGuidePage } from './pages/BuyingGuidePage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('oakline-contemporary-bed');
  const [inquiryModalProduct, setInquiryModalProduct] = useState<Product | null>(null);
  const [inquiryBagOpen, setInquiryBagOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Inquiry Bag with localStorage persistence
  const [inquiryBag, setInquiryBag] = useState<InquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem('modal_furniture_bag');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('modal_furniture_bag', JSON.stringify(inquiryBag));
    } catch {
      // Storage unavailable
    }
  }, [inquiryBag]);

  // Set of saved bag IDs for quick lookup
  const savedBagIds = useMemo(() => new Set(inquiryBag.map((item) => item.id)), [inquiryBag]);

  // Dynamic SEO Page Title & Meta Management
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Modal Furniture — Contemporary Furniture Lahore',
      shop: 'Shop All Furniture — Modal Furniture Lahore',
      'living-room': 'Living Room Seating & Sofas — Modal Furniture',
      bedroom: 'Bedroom Furniture & Platform Beds — Modal Furniture',
      dining: 'Dining Room Tables & Chairs — Modal Furniture',
      storage: 'Storage & Custom Wardrobes — Modal Furniture',
      'product-details': 'Product Concept Details — Modal Furniture',
      about: 'About Modal Furniture — Ichhra, Lahore',
      'buying-guide': 'Furniture Buying Guide — Spatial Sizing & Materials',
      faqs: 'Frequently Asked Questions — Modal Furniture',
      contact: 'Contact Us — Modal Furniture Ichhra Lahore',
      privacy: 'Privacy Policy — Modal Furniture',
      terms: 'Terms & Conditions — Modal Furniture'
    };

    document.title = titles[currentPage] || 'Modal Furniture — Lahore';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Navigation handlers
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-details');
  };

  const handleOpenInquiry = (product: Product) => {
    setInquiryModalProduct(product);
  };

  const handleAddToBag = (product: Product) => {
    setInquiryBag((prev) => {
      const exists = prev.some((i) => i.id === product.id);
      if (exists) {
        // Toggle remove if already in bag
        return prev.filter((i) => i.id !== product.id);
      }
      return [
        ...prev,
        {
          id: product.id,
          refCode: product.refCode,
          title: product.title,
          category: product.categoryLabel,
          image: product.heroImage
        }
      ];
    });
  };

  const handleRemoveFromBag = (id: string) => {
    setInquiryBag((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearBag = () => {
    setInquiryBag([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EA] text-[#292A27] font-sans antialiased selection:bg-[#193C32] selection:text-[#F7F3EA] relative">
      {/* Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        inquiryBagCount={inquiryBag.length}
        onOpenBag={() => setInquiryBagOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onQuickInquire={handleOpenInquiry}
            onAddToBag={handleAddToBag}
            savedBagIds={savedBagIds}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            onSelectProduct={handleSelectProduct}
            onQuickInquire={handleOpenInquiry}
            onAddToBag={handleAddToBag}
            savedBagIds={savedBagIds}
            onNavigate={handleNavigate}
          />
        )}

        {(currentPage === 'living-room' ||
          currentPage === 'bedroom' ||
          currentPage === 'dining' ||
          currentPage === 'storage') && (
          <CategoryPage
            category={currentPage}
            onSelectProduct={handleSelectProduct}
            onQuickInquire={handleOpenInquiry}
            onAddToBag={handleAddToBag}
            savedBagIds={savedBagIds}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'product-details' && (
          <ProductDetailPage
            productId={selectedProductId}
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
            onAddToBag={handleAddToBag}
            onSelectProduct={handleSelectProduct}
            isSavedInBag={savedBagIds.has(selectedProductId)}
            savedBagIds={savedBagIds}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'buying-guide' && <BuyingGuidePage onNavigate={handleNavigate} />}

        {currentPage === 'faqs' && <FaqPage onNavigate={handleNavigate} />}

        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}

        {currentPage === 'privacy' && <LegalPage type="privacy" onNavigate={handleNavigate} />}

        {currentPage === 'terms' && <LegalPage type="terms" onNavigate={handleNavigate} />}
      </main>

      {/* Mandatory Fixed Floating Call Button on bottom-left of every page */}
      <FloatingCallButton />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Inquiry Modal */}
      <InquiryModal
        product={inquiryModalProduct}
        isOpen={Boolean(inquiryModalProduct)}
        onClose={() => setInquiryModalProduct(null)}
      />

      {/* Inquiry Bag Drawer */}
      <InquiryBagDrawer
        isOpen={inquiryBagOpen}
        onClose={() => setInquiryBagOpen(false)}
        items={inquiryBag}
        onRemoveItem={handleRemoveFromBag}
        onClearBag={handleClearBag}
        onNavigateToProduct={handleSelectProduct}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}

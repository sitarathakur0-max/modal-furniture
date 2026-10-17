import React, { useState } from 'react';
import { PageId } from '../types';
import { ShoppingBag, Search, Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  inquiryBagCount: number;
  onOpenBag: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  inquiryBagCount,
  onOpenBag,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{ id: PageId; label: string }> = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop All' },
    { id: 'living-room', label: 'Living' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining', label: 'Dining' },
    { id: 'storage', label: 'Storage' },
    { id: 'buying-guide', label: 'Buying Guide' },
    { id: 'about', label: 'About' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F2]/95 backdrop-blur-md border-b border-[#EAE3D2] transition-colors">
      {/* Top Announcement Strip */}
      <div className="bg-[#193C32] text-[#F7F3EA] text-xs py-2 px-4 text-center tracking-wide font-normal">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center">
          <span>Explore furniture ideas for your home</span>
          <a
            href={BUSINESS_INFO.phoneLink}
            className="sm:hidden flex items-center gap-1 text-[11px] text-[#C59A68] font-medium"
          >
            <Phone className="w-3 h-3" />
            <span>Call Showroom</span>
          </a>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C32] rounded"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#193C32] group-hover:text-[#C59A68] transition-colors whitespace-nowrap shrink-0 block">
            Modal Furniture
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#9E7444] font-medium block">
            Ichhra · Lahore
          </span>
        </button>

        {/* Zone 2: Primary Nav Links */}
        <nav
          className="hidden xl:flex items-center gap-7 text-sm font-medium text-[#292A27]"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#193C32] font-semibold'
                    : 'text-[#4A4C46] hover:text-[#193C32]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#193C32] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Interactive Affordances (Search, Bag, Mobile Toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Search */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="p-2 text-[#4A4C46] hover:text-[#193C32] hover:bg-[#EAE3D2]/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C32]"
            aria-label="Search Furniture Catalogue"
            title="Search Catalogue"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Inquiry Bag */}
          <button
            type="button"
            onClick={onOpenBag}
            className="relative p-2 text-[#193C32] hover:bg-[#EAE3D2]/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C32]"
            aria-label={`Inquiry Bag (${inquiryBagCount} pieces)`}
            title="View Inquiry Bag"
          >
            <ShoppingBag className="w-5 h-5" />
            {inquiryBagCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#193C32] text-[#F7F3EA] text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center tabular-nums">
                {inquiryBagCount}
              </span>
            )}
          </button>

          {/* Consultation CTA button on desktop */}
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F7F3EA] bg-[#193C32] rounded-lg hover:bg-[#122922] transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Showroom Inquiry
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#193C32] rounded-lg hover:bg-[#EAE3D2]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193C32]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#EAE3D2] bg-[#FAF8F2] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#EAE3D2]">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 text-sm rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#193C32] text-[#F7F3EA] font-medium'
                    : 'text-[#292A27] hover:bg-[#EAE3D2]/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#4A4C46]">
            <p className="font-semibold text-[#193C32]">Showroom Location:</p>
            <p className="leading-relaxed">{BUSINESS_INFO.address}</p>
            <a
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#193C32] pt-1"
            >
              <Phone className="w-4 h-4 text-[#C59A68]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

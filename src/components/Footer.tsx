import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/products';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#193C32] text-[#F7F3EA] border-t border-[#122922] pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#245245]">
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#F7F3EA] block">
              Modal Furniture
            </span>
            <p className="text-sm text-[#DCE4DA] max-w-sm leading-relaxed">
              Curated contemporary furniture concepts for homes in Lahore. Explore crafted seating, architectural beds, and bespoke wood finishes.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#DCE4DA]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59A68] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59A68] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneLink}
                  className="font-medium hover:text-[#C59A68] transition-colors tabular-nums"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <ExternalLink className="w-4 h-4 text-[#C59A68] shrink-0" />
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C59A68] transition-colors"
                >
                  facebook.com/modelfurniture
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C59A68]">
              Collections
            </h4>
            <ul className="space-y-2 text-sm text-[#DCE4DA]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('living-room')}
                  className="hover:text-white transition-colors"
                >
                  Living Room Seating
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('bedroom')}
                  className="hover:text-white transition-colors"
                >
                  Beds & Headboards
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('dining')}
                  className="hover:text-white transition-colors"
                >
                  Dining Tables & Chairs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('storage')}
                  className="hover:text-white transition-colors"
                >
                  Wardrobes & Cabinetry
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('shop')}
                  className="hover:text-white transition-colors font-medium text-[#F7F3EA]"
                >
                  Shop Full Catalogue →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C59A68]">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-[#DCE4DA]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('buying-guide')}
                  className="hover:text-white transition-colors"
                >
                  Furniture Buying Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Modal Furniture
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Showroom Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care & Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C59A68]">
              Policies & Legal
            </h4>
            <ul className="space-y-2 text-sm text-[#DCE4DA]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  XML Sitemap
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Robots.txt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Catalogue Concept Notice & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#DCE4DA]/80">
          <p className="max-w-2xl leading-relaxed">
            {BUSINESS_INFO.statusNote}
          </p>
          <div className="whitespace-nowrap shrink-0 text-[#C59A68]">
            © {new Date().getFullYear()} Modal Furniture. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

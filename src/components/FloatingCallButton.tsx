import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const FloatingCallButton: React.FC = () => {
  return (
    <aside
      aria-label="Direct Phone Inquiry"
      className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50 pointer-events-auto"
    >
      <a
        href={BUSINESS_INFO.phoneLink}
        className="group flex items-center gap-2.5 sm:gap-3 bg-[#193C32] text-[#F7F3EA] border border-[#245245] px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:bg-[#122922] hover:shadow-2xl active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A68] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EA]"
        title={`Call Modal Furniture at ${BUSINESS_INFO.phone}`}
      >
        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#245245] group-hover:bg-[#C59A68] group-hover:text-[#193C32] transition-colors shrink-0">
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" aria-hidden="true" />
        </span>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 leading-tight">
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase whitespace-nowrap text-[#F7F3EA]">
            Call Us
          </span>
          <span className="hidden sm:inline text-xs text-[#C59A68] font-light">·</span>
          <span className="text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap text-[#DCE4DA] group-hover:text-white tabular-nums">
            {BUSINESS_INFO.phone}
          </span>
        </div>
      </a>
    </aside>
  );
};

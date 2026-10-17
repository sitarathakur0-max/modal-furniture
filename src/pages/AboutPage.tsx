import React from 'react';
import { PageId } from '../types';
import {
  HERO_IMAGE,
  WOODEN_BED_IMAGE,
  DINING_TABLE_IMAGE,
  BUSINESS_INFO
} from '../data/products';
import { MapPin, Phone, ExternalLink, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      {/* Editorial Intro Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
          Showroom & Philosophy
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#193C32]">
          About Modal Furniture
        </h1>
        <p className="font-serif text-lg sm:text-xl text-[#9E7444] leading-snug">
          Thoughtful furniture concepts rooted in Ichhra, Lahore.
        </p>
        <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
          Modal Furniture is a furniture destination located in the vibrant district of Ichhra, Lahore. We assist clients in exploring contemporary furniture options for everyday living spaces, restful bedrooms, and welcoming dining areas.
        </p>
      </div>

      {/* Visual Showcase Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#EAE3D2] shadow-sm aspect-16/9 bg-white">
          <img
            src={HERO_IMAGE}
            alt="Contemporary furniture interior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#193C32]">
            Our Approach to Furniture Selection
          </h2>
          <p className="text-sm text-[#4A4C46] leading-relaxed">
            Selecting furniture for a home involves finding the right balance between room dimensions, durable joinery, and peaceful aesthetics. We believe that furniture should ground a space without crowding natural corridors.
          </p>
          <p className="text-sm text-[#4A4C46] leading-relaxed">
            By providing tailored advice on wood tones, fabric choices, and spatial layouts, we help homeowners and apartment residents make informed choices tailored to their living requirements.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="px-5 py-2.5 bg-[#193C32] text-[#F7F3EA] rounded-lg text-xs font-semibold hover:bg-[#122922] transition-colors"
            >
              Explore Catalogue Concepts
            </button>
            <button
              type="button"
              onClick={() => onNavigate('buying-guide')}
              className="px-5 py-2.5 bg-white border border-[#EAE3D2] text-[#193C32] rounded-lg text-xs font-semibold hover:border-[#193C32] transition-colors"
            >
              Read Buying Guide
            </button>
          </div>
        </div>
      </div>

      {/* Two-Column Image & Value Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="p-8 rounded-2xl bg-white border border-[#EAE3D2] space-y-4">
          <div className="w-10 h-10 rounded-lg bg-[#FAF8F2] flex items-center justify-center text-[#193C32]">
            <ShieldCheck className="w-5 h-5 text-[#C59A68]" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#193C32]">
            Transparent Client Consultation
          </h3>
          <p className="text-sm text-[#4A4C46] leading-relaxed">
            Every home layout in Lahore has unique ceiling heights, window positions, and corridor clearances. We do not believe in one-size-fits-all mass furnishings. Instead, our team reviews room dimensions and material preferences directly with each customer before proceeding.
          </p>
          <div className="aspect-4/3 rounded-xl overflow-hidden border border-[#EAE3D2] mt-4">
            <img
              src={WOODEN_BED_IMAGE}
              alt="Artisanal bed concept"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-[#EAE3D2] space-y-4">
          <div className="w-10 h-10 rounded-lg bg-[#FAF8F2] flex items-center justify-center text-[#193C32]">
            <HeartHandshake className="w-5 h-5 text-[#C59A68]" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#193C32]">
            Honest Material Discussion
          </h3>
          <p className="text-sm text-[#4A4C46] leading-relaxed">
            We discuss realistic considerations: how solid wood responds to Lahore’s seasonal humidity shifts, which woven fabrics withstand active family life, and how satin protective finishes preserve organic timber character over time.
          </p>
          <div className="aspect-4/3 rounded-xl overflow-hidden border border-[#EAE3D2] mt-4">
            <img
              src={DINING_TABLE_IMAGE}
              alt="Contemporary dining setup"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Verified Business Information Strip */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#193C32] text-[#F7F3EA] space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C59A68] block">
            Verified Public Directory Details
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Showroom & Contact Details
          </h3>
          <p className="text-xs sm:text-sm text-[#DCE4DA]">
            Modal Furniture is listed in Ichhra, Lahore, Punjab. You can reach out directly via telephone or visit the address below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#245245] text-xs">
          <div className="space-y-1.5">
            <span className="font-semibold text-[#C59A68] flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Showroom Address</span>
            </span>
            <p className="text-[#DCE4DA] leading-relaxed">{BUSINESS_INFO.address}</p>
          </div>

          <div className="space-y-1.5">
            <span className="font-semibold text-[#C59A68] flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              <span>Direct Phone</span>
            </span>
            <a
              href={BUSINESS_INFO.phoneLink}
              className="text-[#DCE4DA] hover:text-white block font-medium tabular-nums text-sm"
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className="space-y-1.5">
            <span className="font-semibold text-[#C59A68] flex items-center gap-1.5">
              <ExternalLink className="w-4 h-4" />
              <span>Facebook Page</span>
            </span>
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DCE4DA] hover:text-white block truncate"
            >
              facebook.com/modelfurniture
            </a>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C59A68] hover:text-white"
          >
            <span>Proceed to Contact Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { PageId } from '../types';
import {
  HERO_IMAGE,
  SOFA_SECTIONAL_IMAGE,
  WOODEN_BED_IMAGE,
  DINING_TABLE_IMAGE,
  WARDROBE_STORAGE_IMAGE,
  ACCENT_CHAIR_IMAGE
} from '../data/products';
import { ArrowRight, Compass, Ruler, Home, Box, CheckCircle } from 'lucide-react';

interface BuyingGuidePageProps {
  onNavigate: (page: PageId) => void;
}

export const BuyingGuidePage: React.FC<BuyingGuidePageProps> = ({ onNavigate }) => {
  const [activeArticle, setActiveArticle] = useState<string>('all');

  const articles = [
    {
      id: 'measure-room',
      title: 'How to Measure a Room Before Buying Furniture',
      tag: 'Preparation & Architecture',
      image: HERO_IMAGE,
      linkTarget: 'shop' as PageId,
      linkLabel: 'Explore Furniture Dimensions',
      summary:
        'A thorough room measurement is the single most important step before commissioning or buying furniture in Lahore.',
      content: [
        'Record the exact width, length, and ceiling height of your room using a rigid steel tape measure rather than a cloth tailor tape.',
        'Document all architectural obstacles: radiator locations, split-unit AC indoor units, electrical switches, window sills, and door swing radiuses.',
        'Measure entry points carefully: building elevators, staircase landings, entryway corridors, and room doorway widths. Many three-seater sofas cannot pivot around sharp 90-degree hallway corners if the door opening is under 32 inches.',
        'Apply masking tape to your room floor along the proposed furniture footprint. Walk through the space for two days to verify whether regular movement feels natural.'
      ]
    },
    {
      id: 'select-sofa',
      title: 'How to Select a Suitable Sofa for Daily Comfort',
      tag: 'Living Room Seating',
      image: SOFA_SECTIONAL_IMAGE,
      linkTarget: 'living-room' as PageId,
      linkLabel: 'View Living Room Sofas',
      summary:
        'A sofa is evaluated by seating depth, cushion resilience, and sub-frame joinery.',
      content: [
        'Assess seat depth: Standard sofas have a seat depth of 20 to 22 inches for upright conversational posture. For relaxed lounging or reading, prefer deep seats between 23 to 26 inches with supportive throw pillows.',
        'Check cushion density: Pure down or feather cushions flatten rapidly in everyday use, while cheap low-resilience polyurethane foam can feel rigid. Look for high-density foam cores wrapped in a softer Dacron or fiber pocket.',
        'Verify frame joinery: Kiln-dried hardwood with corner-blocked joints withstands decades of family use without squeaking or frame distortion.',
        'Pick the right textile: In homes with children or guests, tightly woven linen-cotton blends or textured chenille in olive, forest green, or heather oatmeal conceal daily use far better than flat, fragile plain weaves.'
      ]
    },
    {
      id: 'bedroom-storage',
      title: 'Planning Bedroom Storage & Wardrobe Ergonomics',
      tag: 'Bedroom & Cabinetry',
      image: WARDROBE_STORAGE_IMAGE,
      linkTarget: 'storage' as PageId,
      linkLabel: 'View Wardrobes & Storage',
      summary:
        'Optimal wardrobe architecture maximizes vertical height and groups clothing by access frequency.',
      content: [
        'Divide hanging height: Long coats, dresses, and sherwanis require 55 to 65 inches of clear vertical hanging drop. Daily shirts, jackets, and trousers only require 38 to 42 inches in a double-hanging tier.',
        'Use drawers for folded garments: Drawers positioned between waist and eye level provide direct visibility into folded items without bending down.',
        'Dedicate top cabinetry for seasonal blankets: The uppermost 18 to 24 inches of floor-to-ceiling wardrobes should house heavy winter duvets and seasonal bedding.',
        'Plan door clearance: In compact bedrooms, sliding tambour or recessed pocket doors save 30 inches of swing space compared to outward-swinging hinged panels.'
      ]
    },
    {
      id: 'dining-table',
      title: 'Choosing a Dining Table: Spacing, Shapes & Joinery',
      tag: 'Dining & Entertaining',
      image: DINING_TABLE_IMAGE,
      linkTarget: 'dining' as PageId,
      linkLabel: 'View Dining Room Collections',
      summary:
        'From intimate family meals to festive weekend gatherings, dining table proportions define host hospitality.',
      content: [
        'Tabletop spacing: Allow 24 to 28 inches of tabletop width and 15 inches of depth per seated person to avoid elbow clashing during shared meals.',
        'Perimeter circulation: Ensure at least 36 to 42 inches of free clearance between the table edge and surrounding walls, sideboards, or doors so guests can push chairs back comfortably.',
        'Trestle base vs. four corner legs: Trestle and pedestal bases offer superior knee and chair flexibility because corner legs do not obstruct seating placement.',
        'Matte water-resistant finishes: Avoid ultra-high-gloss lacquers that show hairline scratches and heat rings from hot serving dishes. A satin oil or matte polyurethane finish preserves natural wood grain while offering everyday spill protection.'
      ]
    },
    {
      id: 'wood-tones',
      title: 'Matching Natural Wood Tones and Textured Fabrics',
      tag: 'Material Harmonies',
      image: ACCENT_CHAIR_IMAGE,
      linkTarget: 'shop' as PageId,
      linkLabel: 'Explore Harmonized Pieces',
      summary:
        'Coordinating varied wood finishes without making an interior look mismatched or artificially identical.',
      content: [
        'Identify the dominant undertone: Look closely at your primary wood piece (e.g. natural oak, teak, or walnut). Oak has warm honey-golden undertones, while walnut carries rich cocoa and charcoal undertones.',
        'Repeat a wood tone twice: If you introduce a warm natural oak coffee table, echo that tone in a bedside console or bookshelf frame to create intentional visual rhythm.',
        'Contrast dark and light values: Pair dark timber with warm ivory or soft sage upholstery to prevent a room from feeling heavy or cavernous.',
        'Incorporate tactile organic textiles: Slubbed linen, textured boucle, and wool rugs provide tactile counterpoints to smooth oiled timber surfaces.'
      ]
    },
    {
      id: 'compact-rooms',
      title: 'Furniture Layout Ideas for Compact Lahore Apartments',
      tag: 'Space Planning',
      image: WOODEN_BED_IMAGE,
      linkTarget: 'bedroom' as PageId,
      linkLabel: 'View Compact Furniture Concepts',
      summary:
        'Strategic layout principles that preserve continuous floor visibility and spacious feel in compact rooms.',
      content: [
        'Preserve continuous floor sightlines: Furniture raised on slim tapered legs or wall-hung floating nightstands exposes more continuous floor surface, which immediately tricks the eye into perceiving a room as larger.',
        'Adopt low profile heights: Low platform beds and low-slung living room sofas keep vertical wall spans unobstructed, allowing windows and light to dominate.',
        'Select multi-functional surfaces: An elegant low wooden console can serve as a media credenza, record storage, and display surface all at once.',
        'Avoid fragmented visual clutter: Two substantial, beautifully proportioned pieces create a far more peaceful interior than five diminutive, mismatched items scattered across the room.'
      ]
    }
  ];

  const displayedArticles =
    activeArticle === 'all'
      ? articles
      : articles.filter((a) => a.id === activeArticle);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
          Showroom Editorial Resource
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#193C32]">
          Furniture Buying Guide
        </h1>
        <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
          Comprehensive, practical guides written for homeowners and apartment dwellers in Lahore. Learn how to calculate room clearances, select durable upholstery, and coordinate natural wood finishes.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#EAE3D2]">
        <button
          type="button"
          onClick={() => setActiveArticle('all')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
            activeArticle === 'all'
              ? 'bg-[#193C32] text-[#F7F3EA]'
              : 'bg-white border border-[#EAE3D2] text-[#4A4C46] hover:bg-[#FAF8F2]'
          }`}
        >
          All Topics ({articles.length})
        </button>
        {articles.map((art) => (
          <button
            key={art.id}
            type="button"
            onClick={() => setActiveArticle(art.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              activeArticle === art.id
                ? 'bg-[#193C32] text-[#F7F3EA]'
                : 'bg-white border border-[#EAE3D2] text-[#4A4C46] hover:bg-[#FAF8F2]'
            }`}
          >
            {art.title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* Articles Stream */}
      <div className="space-y-16">
        {displayedArticles.map((article, idx) => (
          <article
            key={article.id}
            id={article.id}
            className="bg-white border border-[#EAE3D2] rounded-2xl overflow-hidden shadow-xs p-6 sm:p-10 space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#9E7444]">
                  <span>Guide {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  <span>·</span>
                  <span>{article.tag}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#193C32]">
                  {article.title}
                </h2>
                <p className="text-sm font-medium text-[#4A4C46] leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="lg:col-span-5 rounded-xl overflow-hidden border border-[#EAE3D2] aspect-16/9 bg-[#FAF8F2]">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Checklist / Content Steps */}
            <div className="pt-6 border-t border-[#FAF8F2] space-y-3">
              <h3 className="font-serif text-sm font-semibold text-[#193C32] uppercase tracking-wider">
                Practical Recommendations:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.content.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 bg-[#FAF8F2] border border-[#EAE3D2] rounded-xl text-xs sm:text-sm text-[#4A4C46] flex items-start gap-3 leading-relaxed"
                  >
                    <CheckCircle className="w-4 h-4 text-[#193C32] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Category Linking */}
            <div className="pt-4 flex items-center justify-between border-t border-[#FAF8F2]">
              <span className="text-xs text-[#9E7444] font-mono">
                Modal Furniture Consultation Advice
              </span>
              <button
                type="button"
                onClick={() => onNavigate(article.linkTarget)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#193C32] hover:text-[#C59A68] transition-colors"
              >
                <span>{article.linkLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Consultation Banner */}
      <div className="p-8 bg-[#FAF8F2] border border-[#EAE3D2] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif text-lg font-bold text-[#193C32]">
            Need Help Proportioning a Piece for Your Room?
          </h3>
          <p className="text-xs text-[#4A4C46]">
            Bring your room sketches or dimensions to our showroom in Ichhra, Lahore.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 bg-[#193C32] text-[#F7F3EA] text-xs font-semibold rounded-lg hover:bg-[#122922] transition-colors shrink-0"
        >
          Contact Showroom
        </button>
      </div>
    </div>
  );
};

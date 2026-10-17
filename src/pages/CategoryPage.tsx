import React from 'react';
import { ProductCategory, Product, PageId } from '../types';
import { PRODUCTS, CATEGORIES, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft, Phone, Compass, CheckCircle } from 'lucide-react';

interface CategoryPageProps {
  category: ProductCategory;
  onSelectProduct: (productId: string) => void;
  onQuickInquire: (product: Product) => void;
  onAddToBag: (product: Product) => void;
  savedBagIds: Set<string>;
  onNavigate: (page: PageId) => void;
}

const CATEGORY_DETAILS: Record<
  ProductCategory,
  {
    title: string;
    headline: string;
    description: string;
    spaceAdvice: string[];
  }
> = {
  'living-room': {
    title: 'Living Room Furniture',
    headline: 'Seating, Tables & Architectural Media Consoles',
    description:
      'Living rooms balance quiet relaxation with hospitable gatherings. Our seating concepts emphasize deep seat geometry, resilient foam padding, and tactile upholstery harmonized with natural oak coffee tables.',
    spaceAdvice: [
      'Maintain at least 16 to 18 inches between sofa cushions and coffee tables for natural leg movement.',
      'Allow minimum 36 inches of unobstructed walkway around primary seating clusters.',
      'Ground floating pieces with a generously sized woven rug extending beneath the front sofa legs.'
    ]
  },
  'bedroom': {
    title: 'Bedroom Furniture',
    headline: 'Architectural Platform Beds, Fluted Headboards & Nightstands',
    description:
      'The bedroom serves as a sensory sanctuary. Our bedroom concepts rely on honest wood grain, calm horizontal proportions, and integrated floating cabinetry to minimize visual clutter.',
    spaceAdvice: [
      'Leave at least 24 to 30 inches on both sides of king or queen beds for effortless movement and nightstand access.',
      'Match nightstand height to mattress surface height within 1 to 2 inches for ergonomic convenience.',
      'Choose low platform frames to maximize perceived ceiling height and atmospheric openness.'
    ]
  },
  'dining': {
    title: 'Dining Room',
    headline: 'Solid Timber Tables & Ergonomic Dining Seating',
    description:
      'Conceived for prolonged meals and everyday family hospitality. Tables emphasize honest joinery and water-resistant matte timber protection that ages gracefully with regular household use.',
    spaceAdvice: [
      'Plan for approximately 24 to 28 inches of tabletop width per seated guest for comfortable dining.',
      'Ensure 36 to 42 inches of clearance between table edges and walls or buffets to allow chairs to slide out freely.',
      'Pair solid wood trestle tables with curved backrest dining chairs for lumbar comfort during long conversations.'
    ]
  },
  'storage': {
    title: 'Storage & Wardrobes',
    headline: 'Full-Height Cabinetry, Integrated Vanities & Consoles',
    description:
      'Intentional storage turns chaotic rooms into serene environments. Our cabinetry concepts combine vertical oak panels with concealed European soft-close hardware and tailored internal configurations.',
    spaceAdvice: [
      'Utilize vertical ceiling height to maximize storage capacity while keeping floor space unobstructed.',
      'Divide hanging zones into long hanging (55-65 inches) for formal wear and double hanging (38-42 inches) for shirts.',
      'Incorporate warm integrated LED illumination to illuminate internal drawers and open display niches.'
    ]
  }
};

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  onSelectProduct,
  onQuickInquire,
  onAddToBag,
  savedBagIds,
  onNavigate
}) => {
  const info = CATEGORY_DETAILS[category];
  const categoryMeta = CATEGORIES.find((c) => c.id === category);
  const products = PRODUCTS.filter((p) => p.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-[#4A4C46] font-mono">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-[#193C32] transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <button
          onClick={() => onNavigate('shop')}
          className="hover:text-[#193C32] transition-colors"
        >
          Shop
        </button>
        <span>/</span>
        <span className="text-[#193C32] font-semibold">{info.title}</span>
      </div>

      {/* Hero Category Banner */}
      <div className="rounded-2xl border border-[#EAE3D2] bg-[#FAF8F2] overflow-hidden p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
              Curated Category
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#193C32]">
              {info.title}
            </h1>
            <p className="text-base font-serif text-[#9E7444]">{info.headline}</p>
            <p className="text-sm text-[#4A4C46] leading-relaxed max-w-xl">
              {info.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="px-5 py-2.5 bg-[#193C32] text-[#F7F3EA] text-xs font-semibold rounded-lg hover:bg-[#122922] transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call for Custom Sizes</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('buying-guide')}
                className="px-5 py-2.5 bg-white border border-[#EAE3D2] text-[#193C32] text-xs font-semibold rounded-lg hover:border-[#193C32] transition-colors flex items-center gap-2"
              >
                <Compass className="w-3.5 h-3.5 text-[#9E7444]" />
                <span>Room Sizing Guide</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            {categoryMeta && (
              <div className="rounded-xl overflow-hidden border border-[#EAE3D2] shadow-md aspect-4/3 bg-white">
                <img
                  src={categoryMeta.image}
                  alt={info.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Category Products */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#EAE3D2] pb-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#193C32]">
            Available Design Concepts ({products.length})
          </h2>
          <span className="text-xs font-mono text-[#9E7444]">
            Prices & Timelines via Consultation
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onSelectProduct}
              onQuickInquire={onQuickInquire}
              onAddToBag={onAddToBag}
              isSavedInBag={savedBagIds.has(product.id)}
            />
          ))}
        </div>
      </div>

      {/* Spatial Guidelines Box for Category */}
      <div className="bg-white border border-[#EAE3D2] rounded-xl p-8 space-y-4">
        <h3 className="font-serif text-lg font-semibold text-[#193C32]">
          Space Planning Guidelines for {info.title}
        </h3>
        <p className="text-xs text-[#4A4C46]">
          Key ergonomic rules to remember before finalizing piece dimensions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {info.spaceAdvice.map((advice, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#FAF8F2] border border-[#EAE3D2] rounded-lg space-y-2 text-xs text-[#4A4C46] flex items-start gap-2.5"
            >
              <CheckCircle className="w-4 h-4 text-[#193C32] shrink-0 mt-0.5" />
              <p className="leading-relaxed">{advice}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-6 flex items-center justify-between border-t border-[#EAE3D2]">
        <button
          type="button"
          onClick={() => onNavigate('shop')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#193C32] hover:text-[#C59A68]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Collections</span>
        </button>
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="text-xs text-[#9E7444] font-medium hover:underline"
        >
          Visit Showroom on Saadat Farooq Road →
        </button>
      </div>
    </div>
  );
};

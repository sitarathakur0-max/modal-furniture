import React, { useState } from 'react';
import { PageId, Product } from '../types';
import {
  HERO_IMAGE,
  SOFA_SECTIONAL_IMAGE,
  WOODEN_BED_IMAGE,
  DINING_TABLE_IMAGE,
  WARDROBE_STORAGE_IMAGE,
  ACCENT_CHAIR_IMAGE,
  PRODUCTS,
  BUSINESS_INFO
} from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  ArrowRight,
  Phone,
  Compass,
  Layers,
  Sparkles,
  Maximize2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (productId: string) => void;
  onQuickInquire: (product: Product) => void;
  onAddToBag: (product: Product) => void;
  savedBagIds: Set<string>;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onQuickInquire,
  onAddToBag,
  savedBagIds
}) => {
  // FAQ accordion state for preview
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const featuredProducts = PRODUCTS.slice(0, 8);

  const categoryCards = [
    { title: 'Sofas & Sectionals', page: 'living-room' as PageId, image: SOFA_SECTIONAL_IMAGE, subtitle: 'Tailored comfort & deep lounge profiles' },
    { title: 'Beds & Headboards', page: 'bedroom' as PageId, image: WOODEN_BED_IMAGE, subtitle: 'Architectural timber & upholstered platforms' },
    { title: 'Wardrobes & Storage', page: 'storage' as PageId, image: WARDROBE_STORAGE_IMAGE, subtitle: 'Full-height modular cabinetry' },
    { title: 'Dining Tables', page: 'dining' as PageId, image: DINING_TABLE_IMAGE, subtitle: 'Solid oak slabs & balanced trestles' },
    { title: 'Coffee Tables', page: 'living-room' as PageId, image: HERO_IMAGE, subtitle: 'Organic contours & natural grain warmth' },
    { title: 'TV Consoles', page: 'living-room' as PageId, image: HERO_IMAGE, subtitle: 'Fluted wood sliding consoles' },
    { title: 'Dressing Tables', page: 'storage' as PageId, image: WARDROBE_STORAGE_IMAGE, subtitle: 'Integrated mirrors & vanity drawers' },
    { title: 'Chairs & Accent Seating', page: 'living-room' as PageId, image: ACCENT_CHAIR_IMAGE, subtitle: 'Curved silhouettes & tactile upholstery' },
  ];

  const faqItems = [
    {
      q: 'How can I ask about a specific furniture concept shown on this website?',
      a: 'You can tap the "Inquire" button on any piece to send a direct request with its reference code, or call our team directly at +92 301 4443700. We will gladly discuss finish options, measurements, and availability.'
    },
    {
      q: 'How do I confirm current prices for furniture pieces?',
      a: 'Because pieces are prepared according to selected timber finishes, custom dimensions, and upholstery choices, prices are provided upon direct consultation. Contact our showroom team in Ichhra, Lahore for a verified quotation.'
    },
    {
      q: 'Can I request specific dimensions to fit my room?',
      a: 'Yes. Room proportions differ across homes in Lahore. When you inquire, share your room measurements with us, and our team will advise whether the concept can be proportioned to your spatial layout.'
    },
    {
      q: 'Are all generated design concepts physically present in the showroom today?',
      a: 'The catalogue designs displayed here serve as proposed concepts and stylistic inspiration. To check physical display models or immediate material samples, please contact the showroom before visiting.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* C. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAF8F2] pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-[#EAE3D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
                Contemporary Living in Lahore
              </span>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#193C32] leading-[1.1] text-balance">
                Make Room for Better Living.
              </h1>

              <p className="text-base sm:text-lg text-[#4A4C46] leading-relaxed">
                Discover furniture inspiration for comfortable, welcoming, and thoughtfully designed spaces. From tailored living room seating to architectural bedroom suites.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('shop')}
                  className="px-6 py-3.5 bg-[#193C32] text-[#F7F3EA] rounded-lg text-sm font-semibold hover:bg-[#122922] transition-colors shadow-md flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Furniture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('buying-guide')}
                  className="px-6 py-3.5 bg-white text-[#193C32] border border-[#EAE3D2] rounded-lg text-sm font-semibold hover:border-[#193C32] hover:bg-[#FAF8F2] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#9E7444]" />
                  <span>Find Your Style</span>
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-[#EAE3D2] grid grid-cols-2 gap-4 text-xs text-[#4A4C46]">
                <div>
                  <span className="font-semibold text-[#193C32] block">Showroom Location</span>
                  <span>Ichhra · Saadat Farooq Road</span>
                </div>
                <div>
                  <span className="font-semibold text-[#193C32] block">Direct Consultation</span>
                  <span className="tabular-nums">+92 301 4443700</span>
                </div>
              </div>
            </div>

            {/* Right Hero Cinematic Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#EAE3D2] shadow-2xl aspect-16/9 bg-[#FAF8F2]">
                <img
                  src={HERO_IMAGE}
                  alt="Contemporary living room with forest green sofa and natural oak coffee table"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white flex items-end justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#DCE4DA] tracking-wider uppercase block">
                      Featured Concept
                    </span>
                    <p className="font-serif text-sm sm:text-base font-medium">
                      Haven Three-Seater in Forest Woven Upholstery
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectProduct('haven-three-seater-sofa')}
                    className="text-xs bg-white/90 text-[#193C32] px-3 py-1.5 rounded font-medium hover:bg-white transition-colors"
                  >
                    View Piece
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
              Curated Spaces
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#193C32] mt-1">
              Shop by Category
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('shop')}
            className="text-sm font-semibold text-[#193C32] hover:text-[#C59A68] transition-colors flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCards.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(cat.page)}
              className="group relative rounded-xl overflow-hidden border border-[#EAE3D2] bg-white cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="aspect-4/3 w-full overflow-hidden bg-[#FAF8F2]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="p-4 bg-white border-t border-[#EAE3D2]">
                <h3 className="font-serif text-base font-semibold text-[#193C32] group-hover:text-[#C59A68] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#4A4C46] mt-1 line-clamp-1">{cat.subtitle}</p>
                <div className="mt-3 flex items-center justify-between text-xs font-medium text-[#193C32]">
                  <span>Explore category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E. FEATURED FURNITURE COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
            Illustrative Catalogue Concepts
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#193C32]">
            Featured Furniture Collection
          </h2>
          <p className="text-sm text-[#4A4C46] leading-relaxed">
            Each concept represents a carefully balanced study in proportion, timber joinery, and tactile fabrics. Inquire with our showroom team to confirm custom sizing and materials.
          </p>
        </div>

        {/* 8 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onNavigate('shop')}
            className="px-8 py-3 bg-[#FAF8F2] border border-[#EAE3D2] text-[#193C32] font-semibold text-sm rounded-lg hover:border-[#193C32] hover:bg-white transition-colors"
          >
            Explore Complete 12-Piece Concept Catalogue →
          </button>
        </div>
      </section>

      {/* F. LIVING ROOM INSPIRATION */}
      <section className="bg-[#FAF8F2] border-y border-[#EAE3D2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
                Spatial Atmosphere
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#193C32]">
                Living Room Inspiration
              </h2>
              <p className="text-sm text-[#4A4C46] leading-relaxed">
                A living room lives through its proportions. The depth of a sofa seating cushion, the height of a coffee table relative to the knee, and the breathability of circulation corridors dictate how relaxed a space feels.
              </p>
              <p className="text-sm text-[#4A4C46] leading-relaxed">
                By blending deep forest textiles with warm ivory backgrounds and natural oak timber, our living concepts foster peaceful gatherings and comfortable daily living.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('living-room')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#193C32] hover:text-[#C59A68]"
                >
                  <span>Browse Living Room Seating</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-[#EAE3D2] shadow-sm bg-white">
                <img
                  src={SOFA_SECTIONAL_IMAGE}
                  alt="Modern sectional sofa setup"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-[#193C32]">
                    The Open-Plan Sectional
                  </h4>
                  <p className="text-xs text-[#4A4C46] mt-1">
                    Warm ivory woven linen layered with sage cushions for balanced ambient lightness.
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#EAE3D2] shadow-sm bg-white">
                <img
                  src={ACCENT_CHAIR_IMAGE}
                  alt="Curated accent armchair nook"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-serif text-sm font-semibold text-[#193C32]">
                    The Compact Reading Nook
                  </h4>
                  <p className="text-xs text-[#4A4C46] mt-1">
                    Sculptural barrel chair and timber side table sized for apartment corners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* G. BEDROOM COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
              Restful Architecture
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#193C32] mt-1">
              Bedroom Collection
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('bedroom')}
            className="text-sm font-semibold text-[#193C32] hover:text-[#C59A68] transition-colors flex items-center gap-1.5"
          >
            <span>Explore Bedroom Pieces</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden border border-[#EAE3D2] bg-white flex flex-col justify-between">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={WOODEN_BED_IMAGE}
                alt="Fluted natural oak bed concept"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 space-y-2">
              <span className="text-xs font-mono text-[#9E7444]">MOD-BED-01</span>
              <h3 className="font-serif text-lg font-semibold text-[#193C32]">Platform Beds</h3>
              <p className="text-xs text-[#4A4C46] leading-relaxed">
                Low horizontal timber frames with solid joinery reduce visual weight in sleeping quarters.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#EAE3D2] bg-white flex flex-col justify-between">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={WARDROBE_STORAGE_IMAGE}
                alt="Floor to ceiling wardrobe and vanity"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 space-y-2">
              <span className="text-xs font-mono text-[#9E7444]">MOD-WAR-01</span>
              <h3 className="font-serif text-lg font-semibold text-[#193C32]">Wardrobe Systems</h3>
              <p className="text-xs text-[#4A4C46] leading-relaxed">
                Floor-to-ceiling modular cabinetry that conceals personal storage behind clean vertical grain.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#EAE3D2] bg-white flex flex-col justify-between">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={ACCENT_CHAIR_IMAGE}
                alt="Bedside seating and low tables"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 space-y-2">
              <span className="text-xs font-mono text-[#9E7444]">MOD-NIT-01 / MOD-DRS-01</span>
              <h3 className="font-serif text-lg font-semibold text-[#193C32]">Dressing & Nightstands</h3>
              <p className="text-xs text-[#4A4C46] leading-relaxed">
                Floating drawers and compact vanity units that keep bedside accessories uncluttered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H. DINING ROOM COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#EAE3D2] bg-[#FAF8F2] overflow-hidden p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
                The Gathering Table
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#193C32]">
                Dining Room Collection
              </h2>
              <p className="text-sm text-[#4A4C46] leading-relaxed">
                A dining table anchors the rituals of the home. Our Alder concept emphasizes solid natural oak planks with a tactile satin oil finish that celebrates wood figure without distracting gloss.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('dining')}
                  className="px-5 py-2.5 bg-[#193C32] text-[#F7F3EA] rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#122922] transition-colors"
                >
                  View Dining Collection
                </button>
                <span className="text-xs text-[#4A4C46]">
                  Dimensions & chair configurations verified upon order inquiry
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-[#EAE3D2] shadow-lg">
                <img
                  src={DINING_TABLE_IMAGE}
                  alt="Solid oak dining table and chairs"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* I. FURNITURE BUYING GUIDE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
              Editorial Advice
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#193C32] mt-1">
              Furniture Buying Guide
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('buying-guide')}
            className="text-sm font-semibold text-[#193C32] hover:text-[#C59A68] transition-colors flex items-center gap-1.5"
          >
            <span>Read Full Guides</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => onNavigate('buying-guide')}
            className="group p-6 bg-white border border-[#EAE3D2] rounded-xl cursor-pointer hover:border-[#193C32] transition-colors space-y-3"
          >
            <span className="text-xs font-mono text-[#9E7444]">Article 01</span>
            <h3 className="font-serif text-lg font-semibold text-[#193C32] group-hover:text-[#C59A68] transition-colors">
              Choosing the Right Sofa Size
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4C46] leading-relaxed">
              How to measure entry hallways, determine ideal seating depth, and preserve 36 inches of clearance around lounge tables.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#193C32] pt-2">
              Read Guide <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={() => onNavigate('buying-guide')}
            className="group p-6 bg-white border border-[#EAE3D2] rounded-xl cursor-pointer hover:border-[#193C32] transition-colors space-y-3"
          >
            <span className="text-xs font-mono text-[#9E7444]">Article 02</span>
            <h3 className="font-serif text-lg font-semibold text-[#193C32] group-hover:text-[#C59A68] transition-colors">
              Planning Bedroom Storage
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4C46] leading-relaxed">
              Balancing long hanging bays with drawer stacks, and organizing seasonal linens without overwhelming room volume.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#193C32] pt-2">
              Read Guide <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div
            onClick={() => onNavigate('buying-guide')}
            className="group p-6 bg-white border border-[#EAE3D2] rounded-xl cursor-pointer hover:border-[#193C32] transition-colors space-y-3"
          >
            <span className="text-xs font-mono text-[#9E7444]">Article 03</span>
            <h3 className="font-serif text-lg font-semibold text-[#193C32] group-hover:text-[#C59A68] transition-colors">
              Selecting Furniture for Compact Rooms
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4C46] leading-relaxed">
              Why floating nightstands, low platform beds, and visible floor area make compact apartments feel substantially larger.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#193C32] pt-2">
              Read Guide <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </section>

      {/* J. INTERIOR INSPIRATION GALLERY */}
      <section className="bg-[#FAF8F2] border-y border-[#EAE3D2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
              Visual Perspectives
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#193C32]">
              Interior Inspiration Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4C46]">
              Realistic compositions showcasing light, timber grains, and contemporary spatial arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden border border-[#EAE3D2] bg-white shadow-xs">
              <img
                src={HERO_IMAGE}
                alt="Living room perspective with natural morning daylight"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
              />
              <div className="p-3.5 text-xs text-[#4A4C46]">
                Natural oak low table with forest green sofa and sheer linen curtains
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#EAE3D2] bg-white shadow-xs">
              <img
                src={WOODEN_BED_IMAGE}
                alt="Minimalist bedroom with fluted headboard"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
              />
              <div className="p-3.5 text-xs text-[#4A4C46]">
                Fluted oak headboard wall with floating bedside lighting and neutral bedding
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#EAE3D2] bg-white shadow-xs">
              <img
                src={DINING_TABLE_IMAGE}
                alt="Architectural dining table illuminated in warm lighting"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
              />
              <div className="p-3.5 text-xs text-[#4A4C46]">
                Evening dining table arrangement with natural oak trestles and sculpted chairs
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#EAE3D2] bg-white shadow-xs">
              <img
                src={WARDROBE_STORAGE_IMAGE}
                alt="Integrated wardrobe and dressing nook"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
              />
              <div className="p-3.5 text-xs text-[#4A4C46]">
                Full-height storage unit combining natural veneer with matte charcoal drawers
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#EAE3D2] bg-white shadow-xs">
              <img
                src={SOFA_SECTIONAL_IMAGE}
                alt="Sectional sofa layout in contemporary sunlit space"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
              />
              <div className="p-3.5 text-xs text-[#4A4C46]">
                Ivory textured sectional framed with soft sage armchairs and high ceilings
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#EAE3D2] bg-white shadow-xs">
              <img
                src={ACCENT_CHAIR_IMAGE}
                alt="Cozy reading corner with accent chair"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover hover:scale-103 transition-transform duration-500"
              />
              <div className="p-3.5 text-xs text-[#4A4C46]">
                Velvet armchair with side table and wool throw beside window framing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K. WHY THOUGHTFUL FURNITURE MATTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
            Principles of Good Design
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#193C32]">
            Why Thoughtful Furniture Matters
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4C46]">
            General considerations when selecting foundational pieces for your living, dining, and sleeping spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-[#EAE3D2] rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF8F2] flex items-center justify-center text-[#193C32]">
              <Sparkles className="w-5 h-5 text-[#C59A68]" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#193C32]">
              Comfort and Everyday Use
            </h3>
            <p className="text-xs text-[#4A4C46] leading-relaxed">
              Furniture is experienced through touch and posture. Ergonomic back rake angles, resilient cushion density, and tactile fabrics support everyday family living over years of use.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#EAE3D2] rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF8F2] flex items-center justify-center text-[#193C32]">
              <Maximize2 className="w-5 h-5 text-[#C59A68]" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#193C32]">
              Space Planning
            </h3>
            <p className="text-xs text-[#4A4C46] leading-relaxed">
              Scale determines how spacious a room feels. Proportional seating and floating storage preserve continuous floor visibility and natural walking corridors.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#EAE3D2] rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF8F2] flex items-center justify-center text-[#193C32]">
              <Layers className="w-5 h-5 text-[#C59A68]" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#193C32]">
              Materials and Finishes
            </h3>
            <p className="text-xs text-[#4A4C46] leading-relaxed">
              Natural timber veneers, tactile weaves, and matte protective seals age gracefully, creating authentic patina rather than brittle surface wear.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#EAE3D2] rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF8F2] flex items-center justify-center text-[#193C32]">
              <Compass className="w-5 h-5 text-[#C59A68]" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#193C32]">
              Coordinated Interior Design
            </h3>
            <p className="text-xs text-[#4A4C46] leading-relaxed">
              Harmonizing warm oak timber, forest greens, and ivory lime-washes creates a cohesive residential palette where rooms transition effortlessly into one another.
            </p>
          </div>
        </div>
      </section>

      {/* L. FREQUENTLY ASKED QUESTIONS PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
            Common Inquiries
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#193C32]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4C46]">
            Helpful answers on browsing catalogue concepts, requesting verified pricing, and contacting our showroom.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#EAE3D2] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif text-sm sm:text-base font-semibold text-[#193C32] hover:text-[#C59A68] transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C59A68] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#4A4C46] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#4A4C46] leading-relaxed border-t border-[#FAF8F2] pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => onNavigate('faqs')}
            className="text-xs font-semibold text-[#193C32] hover:text-[#C59A68] underline"
          >
            View All FAQs & Showroom Guidance →
          </button>
        </div>
      </section>

      {/* M. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-2xl bg-[#193C32] text-[#F7F3EA] p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C59A68] block">
              Showroom Consultation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F3EA] text-balance">
              Looking for Furniture for Your Space?
            </h2>
            <p className="text-sm sm:text-base text-[#DCE4DA] leading-relaxed">
              Tell us what you need, and contact our team to discuss furniture options and product details.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C59A68] hover:bg-[#9E7444] text-[#193C32] hover:text-white rounded-xl text-sm font-bold tracking-wide uppercase shadow-lg transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-4 bg-transparent border border-[#DCE4DA]/40 hover:border-white text-[#F7F3EA] rounded-xl text-sm font-semibold transition-colors"
            >
              <span>Send Showroom Message</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#DCE4DA]/70 max-w-md mx-auto pt-2">
            Showroom address: {BUSINESS_INFO.address}
          </p>
        </div>
      </section>
    </div>
  );
};

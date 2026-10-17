import React, { useState } from 'react';
import { Product, PageId } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  ArrowLeft,
  Phone,
  BookmarkPlus,
  Check,
  Send,
  ShieldCheck,
  Ruler,
  Layers,
  HelpCircle
} from 'lucide-react';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: PageId) => void;
  onOpenInquiry: (product: Product) => void;
  onAddToBag: (product: Product) => void;
  onSelectProduct: (productId: string) => void;
  isSavedInBag: boolean;
  savedBagIds: Set<string>;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onNavigate,
  onOpenInquiry,
  onAddToBag,
  onSelectProduct,
  isSavedInBag,
  savedBagIds
}) => {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const [activeImage, setActiveImage] = useState(product.heroImage);

  // Sync active image if product changes
  React.useEffect(() => {
    setActiveImage(product.heroImage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id, product.heroImage]);

  // Related products from same category or general
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.featured)
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Breadcrumb */}
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
        <button
          onClick={() => onNavigate(product.category as PageId)}
          className="hover:text-[#193C32] transition-colors"
        >
          {product.categoryLabel}
        </button>
        <span>/</span>
        <span className="text-[#193C32] font-semibold truncate max-w-xs">{product.title}</span>
      </div>

      {/* Main PDP Grid: Sticky Gallery on Left, Contiguous Module on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-[#EAE3D2] bg-white shadow-sm aspect-4/3">
            <img
              src={activeImage}
              alt={product.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#193C32] text-[#F7F3EA] text-xs font-mono px-3 py-1 rounded-md shadow-xs">
              Ref: {product.refCode}
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {product.galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`relative w-24 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  activeImage === img
                    ? 'border-[#193C32] shadow-sm'
                    : 'border-[#EAE3D2] opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.title} perspective ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Visual Note */}
          <div className="p-4 bg-[#FAF8F2] border border-[#EAE3D2] rounded-xl text-xs text-[#4A4C46] flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C59A68] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Photography represents an illustrative product design concept. Timber coloration, wood knots, and woven fabric textures are tailored to client preferences during showroom order review.
            </p>
          </div>
        </div>

        {/* Right Column: Contiguous Purchase & Inquiry Module */}
        <div className="lg:col-span-5 space-y-6 bg-white border border-[#EAE3D2] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div>
            <div className="flex items-center justify-between text-xs text-[#4A4C46] font-mono mb-2">
              <span>{product.categoryLabel}</span>
              <span className="text-[#9E7444] font-semibold">{product.refCode}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#193C32]">
              {product.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#4A4C46] mt-3 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Pricing Box - Explicitly compliant with instructions */}
          <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#EAE3D2] space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9E7444] block">
              Pricing & Quotation
            </span>
            <div className="font-serif text-lg font-bold text-[#193C32]">
              Price upon Direct Consultation
            </div>
            <p className="text-xs text-[#4A4C46] leading-relaxed">
              Pricing is customized based on your choice of wood species (solid oak, walnut, ash), upholstery grades, and custom room measurements.
            </p>
          </div>

          {/* Availability Box */}
          <div className="p-4 rounded-xl bg-[#DCE4DA]/30 border border-[#B8C8B5] text-xs text-[#193C32] space-y-1">
            <div className="font-semibold flex items-center gap-1.5">
              <span>Availability:</span>
              <span className="font-normal text-[#292A27]">Subject to Showroom Confirmation</span>
            </div>
            <p className="text-[#4A4C46]">
              Contact our Ichhra showroom team to verify current workshop production schedules and physical floor displays.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenInquiry(product)}
              className="w-full py-3.5 px-4 bg-[#193C32] text-[#F7F3EA] rounded-xl font-semibold text-sm hover:bg-[#122922] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Inquire About This Piece</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => onAddToBag(product)}
                className={`py-2.5 px-3 border rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  isSavedInBag
                    ? 'bg-[#193C32] text-[#F7F3EA] border-[#193C32]'
                    : 'bg-[#FAF8F2] text-[#193C32] border-[#EAE3D2] hover:bg-[#EAE3D2]/50'
                }`}
              >
                {isSavedInBag ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>In Bag</span>
                  </>
                ) : (
                  <>
                    <BookmarkPlus className="w-3.5 h-3.5" />
                    <span>Save to Bag</span>
                  </>
                )}
              </button>

              <a
                href={BUSINESS_INFO.phoneLink}
                className="py-2.5 px-3 bg-[#FAF8F2] hover:bg-[#193C32] hover:text-[#F7F3EA] text-[#193C32] border border-[#EAE3D2] rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Showroom</span>
              </a>
            </div>
          </div>

          {/* Specifications Accordions / Sections */}
          <div className="pt-4 border-t border-[#EAE3D2] space-y-4 text-xs">
            {/* Design & Use */}
            <div>
              <h4 className="font-serif font-semibold text-sm text-[#193C32] mb-1.5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C59A68]" />
                <span>Design & Use Philosophy</span>
              </h4>
              <p className="text-[#4A4C46] leading-relaxed">{product.description}</p>
            </div>

            {/* Styling Notes */}
            <div>
              <h4 className="font-serif font-semibold text-sm text-[#193C32] mb-1.5 flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#C59A68]" />
                <span>Dimensions & Proportions</span>
              </h4>
              <p className="text-[#4A4C46] leading-relaxed">{product.dimensionsNote}</p>
            </div>

            {/* Materials & Finishes */}
            <div>
              <h4 className="font-serif font-semibold text-sm text-[#193C32] mb-1.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C59A68]" />
                <span>Material Specifications</span>
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {product.materialOptions.map((mat, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-[#FAF8F2] border border-[#EAE3D2] rounded text-[#4A4C46]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* How to Consult */}
            <div className="pt-2 text-stone-500 flex items-start gap-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#9E7444] shrink-0 mt-0.5" />
              <span>
                Want to see raw timber samples or fabric swatches? Visit our showroom on Saadat Farooq Road, Ichhra, Lahore.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Product Concepts */}
      <div className="space-y-8 pt-8 border-t border-[#EAE3D2]">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-bold text-[#193C32]">
            Related Furniture Concepts
          </h3>
          <button
            type="button"
            onClick={() => onNavigate('shop')}
            className="text-xs font-semibold text-[#193C32] hover:text-[#C59A68] transition-colors"
          >
            View All Pieces →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((rel) => (
            <ProductCard
              key={rel.id}
              product={rel}
              onViewDetails={onSelectProduct}
              onQuickInquire={onOpenInquiry}
              onAddToBag={onAddToBag}
              isSavedInBag={savedBagIds.has(rel.id)}
            />
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="pt-4">
        <button
          type="button"
          onClick={() => onNavigate('shop')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#193C32] hover:text-[#C59A68]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Furniture Catalogue</span>
        </button>
      </div>
    </div>
  );
};

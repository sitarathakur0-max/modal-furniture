import React, { useState } from 'react';
import { Product } from '../types';
import { ArrowUpRight, MessageSquarePlus, BookmarkPlus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (productId: string) => void;
  onQuickInquire: (product: Product) => void;
  onAddToBag: (product: Product) => void;
  isSavedInBag?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onQuickInquire,
  onAddToBag,
  isSavedInBag = false
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col bg-white border border-[#EAE3D2] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      {/* Image container */}
      <div
        className="relative w-full aspect-4/3 bg-[#FAF8F2] overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(product.id)}
      >
        {!imageError ? (
          <img
            src={product.heroImage}
            alt={product.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#FAF8F2] border-b border-[#EAE3D2]">
            <span className="font-serif text-sm text-[#193C32] font-semibold">{product.title}</span>
            <span className="text-xs text-[#9E7444] font-mono mt-1">{product.refCode}</span>
          </div>
        )}

        {/* Quick add bookmark affordance */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onAddToBag(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-colors shadow-xs ${
            isSavedInBag
              ? 'bg-[#193C32] text-[#F7F3EA]'
              : 'bg-white/90 text-[#292A27] hover:bg-[#193C32] hover:text-[#F7F3EA]'
          }`}
          title={isSavedInBag ? 'Saved in Inquiry Bag' : 'Save to Inquiry Bag'}
          aria-label={isSavedInBag ? 'Piece in Bag' : 'Add to Bag'}
        >
          {isSavedInBag ? <Check className="w-3.5 h-3.5" /> : <BookmarkPlus className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Card Details */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          {/* Metadata: Unboxed quiet text with separators */}
          <div className="flex items-center gap-2 text-xs text-[#4A4C46] mb-1.5 font-mono">
            <span>{product.refCode}</span>
            <span aria-hidden="true" className="text-[#9E7444]">·</span>
            <span>{product.categoryLabel}</span>
          </div>

          <h3
            onClick={() => onViewDetails(product.id)}
            className="font-serif text-base sm:text-lg font-semibold text-[#193C32] hover:text-[#C59A68] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {product.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#4A4C46] mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="mt-3 text-xs text-[#9E7444] font-medium flex items-center gap-1.5">
            <span>Pricing upon verified showroom inquiry</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-3.5 border-t border-[#FAF8F2] flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onViewDetails(product.id)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#193C32] hover:text-[#C59A68] transition-colors group/btn"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => onQuickInquire(product)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F2] hover:bg-[#193C32] hover:text-[#F7F3EA] text-[#193C32] border border-[#EAE3D2] rounded-lg text-xs font-medium transition-colors"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span>Inquire</span>
          </button>
        </div>
      </div>
    </article>
  );
};

import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.refCode.toLowerCase().includes(term) ||
        p.categoryLabel.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#FAF8F2] border border-[#EAE3D2] rounded-xl shadow-2xl overflow-hidden text-[#292A27]"
        role="dialog"
        aria-modal="true"
        aria-label="Search Catalogue"
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#EAE3D2] bg-white">
          <Search className="w-5 h-5 text-[#9E7444] shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by furniture name, category, or ref code (e.g. Sofa, Bed, MOD-SOF)..."
            className="flex-1 text-sm sm:text-base bg-transparent border-none outline-none text-[#292A27] placeholder:text-stone-400"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#4A4C46] hover:text-[#193C32] rounded transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {searchTerm.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#4A4C46] space-y-2">
              <p>Type to search contemporary pieces, beds, seating, and storage.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['Sofa', 'Bed', 'Dining', 'Wardrobe', 'Coffee Table', 'MOD-SOF-01'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-2.5 py-1 text-xs bg-white border border-[#EAE3D2] rounded-md hover:border-[#193C32] hover:text-[#193C32] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#4A4C46]">
              No matching pieces found for "{searchTerm}".
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-mono text-[#9E7444] px-2 mb-2">
                Found {filteredProducts.length} matching piece{filteredProducts.length > 1 ? 's' : ''}:
              </p>
              {filteredProducts.map((product: Product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product.id);
                    onClose();
                  }}
                  className="flex items-center gap-3.5 p-3 rounded-lg bg-white border border-[#EAE3D2] hover:border-[#193C32] cursor-pointer transition-colors group"
                >
                  <img
                    src={product.heroImage}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 object-cover rounded-md border border-[#EAE3D2] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-[#4A4C46] font-mono">
                      <span>{product.refCode}</span>
                      <span>·</span>
                      <span>{product.categoryLabel}</span>
                    </div>
                    <h4 className="font-serif text-sm font-semibold text-[#193C32] group-hover:text-[#C59A68] transition-colors truncate">
                      {product.title}
                    </h4>
                    <p className="text-xs text-[#4A4C46] truncate">{product.shortDescription}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#193C32] group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

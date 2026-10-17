import React, { useState, useMemo } from 'react';
import { Product, ProductCategory, PageId } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface ShopPageProps {
  onSelectProduct: (productId: string) => void;
  onQuickInquire: (product: Product) => void;
  onAddToBag: (product: Product) => void;
  savedBagIds: Set<string>;
  onNavigate: (page: PageId) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onSelectProduct,
  onQuickInquire,
  onAddToBag,
  savedBagIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'title-asc' | 'title-desc'>('featured');

  const categories: Array<{ id: ProductCategory | 'all'; label: string }> = [
    { id: 'all', label: 'All Collections' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining', label: 'Dining' },
    { id: 'storage', label: 'Storage & Wardrobes' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.refCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      if (sortBy === 'title-desc') return b.title.localeCompare(a.title);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Title & Introduction */}
      <div className="max-w-2xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E7444] block">
          Full Showroom Catalogue
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#193C32]">
          Shop All Furniture
        </h1>
        <p className="text-sm sm:text-base text-[#4A4C46] leading-relaxed">
          Explore contemporary furniture pieces conceived for living spaces, bedrooms, dining suites, and built-in storage. Each design is an illustrative concept available for custom timber and dimension specification.
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white border border-[#EAE3D2] rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
        {/* Top Filter Row: Search & Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#9E7444] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by piece name, category, or reference code..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#FAF8F2] border border-[#EAE3D2] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#193C32] text-[#292A27]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#4A4C46] hover:text-[#193C32]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <SlidersHorizontal className="w-4 h-4 text-[#4A4C46]" />
            <label className="text-xs font-medium text-[#4A4C46]">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs bg-[#FAF8F2] border border-[#EAE3D2] rounded-lg px-2.5 py-2 text-[#292A27] focus:outline-none focus:ring-1 focus:ring-[#193C32]"
            >
              <option value="featured">Featured Concepts</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
            </select>
          </div>
        </div>

        {/* Category Segmented Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#FAF8F2]">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#193C32] text-[#F7F3EA] shadow-xs'
                    : 'bg-[#FAF8F2] text-[#4A4C46] hover:bg-[#EAE3D2]/50 hover:text-[#193C32]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Metrics */}
      <div className="flex items-center justify-between text-xs text-[#4A4C46] px-1 font-mono">
        <span>
          Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} catalogue pieces
        </span>
        {(selectedCategory !== 'all' || searchQuery.trim() !== '' || sortBy !== 'featured') && (
          <button
            type="button"
            onClick={handleResetFilters}
            className="flex items-center gap-1 text-[#193C32] hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center bg-white border border-[#EAE3D2] rounded-xl space-y-4">
          <p className="font-serif text-lg text-[#193C32]">No furniture pieces match your search</p>
          <p className="text-xs text-[#4A4C46] max-w-sm mx-auto">
            Try adjusting your search criteria or reset filters to see all available catalogue concepts.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-4 py-2 bg-[#193C32] text-[#F7F3EA] text-xs font-medium rounded-lg hover:bg-[#122922]"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
      )}

      {/* Catalogue Notice Footer */}
      <div className="p-6 bg-[#FAF8F2] border border-[#EAE3D2] rounded-xl text-xs text-[#4A4C46] space-y-2">
        <h4 className="font-serif text-sm font-semibold text-[#193C32]">
          Catalogue Consultation Note
        </h4>
        <p className="leading-relaxed">
          All images and product references above represent proposed furniture designs. Prices, exact wood species (oak, walnut, teak, ash), fabric weight, and physical showroom availability are confirmed on a per-order basis with Modal Furniture in Ichhra, Lahore.
        </p>
      </div>
    </div>
  );
};

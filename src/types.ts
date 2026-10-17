export type ProductCategory = 'living-room' | 'bedroom' | 'dining' | 'storage';

export interface Product {
  id: string;
  refCode: string;
  title: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  stylingTips: string;
  designNotes: string;
  dimensionsNote: string;
  materialOptions: string[];
  featured?: boolean;
}

export interface InquiryItem {
  id: string;
  refCode: string;
  title: string;
  category: string;
  image: string;
}

export type PageId =
  | 'home'
  | 'shop'
  | 'living-room'
  | 'bedroom'
  | 'dining'
  | 'storage'
  | 'product-details'
  | 'about'
  | 'buying-guide'
  | 'faqs'
  | 'contact'
  | 'privacy'
  | 'terms';

import { Product } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_modal_living_room_1792237509938.jpg';
export const SOFA_SECTIONAL_IMAGE = '/src/assets/images/category_sofas_sectional_1792237510044.jpg';
export const WOODEN_BED_IMAGE = '/src/assets/images/category_wooden_bed_1792237510888.jpg';
export const DINING_TABLE_IMAGE = '/src/assets/images/category_dining_table_1792237510788.jpg';
export const WARDROBE_STORAGE_IMAGE = '/src/assets/images/category_wardrobe_storage_1792237513103.jpg';
export const ACCENT_CHAIR_IMAGE = '/src/assets/images/inspiration_compact_lounge_1792237512234.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'oakline-contemporary-bed',
    refCode: 'MOD-BED-01',
    title: 'Oakline Contemporary Bed',
    category: 'bedroom',
    categoryLabel: 'Bedroom Furniture',
    shortDescription: 'Solid natural oak bed frame with a fluted vertical timber headboard and floating base geometry.',
    description: 'The Oakline Bed presents clean horizontal lines balanced by a warm fluted timber headboard. Conceived as a calm architectural centerpiece, the natural oak tone brings grounded organic warmth to master bedrooms.',
    heroImage: WOODEN_BED_IMAGE,
    galleryImages: [WOODEN_BED_IMAGE, HERO_IMAGE],
    stylingTips: 'Pair with warm washed linen bedding in oat or chalk tones and minimal bedside illumination.',
    designNotes: 'Grounded architectural plinth base with acoustic timber fluting along the headboard panel.',
    dimensionsNote: 'Standard King / Queen footprints available upon inquiry; exact custom outer measurements provided during consultation.',
    materialOptions: ['Solid Oak Core', 'Natural Wood Veneer', 'Matte Protective Finish'],
    featured: true
  },
  {
    id: 'haven-three-seater-sofa',
    refCode: 'MOD-SOF-01',
    title: 'Haven Three-Seater Sofa',
    category: 'living-room',
    categoryLabel: 'Living Room Seating',
    shortDescription: 'Deep forest green tailored upholstery with generous proportions and supportive foam-core cushions.',
    description: 'An elegant focal piece for contemporary living spaces. The Haven Three-Seater combines a low profile with substantial seating depth, tailored piped edges, and durable woven fabric designed for daily comfort.',
    heroImage: HERO_IMAGE,
    galleryImages: [HERO_IMAGE, SOFA_SECTIONAL_IMAGE],
    stylingTips: 'Complements light oak accent tables, textured wool rugs, and warm natural lighting.',
    designNotes: 'Subtle track arms with continuous upholstery wrap and recessed structural timber footing.',
    dimensionsNote: 'Three-seater configuration; detailed seating depth and width confirmed upon order inquiry.',
    materialOptions: ['Forest Green Woven Fabric', 'High-Density Foam Layering', 'Solid Hardwood Sub-Frame'],
    featured: true
  },
  {
    id: 'alder-wooden-dining-table',
    refCode: 'MOD-DIN-01',
    title: 'Alder Wooden Dining Table',
    category: 'dining',
    categoryLabel: 'Dining Room',
    shortDescription: 'Substantial rectangular dining table crafted with natural oak grain and clean slab-leg architecture.',
    description: 'Designed to host family gatherings and intimate meals alike. The Alder Dining Table highlights natural wood figure through a smooth oiled surface supported by architectural slab trestles.',
    heroImage: DINING_TABLE_IMAGE,
    galleryImages: [DINING_TABLE_IMAGE, HERO_IMAGE],
    stylingTips: 'Style with organic stoneware, subtle brass pendant lighting, and warm textured dining chairs.',
    designNotes: 'Sturdy slab base with chamfered edge profiling to soften tactile transitions.',
    dimensionsNote: 'Seating capacity and tabletop lengths (6-seater / 8-seater) confirmed upon customer consultation.',
    materialOptions: ['Selected Natural Oak', 'Treated Water-Resistant Matte Poly', 'Interlocking Joinery'],
    featured: true
  },
  {
    id: 'solace-upholstered-bed',
    refCode: 'MOD-BED-02',
    title: 'Solace Upholstered Bed',
    category: 'bedroom',
    categoryLabel: 'Bedroom Furniture',
    shortDescription: 'Soft-touch upholstered platform bed with an oversized padded wing headboard and neutral linen finish.',
    description: 'The Solace Bed offers an enveloping sanctuary for rest. Generously cushioned headboard panels provide ergonomic back support for evening reading, resting gently on a slim upholstered surround.',
    heroImage: WOODEN_BED_IMAGE,
    galleryImages: [WOODEN_BED_IMAGE, SOFA_SECTIONAL_IMAGE],
    stylingTips: 'Layer with neutral tone-on-tone blankets and tactile throw cushions.',
    designNotes: 'Segmented cushioned backrest with hidden steel structural reinforcement.',
    dimensionsNote: 'Dimensions tailored to client mattress thickness upon direct measurement check.',
    materialOptions: ['Textured Linen-Blend', 'Foam Padding', 'Reinforced Platform Slat Foundation'],
    featured: true
  },
  {
    id: 'forma-coffee-table',
    refCode: 'MOD-COF-01',
    title: 'Forma Coffee Table',
    category: 'living-room',
    categoryLabel: 'Living Room Tables',
    shortDescription: 'Organic rounded low coffee table with soft contours and natural oak grain finish.',
    description: 'A tactile centerpiece for the modern lounge. The Forma Coffee Table departs from rigid sharp corners in favor of a soft curvilinear silhouette that facilitates seamless foot traffic in living rooms.',
    heroImage: HERO_IMAGE,
    galleryImages: [HERO_IMAGE, ACCENT_CHAIR_IMAGE],
    stylingTips: 'Keep surface styling intentional with two to three art books and a textured ceramic bowl.',
    designNotes: 'Dual sculpted pedestal supports anchored beneath a smooth rounded tabletop.',
    dimensionsNote: 'Low lounge height; specific surface area measurements provided upon inquiry.',
    materialOptions: ['Natural Oak Top', 'Sculpted Solid Legs', 'Satin Wax Seal'],
    featured: true
  },
  {
    id: 'luma-dressing-table',
    refCode: 'MOD-DRS-01',
    title: 'Luma Dressing Table',
    category: 'bedroom',
    categoryLabel: 'Dressing & Storage',
    shortDescription: 'Contemporary vanity console featuring integrated charcoal drawer fronts and circular framed vanity mirror.',
    description: 'A dedicated preparation zone designed for modern bedroom suites. The Luma Dressing Table pairs natural warm oak wood with quiet charcoal drawer fronts and a softly backlit circular mirror arrangement.',
    heroImage: WARDROBE_STORAGE_IMAGE,
    galleryImages: [WARDROBE_STORAGE_IMAGE, WOODEN_BED_IMAGE],
    stylingTips: 'Add a minimalist low-back timber stool and soft directional warm lighting.',
    designNotes: 'Soft-close hidden drawer runners with discreet under-bevel finger pulls.',
    dimensionsNote: 'Wall-affixed or freestanding arrangements discussed according to bedroom wall clearances.',
    materialOptions: ['Oak Veneer', 'Matte Charcoal MDF Lacquer', 'Anti-Glare High-Definition Mirror Glass'],
    featured: true
  },
  {
    id: 'grove-storage-wardrobe',
    refCode: 'MOD-WAR-01',
    title: 'Grove Storage Wardrobe',
    category: 'storage',
    categoryLabel: 'Storage & Wardrobes',
    shortDescription: 'Modular tall wardrobe system combining enclosed oak cabinetry with open display cubbies and drawers.',
    description: 'A comprehensive storage concept designed to bring effortless order to personal wardrobes. Features floor-to-ceiling proportions, customized hanging rails, internal accessory drawers, and built-in vanity integration.',
    heroImage: WARDROBE_STORAGE_IMAGE,
    galleryImages: [WARDROBE_STORAGE_IMAGE, DINING_TABLE_IMAGE],
    stylingTips: 'Utilize warm internal strip lighting to illuminate shelving and hanging bays.',
    designNotes: 'Full-height vertical doors with concealed European soft-close hinges and integrated recessed channels.',
    dimensionsNote: 'Custom-built modular dimensions; on-site wall measurements confirmed prior to production.',
    materialOptions: ['Engineered Core with Natural Oak Veneer', 'Charcoal Drawer Facings', 'Heavy-Duty Hardware'],
    featured: true
  },
  {
    id: 'haven-accent-chair',
    refCode: 'MOD-CHR-01',
    title: 'Haven Accent Chair',
    category: 'living-room',
    categoryLabel: 'Living Room Seating',
    shortDescription: 'Curved barrel armchair upholstered in rich olive-forest velvet with solid walnut tapered legs.',
    description: 'The Haven Accent Chair brings sculptural interest and cozy personal seating to apartment corners, reading nooks, or fireside sitting arrangements. Its wraparound backrest embraces you naturally.',
    heroImage: ACCENT_CHAIR_IMAGE,
    galleryImages: [ACCENT_CHAIR_IMAGE, HERO_IMAGE],
    stylingTips: 'Position next to a slender timber reading table and a floor lamp for a restful reading zone.',
    designNotes: 'Sculptural curved shell with resilient high-rebound cushioning and angled solid timber legs.',
    dimensionsNote: 'Compact armchair footprint; exact clearance and seat height provided upon inquiry.',
    materialOptions: ['Rich Forest Velvet / Woven Wool', 'Solid Hardwood Legs', 'Polyurethane Foam Padding'],
    featured: true
  },
  {
    id: 'sylvan-l-shaped-sectional',
    refCode: 'MOD-SOF-02',
    title: 'Sylvan L-Shaped Sectional',
    category: 'living-room',
    categoryLabel: 'Living Room Seating',
    shortDescription: 'Spacious corner sectional in warm ivory linen weave with integrated low side shelving.',
    description: 'A versatile modular sectional crafted for open-plan living rooms. Features deep low seating, wide armrests, and an extended chaise for relaxed lounging with family and guests.',
    heroImage: SOFA_SECTIONAL_IMAGE,
    galleryImages: [SOFA_SECTIONAL_IMAGE, HERO_IMAGE],
    stylingTips: 'Anchor with a large low-pile woven rug in natural beige or warm grey tones.',
    designNotes: 'Reversible modular layout with concealed connector brackets and heavy-gauge sinuous spring suspension.',
    dimensionsNote: 'Left or right chaise configuration selected during custom inquiry.',
    materialOptions: ['Linen-Cotton Blend Fabric', 'Dual-Density Foam Cushions', 'Kiln-Dried Hardwood Frame']
  },
  {
    id: 'kanso-fluted-tv-console',
    refCode: 'MOD-MED-01',
    title: 'Kanso Fluted TV Console',
    category: 'living-room',
    categoryLabel: 'Media & Consoles',
    shortDescription: 'Low architectural media unit with fluted oak sliding tambour doors and cable management vents.',
    description: 'Clean architectural containment for living room media and accessories. The Kanso console conceals electronics behind delicately fluted sliding wood panels while maintaining remote control signal pass-through.',
    heroImage: HERO_IMAGE,
    galleryImages: [HERO_IMAGE, WARDROBE_STORAGE_IMAGE],
    stylingTips: 'Style with a low ceramic vase or leave clear to emphasize the beautiful grain lines.',
    designNotes: 'Integrated ventilation cutaways and internal adjustable shelving.',
    dimensionsNote: 'Designed to accommodate 55" to 75" screens; exact length confirmed upon request.',
    materialOptions: ['Natural Oak Tambour', 'Reinforced Base', 'Soft-Gliding Track System']
  },
  {
    id: 'eos-minimalist-bedside-table',
    refCode: 'MOD-NIT-01',
    title: 'Eos Minimalist Bedside Table',
    category: 'bedroom',
    categoryLabel: 'Bedroom Tables',
    shortDescription: 'Wall-mounted or freestanding floating oak drawer with beveled handle-free edge.',
    description: 'Keep nightstand surfaces calm and uncluttered. The Eos Bedside Table provides quiet storage for books and personal items, maintaining an airy floating appearance beside low platform beds.',
    heroImage: WOODEN_BED_IMAGE,
    galleryImages: [WOODEN_BED_IMAGE, ACCENT_CHAIR_IMAGE],
    stylingTips: 'Mount at mattress height for easy access to bedside reading lamps and charging cords.',
    designNotes: 'Concealed push-to-open drawer hardware and robust wall anchorage plates.',
    dimensionsNote: 'Single or dual drawer configurations available upon order inquiry.',
    materialOptions: ['Solid Oak Face', 'Dampened Soft-Close Drawer Rails', 'Zero-VOC Protective Finish']
  },
  {
    id: 'miran-sculptural-dining-chairs',
    refCode: 'MOD-CHR-02',
    title: 'Miran Sculptural Dining Chairs',
    category: 'dining',
    categoryLabel: 'Dining Room Seating',
    shortDescription: 'Set of ergonomic dining chairs featuring steam-bent curved wood backrests and warm padded seats.',
    description: 'Crafted for prolonged dinner conversations and everyday family meals. The Miran chair combines steam-bent comfort with solid oak joinery that harmonizes with contemporary dining tables.',
    heroImage: DINING_TABLE_IMAGE,
    galleryImages: [DINING_TABLE_IMAGE, ACCENT_CHAIR_IMAGE],
    stylingTips: 'Pair with the Alder Dining Table or mix with upholstered end chairs for visual rhythm.',
    designNotes: 'Mortise-and-tenon construction with curved lumbar support rail.',
    dimensionsNote: 'Standard dining height (seat height ~45cm); set sizes (4, 6, 8) configured upon inquiry.',
    materialOptions: ['Solid Oak Frame', 'Textured Neutral Seat Upholstery', 'Felt Floor Glides']
  }
];

export const CATEGORIES = [
  {
    id: 'living-room',
    title: 'Living Room',
    subtitle: 'Sofas, Sectionals & Accent Tables',
    description: 'Thoughtfully proportioned seating, coffee tables, and media consoles designed for comfort and everyday hospitality.',
    image: HERO_IMAGE
  },
  {
    id: 'bedroom',
    title: 'Bedroom Furniture',
    subtitle: 'Beds, Headboards & Nightstands',
    description: 'Calm, architectural sleeping spaces with natural wood platforms, fluted headboards, and integrated bedside pieces.',
    image: WOODEN_BED_IMAGE
  },
  {
    id: 'dining',
    title: 'Dining Room',
    subtitle: 'Dining Tables & Sculptural Seating',
    description: 'Solid oak dining tables and comfortable chairs crafted for daily family meals and shared celebrations.',
    image: DINING_TABLE_IMAGE
  },
  {
    id: 'storage',
    title: 'Storage & Wardrobes',
    subtitle: 'Custom Cabinetry & Dressers',
    description: 'Streamlined wardrobes, dressing consoles, and storage systems that bring visual calm and functional organization.',
    image: WARDROBE_STORAGE_IMAGE
  }
];

export const BUSINESS_INFO = {
  name: 'Modal Furniture',
  category: 'Furniture Store',
  phone: '+92 301 4443700',
  phoneLink: 'tel:+923014443700',
  address: '28 Saadat Farooq Road, near Shama Cinema, Ichhra, Lahore, Punjab, Pakistan',
  facebook: 'https://www.facebook.com/modelfurniture',
  statusNote: 'Illustrative catalogue concepts. Specifications, availability, and pricing are confirmed directly with our showroom team.'
};

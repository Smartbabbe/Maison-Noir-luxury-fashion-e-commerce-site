export interface Product {
  id: number
  name: string
  subtitle: string
  price: number
  originalPrice?: number
  category: string
  description: string
  details: string[]
  sizes: string[]
  colors: { name: string; hex: string }[]
  badge?: string
  image: string
  images: string[]
  featured?: boolean
}

// Using Unsplash for fashion images
const BASE = 'https://images.unsplash.com'

export const products: Product[] = [
  {
    id: 1,
    name: 'The Obsidian Trench',
    subtitle: 'Double-breasted wool overcoat',
    price: 1890,
    category: 'Outerwear',
    description: 'An architectural masterpiece in pure Merino wool. Clean lines, deliberate structure, and a weight that speaks of intention. Designed for those who understand that true luxury is felt, not seen.',
    details: [
      '100% Merino Wool, 600g weight',
      'Double-breasted, 6-button closure',
      'Fully lined in Italian silk-blend',
      'Hand-stitched lapels',
      'Dry clean only',
      'Made in Italy',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Obsidian', hex: '#1a1a1a' },
      { name: 'Camel', hex: '#c19a6b' },
      { name: 'Ivory', hex: '#f5f0e8' },
    ],
    badge: 'Bestseller',
    image: `${BASE}/photo-1539533113208-f6df8cc8b543?w=800&q=80`,
    images: [
      `${BASE}/photo-1539533113208-f6df8cc8b543?w=800&q=80`,
      `${BASE}/photo-1594938298603-c8148c4b4e4d?w=800&q=80`,
      `${BASE}/photo-1591047139829-d91aecb6caea?w=800&q=80`,
      `${BASE}/photo-1512436991641-6745cdb1723f?w=800&q=80`,
    ],
    featured: true,
  },
  {
    id: 2,
    name: 'Silk Column Dress',
    subtitle: 'Floor-length bias-cut silk',
    price: 1240,
    category: 'Dresses',
    description: 'Pure silk charmeuse falls in an uninterrupted column from shoulder to floor. Minimal seaming, zero distraction. The kind of garment that makes a room go quiet.',
    details: [
      '100% Silk Charmeuse',
      'Bias cut for fluid drape',
      'Adjustable spaghetti straps',
      'Hidden side zip',
      'Dry clean only',
      'Made in France',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Midnight', hex: '#0d0d1a' },
      { name: 'Champagne', hex: '#f0e6c8' },
      { name: 'Bordeaux', hex: '#5c1a2a' },
    ],
    image: `${BASE}/photo-1515886657613-9f3515b0c78f?w=800&q=80`,
    images: [
      `${BASE}/photo-1515886657613-9f3515b0c78f?w=800&q=80`,
      `${BASE}/photo-1469334031218-e382a71b716b?w=800&q=80`,
      `${BASE}/photo-1509631179647-0177331693ae?w=800&q=80`,
    ],
  },
  {
    id: 3,
    name: 'The Sovereign Blazer',
    subtitle: 'Structured single-breasted',
    price: 980,
    originalPrice: 1200,
    category: 'Tailoring',
    description: 'Power re-imagined. A blazer that holds its shape so you don\'t have to try. Crafted from a wool-mohair blend that catches light like no other fabric.',
    details: [
      '80% Wool, 20% Mohair',
      'Single-breasted, 2-button',
      'Padded shoulders, structured chest',
      'Two front flap pockets',
      'Dry clean only',
      'Made in England',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Charcoal', hex: '#2d2d2d' },
      { name: 'Ecru', hex: '#f0ebe0' },
      { name: 'Forest', hex: '#1e2d1e' },
    ],
    badge: 'Sale',
    image: `${BASE}/photo-1507679799987-c73779587ccf?w=800&q=80`,
    images: [
      `${BASE}/photo-1507679799987-c73779587ccf?w=800&q=80`,
      `${BASE}/photo-1555069519-127aadecd574?w=800&q=80`,
      `${BASE}/photo-1519085360753-af0119f7cbe7?w=800&q=80`,
    ],
  },
  {
    id: 4,
    name: 'Cashmere Turtleneck',
    subtitle: 'Grade-A Scottish cashmere',
    price: 620,
    category: 'Knitwear',
    description: 'Grade-A Scottish cashmere, double-ply for substance without bulk. A turtleneck that becomes the quiet foundation of every great outfit.',
    details: [
      '100% Grade-A Scottish Cashmere',
      'Double-ply construction',
      'Ribbed turtleneck and cuffs',
      'Hand wash cold',
      'Made in Scotland',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Onyx', hex: '#1c1c1c' },
      { name: 'Stone', hex: '#9e9189' },
      { name: 'Oat', hex: '#e8dfd0' },
      { name: 'Rust', hex: '#8b3a2a' },
    ],
    image: `${BASE}/photo-1576566588028-4147f3842f27?w=800&q=80`,
    images: [
      `${BASE}/photo-1576566588028-4147f3842f27?w=800&q=80`,
      `${BASE}/photo-1434389677669-e08b4cac3105?w=800&q=80`,
    ],
  },
  {
    id: 5,
    name: 'Wide Leg Trousers',
    subtitle: 'Italian wool-blend suiting',
    price: 740,
    category: 'Trousers',
    description: 'Italian wool suiting with a drape that makes movement look choreographed. High-rise, wide-leg, architectural — the trouser that finishes every look.',
    details: [
      '70% Wool, 30% Polyester',
      'High-rise waistband',
      'Wide leg, 32" inseam',
      'Side zip closure',
      'Dry clean only',
      'Made in Italy',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#0a0a0a' },
      { name: 'Cream', hex: '#f5f0e5' },
      { name: 'Taupe', hex: '#8a7d6b' },
    ],
    image: `${BASE}/photo-1509631179647-0177331693ae?w=800&q=80`,
    images: [
      `${BASE}/photo-1509631179647-0177331693ae?w=800&q=80`,
      `${BASE}/photo-1594938298603-c8148c4b4e4d?w=800&q=80`,
    ],
  },
  {
    id: 6,
    name: 'The Noir Leather Jacket',
    subtitle: 'Full-grain lambskin leather',
    price: 2200,
    category: 'Outerwear',
    description: 'Full-grain lambskin so supple it moves like a second skin. No unnecessary hardware, no trend-chasing. Just the most perfect leather jacket you\'ll ever own.',
    details: [
      '100% Full-grain Lambskin',
      'YKK zip closure',
      'Two exterior zip pockets',
      'Fully lined in silk',
      'Professional leather clean only',
      'Made in Spain',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#0a0a0a' },
      { name: 'Cognac', hex: '#8b5e3c' },
    ],
    badge: 'New',
    image: `${BASE}/photo-1551028719-00167b16eac5?w=800&q=80`,
    images: [
      `${BASE}/photo-1551028719-00167b16eac5?w=800&q=80`,
      `${BASE}/photo-1591047139829-d91aecb6caea?w=800&q=80`,
    ],
  },
  {
    id: 7,
    name: 'Linen Maxi Shirt',
    subtitle: 'Stonewashed Belgian linen',
    price: 380,
    category: 'Tops',
    description: 'Stonewashed Belgian linen that gets better with every wash. Oversized, relaxed, and impossibly cool — the summer shirt that works in every season.',
    details: [
      '100% Belgian Linen',
      'Stonewashed finish',
      'Relaxed fit, drop shoulder',
      'Mother-of-pearl buttons',
      'Machine wash cold',
      'Made in Portugal',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#f8f4ee' },
      { name: 'Sand', hex: '#c4b090' },
      { name: 'Sky', hex: '#8bafc0' },
    ],
    image: `${BASE}/photo-1564584217132-2271feaeb3c5?w=800&q=80`,
    images: [
      `${BASE}/photo-1564584217132-2271feaeb3c5?w=800&q=80`,
      `${BASE}/photo-1434389677669-e08b4cac3105?w=800&q=80`,
    ],
  },
  {
    id: 8,
    name: 'Mini Slip Dress',
    subtitle: 'Charmeuse silk mini',
    price: 680,
    category: 'Dresses',
    description: 'The perfectly proportioned mini in silk charmeuse. Wears alone, layers under everything. The piece that makes getting dressed effortless.',
    details: [
      '100% Silk Charmeuse',
      'Mini length, 32" from shoulder',
      'V-neck, adjustable straps',
      'Bias cut panels',
      'Dry clean only',
      'Made in France',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Black', hex: '#0a0a0a' },
      { name: 'Gold', hex: '#c9a84c' },
      { name: 'Blush', hex: '#d4a0a0' },
    ],
    badge: 'New',
    image: `${BASE}/photo-1485968579580-b6d095142e6e?w=800&q=80`,
    images: [
      `${BASE}/photo-1485968579580-b6d095142e6e?w=800&q=80`,
      `${BASE}/photo-1515886657613-9f3515b0c78f?w=800&q=80`,
    ],
  },
]

export const categories = ['All', 'Outerwear', 'Dresses', 'Tailoring', 'Knitwear', 'Trousers', 'Tops']

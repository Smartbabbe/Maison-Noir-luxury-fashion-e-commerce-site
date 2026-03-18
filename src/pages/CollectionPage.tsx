import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { products, categories, Product } from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'

export default function CollectionPage() {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filtered = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('!opacity-100', '!translate-y-0')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [filtered])

  return (
    <div className={`min-h-screen pt-20 ${dark ? 'bg-noir-900 text-noir-50' : 'bg-white text-noir-900'}`}>

      {/* Header */}
      <div className={`py-16 md:py-20 border-b ${dark ? 'border-white/5' : 'border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="section-label mb-3">SS 2025</p>
          <h1 className={`font-display text-5xl md:text-7xl font-light ${dark ? 'text-noir-50' : 'text-noir-900'}`}>
            The Collection
          </h1>
          <p className={`font-body text-sm mt-4 ${dark ? 'text-noir-400' : 'text-noir-500'}`}>
            {filtered.length} pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs tracking-widest uppercase px-4 py-2 border transition-all ${
                  activeCategory === cat
                    ? 'bg-gold border-gold text-noir-900'
                    : dark
                      ? 'border-white/10 text-noir-400 hover:border-gold hover:text-gold'
                      : 'border-black/10 text-noir-500 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className={`font-body text-xs tracking-wider border px-4 py-2 focus:outline-none focus:border-gold transition-colors ${
              dark
                ? 'bg-noir-900 border-white/10 text-noir-300'
                : 'bg-white border-black/10 text-noir-600'
            }`}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${(i % 8) * 0.05}s` }}
            >
              <ProductCard product={product} onClick={setSelectedProduct} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className={`font-display text-2xl font-light ${dark ? 'text-noir-400' : 'text-noir-500'}`}>
              No pieces in this category yet.
            </p>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  )
}

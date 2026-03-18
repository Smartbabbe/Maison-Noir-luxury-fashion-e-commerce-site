import { useState } from 'react'
import { Product } from '../data/products'
import { useTheme } from '../context/ThemeContext'

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const { theme } = useTheme()
  const dark = theme === 'dark'
  const [hovered, setHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div
      className={`group cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(product)}
    >
      {/* Image */}
      <div className={`relative overflow-hidden aspect-[3/4] ${dark ? 'bg-noir-800' : 'bg-noir-100'}`}>
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        )}
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
        />

        {/* Overlay */}
        <div className={`absolute inset-0 bg-noir-900/20 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-4 left-4 font-body text-[10px] tracking-widest uppercase px-3 py-1.5 ${
            product.badge === 'Sale' ? 'bg-red-900/80 text-red-200' :
            product.badge === 'New' ? 'bg-gold text-noir-900' :
            'bg-noir-900/80 text-gold border border-gold/30'
          }`}>
            {product.badge}
          </div>
        )}

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={(e) => { e.stopPropagation(); onClick(product) }}
            className="w-full bg-noir-900/90 text-noir-50 font-body text-[10px] tracking-widest uppercase py-3 hover:bg-gold hover:text-noir-900 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className={`font-display text-lg font-light leading-tight ${dark ? 'text-noir-50' : 'text-noir-900'}`}>
              {product.name}
            </h3>
            <p className={`font-body text-xs tracking-wider mt-0.5 ${dark ? 'text-noir-400' : 'text-noir-500'}`}>
              {product.subtitle}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            {product.originalPrice && (
              <p className={`font-body text-xs line-through ${dark ? 'text-noir-500' : 'text-noir-400'}`}>
                ${product.originalPrice.toLocaleString()}
              </p>
            )}
            <p className={`font-body text-sm font-medium ${product.originalPrice ? 'text-gold' : dark ? 'text-noir-100' : 'text-noir-800'}`}>
              ${product.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Color dots */}
        <div className="flex gap-1.5 pt-1">
          {product.colors.map(color => (
            <div
              key={color.name}
              title={color.name}
              className="w-3 h-3 rounded-full border border-white/20"
              style={{ background: color.hex }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

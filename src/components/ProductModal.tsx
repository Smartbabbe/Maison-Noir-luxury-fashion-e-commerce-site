import { useState, useEffect } from 'react'
import { Product } from '../data/products'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { theme } = useTheme()
  const { addItem } = useCart()
  const dark = theme === 'dark'
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)

  useEffect(() => {
    if (product) {
      setSelectedSize('')
      setSelectedColor(0)
      setSelectedImage(0)
      setQuantity(1)
      setAdded(false)
      document.body.style.overflow = 'hidden'
    }
    return () => { document.body.style.overflow = '' }
  }, [product])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!product) return null

  const handleAddToCart = () => {
    if (!selectedSize) return
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: product.colors[selectedColor].name,
      quantity,
      image: product.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className={`relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-t-2xl md:rounded-2xl ${dark ? 'bg-noir-800' : 'bg-white'}`}>

        {/* Close */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center transition-colors ${dark ? 'text-noir-400 hover:text-noir-50' : 'text-noir-400 hover:text-noir-900'}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-0">

          {/* Images */}
          <div className="relative">
            <div className={`aspect-[4/5] overflow-hidden ${dark ? 'bg-noir-700' : 'bg-noir-100'}`}>
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 p-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-20 overflow-hidden flex-shrink-0 transition-all ${
                      selectedImage === i ? 'ring-1 ring-gold' : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              {/* Category */}
              <p className="section-label mb-3">{product.category}</p>

              {/* Name */}
              <h2 className={`font-display text-3xl md:text-4xl font-light leading-tight mb-1 ${dark ? 'text-noir-50' : 'text-noir-900'}`}>
                {product.name}
              </h2>
              <p className={`font-body text-sm tracking-wider mb-6 ${dark ? 'text-noir-400' : 'text-noir-500'}`}>
                {product.subtitle}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className={`font-display text-3xl font-light ${dark ? 'text-noir-50' : 'text-noir-900'}`}>
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className={`font-body text-base line-through ${dark ? 'text-noir-500' : 'text-noir-400'}`}>
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`font-body text-sm leading-relaxed mb-8 ${dark ? 'text-noir-300' : 'text-noir-600'}`}>
                {product.description}
              </p>

              {/* Color */}
              <div className="mb-6">
                <p className={`font-body text-xs tracking-widest uppercase mb-3 ${dark ? 'text-noir-400' : 'text-noir-500'}`}>
                  Colour — {product.colors[selectedColor].name}
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(i)}
                      title={color.name}
                      className={`w-8 h-8 rounded-full transition-all ${selectedColor === i ? 'ring-2 ring-offset-2 ring-gold' : 'hover:scale-110'} ${dark ? 'ring-offset-noir-800' : 'ring-offset-white'}`}
                      style={{ background: color.hex, border: '1px solid rgba(255,255,255,0.15)' }}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className={`font-body text-xs tracking-widest uppercase ${dark ? 'text-noir-400' : 'text-noir-500'}`}>
                    Size {selectedSize && `— ${selectedSize}`}
                  </p>
                  <button className="font-body text-xs tracking-wider text-gold hover:text-gold-light transition-colors">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 font-body text-xs tracking-wider border transition-all ${
                        selectedSize === size
                          ? 'bg-gold border-gold text-noir-900'
                          : dark
                            ? 'border-white/15 text-noir-300 hover:border-gold hover:text-gold'
                            : 'border-black/15 text-noir-600 hover:border-gold hover:text-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-gold font-body text-xs mt-2 tracking-wider">Please select a size</p>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-8">
                <p className={`font-body text-xs tracking-widest uppercase ${dark ? 'text-noir-400' : 'text-noir-500'}`}>Qty</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className={`w-8 h-8 flex items-center justify-center border transition-colors ${dark ? 'border-white/15 text-noir-300 hover:border-gold hover:text-gold' : 'border-black/15 hover:border-gold hover:text-gold'}`}
                  >−</button>
                  <span className={`font-body text-sm w-6 text-center ${dark ? 'text-noir-100' : 'text-noir-800'}`}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className={`w-8 h-8 flex items-center justify-center border transition-colors ${dark ? 'border-white/15 text-noir-300 hover:border-gold hover:text-gold' : 'border-black/15 hover:border-gold hover:text-gold'}`}
                  >+</button>
                </div>
              </div>
            </div>

            {/* Add to cart */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full py-4 font-body text-xs tracking-widest uppercase transition-all duration-300 ${
                  !selectedSize
                    ? dark ? 'bg-noir-700 text-noir-500 cursor-not-allowed' : 'bg-noir-200 text-noir-400 cursor-not-allowed'
                    : added
                      ? 'bg-green-700 text-white'
                      : 'bg-gold text-noir-900 hover:bg-gold-light hover:scale-[1.01]'
                }`}
              >
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>

              {/* Details accordion */}
              <div className={`border-t pt-4 ${dark ? 'border-white/10' : 'border-black/10'}`}>
                <button
                  onClick={() => setDetailsOpen(!detailsOpen)}
                  className={`w-full flex items-center justify-between font-body text-xs tracking-widest uppercase py-2 ${dark ? 'text-noir-400' : 'text-noir-500'}`}
                >
                  Product Details
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className={`transition-transform ${detailsOpen ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {detailsOpen && (
                  <ul className={`space-y-1.5 mt-3 pb-2 ${dark ? 'text-noir-300' : 'text-noir-600'}`}>
                    {product.details.map(d => (
                      <li key={d} className="font-body text-xs flex items-start gap-2">
                        <span className="text-gold mt-0.5">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

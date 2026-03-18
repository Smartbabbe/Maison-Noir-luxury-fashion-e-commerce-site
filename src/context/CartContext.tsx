import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  id: number
  name: string
  price: number
  size: string
  color: string
  quantity: number
  image: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number, size: string) => void
  updateQuantity: (id: number, size: string, qty: number) => void
  total: number
  count: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  total: 0,
  count: 0,
  isOpen: false,
  setIsOpen: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.size === item.size)
      if (existing) {
        return prev.map(i =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      return [...prev, item]
    })
    setIsOpen(true)
  }

  const removeItem = (id: number, size: string) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.size === size)))
  }

  const updateQuantity = (id: number, size: string, qty: number) => {
    if (qty <= 0) { removeItem(id, size); return }
    setItems(prev => prev.map(i =>
      i.id === id && i.size === size ? { ...i, quantity: qty } : i
    ))
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, total, count, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

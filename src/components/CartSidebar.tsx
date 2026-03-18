import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";


interface CartSidebarProps {
  onNavigate: (page: string) => void
}

export default function CartSidebar({ onNavigate}: CartSidebarProps) {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen } =
    useCart();
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md z-50 flex flex-col transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${dark ? "bg-noir-800" : "bg-white"}`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-8 py-6 border-b ${dark ? "border-white/10" : "border-black/10"}`}
        >
          <div>
            <h2
              className={`font-display text-2xl font-light ${dark ? "text-noir-50" : "text-noir-900"}`}
            >
              Your Cart
            </h2>
            <p
              className={`font-body text-xs tracking-widest uppercase mt-1 ${dark ? "text-noir-400" : "text-noir-500"}`}
            >
              {items.length} {items.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className={`w-10 h-10 flex items-center justify-center transition-colors ${dark ? "text-noir-400 hover:text-noir-50" : "text-noir-400 hover:text-noir-900"}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-noir-400"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <p
                className={`font-body text-sm tracking-wider ${dark ? "text-noir-400" : "text-noir-500"}`}
              >
                Your cart is empty
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className={`flex gap-4 pb-6 border-b last:border-0 ${dark ? "border-white/5" : "border-black/5"}`}
              >
                <div className="w-20 h-24 overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-display text-base font-medium truncate ${dark ? "text-noir-50" : "text-noir-900"}`}
                  >
                    {item.name}
                  </h4>
                  <p
                    className={`font-body text-xs tracking-wider mt-1 ${dark ? "text-noir-400" : "text-noir-500"}`}
                  >
                    {item.color} · Size {item.size}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity - 1)
                        }
                        className={`w-6 h-6 flex items-center justify-center border transition-colors ${dark ? "border-white/20 text-noir-300 hover:border-gold hover:text-gold" : "border-black/20 text-noir-600 hover:border-gold hover:text-gold"}`}
                      >
                        −
                      </button>
                      <span
                        className={`font-body text-sm w-4 text-center ${dark ? "text-noir-100" : "text-noir-800"}`}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className={`w-6 h-6 flex items-center justify-center border transition-colors ${dark ? "border-white/20 text-noir-300 hover:border-gold hover:text-gold" : "border-black/20 text-noir-600 hover:border-gold hover:text-gold"}`}
                      >
                        +
                      </button>
                    </div>
                    <span
                      className={`font-body text-sm font-medium ${dark ? "text-noir-100" : "text-noir-900"}`}
                    >
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  className={`self-start mt-1 transition-colors ${dark ? "text-noir-500 hover:text-red-400" : "text-noir-400 hover:text-red-500"}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            className={`px-8 py-6 border-t ${dark ? "border-white/10" : "border-black/10"}`}
          >
            <div className="flex justify-between mb-6">
              <span
                className={`font-body text-xs tracking-widest uppercase ${dark ? "text-noir-400" : "text-noir-500"}`}
              >
                Total
              </span>
              <span
                className={`font-display text-2xl font-light ${dark ? "text-noir-50" : "text-noir-900"}`}
              >
                ${total.toLocaleString()}
              </span>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onNavigate("checkout");
              }}
              className="btn-gold w-full"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className={`w-full mt-3 font-body text-xs tracking-widest uppercase py-3 transition-colors ${dark ? "text-noir-400 hover:text-noir-200" : "text-noir-500 hover:text-noir-800"}`}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

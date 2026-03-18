import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { products } from "../data/products";
import { Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const featuredProducts = products
    .filter((p) => p.featured || p.badge === "New")
    .slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.classList.add("!opacity-100", "!translate-y-0");
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`min-h-screen ${dark ? "bg-noir-900 text-noir-50" : "bg-white text-noir-900"}`}
    >
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 ${dark ? "bg-noir-900/75" : "bg-noir-900/55"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-noir-900/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
          <div className="max-w-2xl">
            <p
              className="section-label mb-6 animate-fade-up opacity-0-init"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              New Collection — SS 2025
            </p>
            <h1
              className="font-display text-6xl md:text-8xl font-light text-white leading-none mb-6 animate-fade-up opacity-0-init"
              style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
            >
              Dressed
              <br />
              <em className="text-gold">in silence.</em>
            </h1>
            <p
              className="font-body text-sm md:text-base text-white/70 leading-relaxed max-w-md mb-10 animate-fade-up opacity-0-init"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              Garments that don't speak — they whisper. Crafted for those who
              understand that true luxury needs no audience.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-up opacity-0-init"
              style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
            >
              <button
                onClick={() => onNavigate("collection")}
                className="btn-gold"
              >
                Explore Collection
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="btn-outline text-white border-white/40"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0-init"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div
              className="absolute top-0 w-full bg-gold animate-[shimmer_2s_infinite]"
              style={{ height: "40%" }}
            />
          </div>
          <p className="font-body text-[10px] tracking-widest uppercase text-white/40">
            Scroll
          </p>
        </div>
      </section>

      {/* Marquee */}
      <div
        className={`py-4 overflow-hidden border-y ${dark ? "border-white/5 bg-noir-800" : "border-black/5 bg-noir-50"}`}
      >
        <div
          className="flex gap-16 animate-[marquee_20s_linear_infinite] whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {Array(4)
            .fill([
              "New Arrivals",
              "Complimentary Shipping",
              "Handcrafted in Europe",
              "Sustainable Luxury",
              "Free Returns",
            ])
            .flat()
            .map((text, i) => (
              <span
                key={i}
                className={`font-body text-xs tracking-widest uppercase ${dark ? "text-noir-500" : "text-noir-400"}`}
              >
                {text} <span className="text-gold mx-4">✦</span>
              </span>
            ))}
        </div>
      </div>

      {/* Featured */}
      <section
        className={`py-24 md:py-32 ${dark ? "bg-noir-900" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-16">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <p className="section-label mb-3">Curated Selection</p>
              <h2
                className={`font-display text-5xl md:text-6xl font-light ${dark ? "text-noir-50" : "text-noir-900"}`}
              >
                New Arrivals
              </h2>
            </div>
            <button
              onClick={() => onNavigate("collection")}
              className={`hidden md:flex items-center gap-2 font-body text-xs tracking-widest uppercase transition-colors reveal opacity-0 translate-y-8 duration-700 ${dark ? "text-noir-400 hover:text-gold" : "text-noir-500 hover:text-gold"}`}
            >
              View All
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                className="reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <ProductCard product={product} onClick={setSelectedProduct} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
          alt="Editorial"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${dark ? "bg-noir-900/60" : "bg-noir-900/45"}`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-1000">
            <p className="section-label mb-6 text-white/70">The Philosophy</p>
            <blockquote className="font-display text-3xl md:text-5xl font-light text-white leading-tight max-w-3xl mx-auto px-8">
              "Elegance is not about being noticed — it is about being
              remembered."
            </blockquote>
            <p className="font-body text-xs tracking-widest uppercase text-white/40 mt-6">
              — Maison Noir, 2020
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        className={`py-24 md:py-32 ${dark ? "bg-noir-900" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <p className="section-label mb-3">Shop by Category</p>
            <h2
              className={`font-display text-5xl md:text-6xl font-light ${dark ? "text-noir-50" : "text-noir-900"}`}
            >
              The Collection
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: "Outerwear",
                img: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80",
              },
              {
                label: "Dresses",
                img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
              },
              {
                label: "Tailoring",
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
              },
            ].map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => onNavigate("collection")}
                className="group relative h-80 overflow-hidden reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-noir-900/40 group-hover:bg-noir-900/20 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6">
                  <p className={`font-display text-2xl font-light text-white`}>
                    {cat.label}
                  </p>
                  <p className="font-body text-xs tracking-widest uppercase text-gold mt-1 flex items-center gap-2">
                    Explore
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={`py-24 ${dark ? "bg-noir-800" : "bg-noir-50"}`}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <p className="section-label mb-4">Stay in the Know</p>
            <h2
              className={`font-display text-4xl md:text-5xl font-light mb-4 ${dark ? "text-noir-50" : "text-noir-900"}`}
            >
              The Inner Circle
            </h2>
            <p
              className={`font-body text-sm leading-relaxed mb-8 ${dark ? "text-noir-400" : "text-noir-500"}`}
            >
              First access to new collections, private events, and stories from
              our ateliers.
            </p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="Your email address"
                className={`flex-1 px-6 py-4 font-body text-sm border focus:outline-none focus:border-gold transition-colors ${
                  dark
                    ? "bg-noir-900 border-white/15 text-noir-100 placeholder-noir-500"
                    : "bg-white border-black/15 text-noir-900 placeholder-noir-400"
                }`}
              />
              <button className="btn-gold px-8 whitespace-nowrap">Join</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-16 border-t ${dark ? "bg-noir-900 border-white/5" : "bg-white border-black/5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <p
                className={`font-display text-xl tracking-[0.2em] uppercase mb-4 ${dark ? "text-noir-50" : "text-noir-900"}`}
              >
                Maison Noir
              </p>
              <p
                className={`font-body text-xs leading-relaxed ${dark ? "text-noir-400" : "text-noir-500"}`}
              >
                Luxury fashion crafted with intention. Every piece tells a story
                of quiet elegance.
              </p>
            </div>
            {[
              {
                title: "Collection",
                links: [
                  { label: "Outerwear", page: "collection" },
                  { label: "Dresses", page: "collection" },
                  { label: "Tailoring", page: "collection" },
                  { label: "Knitwear", page: "collection" },
                ],
              },
              {
                title: "Company",
                links: [
                  { label: "About Us", page: "about" },
                  { label: "Sustainability", page: "about" },
                  { label: "Careers", page: "about" },
                  { label: "Press", page: "about" },
                ],
              },
              {
                title: "Help",
                links: [
                  { label: "Shipping", page: "home" },
                  { label: "Returns", page: "home" },
                  { label: "Size Guide", page: "home" },
                  { label: "Contact", page: "home" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <p
                  className={`font-body text-xs tracking-widest uppercase mb-4 ${dark ? "text-noir-300" : "text-noir-700"}`}
                >
                  {col.title}
                </p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => onNavigate(link.page)}
                        className={`font-body text-xs transition-colors ${dark ? "text-noir-500 hover:text-gold" : "text-noir-400 hover:text-gold"}`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t ${dark ? "border-white/5" : "border-black/5"}`}
          >
            <p
              className={`font-body text-xs ${dark ? "text-noir-600" : "text-noir-400"}`}
            >
              © 2025 Maison Noir. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <button
                  key={item}
                  className={`font-body text-xs transition-colors ${dark ? "text-noir-600 hover:text-noir-300" : "text-noir-400 hover:text-noir-700"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0) }
          to { transform: translateX(-50%) }
        }
      `}</style>
    </div>
  );
}

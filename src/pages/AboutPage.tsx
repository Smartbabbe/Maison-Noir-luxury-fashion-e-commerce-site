import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

interface AboutPageProps {
  onNavigate: (page: string) => void
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('!opacity-100', '!translate-y-0')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`min-h-screen ${dark ? 'bg-noir-900 text-noir-50' : 'bg-white text-noir-900'}`}>

      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80"
          alt="Atelier"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${dark ? 'bg-noir-900/70' : 'bg-noir-900/55'}`} />
        <div className="absolute inset-0 flex items-end pb-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div>
            <p className="section-label mb-4 text-white/60">Est. 2020 — Paris</p>
            <h1 className="font-display text-6xl md:text-8xl font-light text-white leading-none">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={`py-24 md:py-32 ${dark ? 'bg-noir-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <p className="section-label mb-6">The Beginning</p>
              <h2 className={`font-display text-4xl md:text-5xl font-light leading-tight mb-8 ${dark ? 'text-noir-50' : 'text-noir-900'}`}>
                Born from a refusal to compromise.
              </h2>
              <div className={`space-y-4 font-body text-sm leading-relaxed ${dark ? 'text-noir-300' : 'text-noir-600'}`}>
                <p>
                  Maison Noir was founded in 2020 by a collective of designers who believed the fashion industry had forgotten something essential — that clothing is not entertainment. It is armour. It is identity. It is silence made visible.
                </p>
                <p>
                  We set out to build a house rooted in craft, in restraint, and in the deeply unfashionable belief that a garment should outlast its season.
                </p>
              </div>
            </div>
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
                  alt="Atelier"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className={`absolute -bottom-4 -right-4 w-32 h-32 border ${dark ? 'border-gold/20' : 'border-gold/30'}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`py-24 ${dark ? 'bg-noir-800' : 'bg-noir-50'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-16 text-center">
            <p className="section-label mb-4">What We Stand For</p>
            <h2 className={`font-display text-4xl md:text-5xl font-light ${dark ? 'text-noir-50' : 'text-noir-900'}`}>
              The Principles
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                number: '01',
                title: 'Craft Above Trend',
                body: 'Every piece is designed to transcend the season it was made in. We work with master craftspeople across Europe who share our obsession with permanence.',
              },
              {
                number: '02',
                title: 'Material Integrity',
                body: 'We source exclusively from mills with verifiable practices. Merino from New Zealand. Silk from Lyon. Leather from certified tanneries in Spain.',
              },
              {
                number: '03',
                title: 'Considered Slowness',
                body: 'We release two collections a year — no more. We believe in making fewer things with more thought, and standing behind every stitch.',
              },
            ].map((value, i) => (
              <div
                key={value.number}
                className="reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <p className="font-display text-5xl font-light text-gold/30 mb-4">{value.number}</p>
                <h3 className={`font-display text-2xl font-light mb-4 ${dark ? 'text-noir-50' : 'text-noir-900'}`}>
                  {value.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed ${dark ? 'text-noir-400' : 'text-noir-500'}`}>
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`py-24 md:py-32 ${dark ? 'bg-noir-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
            <p className="section-label mb-4">The People</p>
            <h2 className={`font-display text-4xl md:text-5xl font-light ${dark ? 'text-noir-50' : 'text-noir-900'}`}>
              Behind the House
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'Isabelle Noir', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80' },
              { name: 'Marc Delacroix', role: 'Head of Tailoring', img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80' },
              { name: 'Yuki Tanaka', role: 'Knitwear Designer', img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80' },
              { name: 'Amara Osei', role: 'Sustainability Lead', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80' },
            ].map((person, i) => (
              <div
                key={person.name}
                className="reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className={`font-display text-lg font-light ${dark ? 'text-noir-100' : 'text-noir-800'}`}>
                  {person.name}
                </p>
                <p className={`font-body text-xs tracking-wider mt-0.5 ${dark ? 'text-noir-500' : 'text-noir-400'}`}>
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
          alt="Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-noir-900/70" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <p className="section-label mb-6 text-white/60">Ready to Begin</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-8">
              Explore the Collection
            </h2>
            <button onClick={() => onNavigate('collection')} className="btn-gold">
              Shop Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

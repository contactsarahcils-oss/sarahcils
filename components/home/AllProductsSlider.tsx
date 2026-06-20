'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { PRODUCTS } from '@/lib/products'
import { IMAGES } from '@/lib/images'

export default function AllProductsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 220 : -220, behavior: 'smooth' })
  }

  return (
    <div className="mt-10">
      {/* Header row */}
      <div className="flex items-baseline justify-between gap-4 mb-5">
        <h2 className="reveal font-[family-name:var(--font-cormorant)] font-normal text-[24px] md:text-[30px] leading-[1.15]">
          La gamme complète
        </h2>
        <a
          href="https://www.sarahcils.com/boutique"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] uppercase tracking-[0.1em] text-[#6B6B65] hover:text-[#C9A882] transition-colors whitespace-nowrap"
        >
          Voir tout →
        </a>
      </div>

      {/* Slider */}
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          aria-label="Précédent"
          className="hidden md:flex absolute left-[-8px] top-[88px] -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white items-center justify-center shadow-md hover:bg-[#C9A882] hover:text-white transition-colors text-[#1A1A18] text-sm"
        >
          ‹
        </button>

        <div
          ref={scrollRef}
          className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {PRODUCTS.map((p) => (
            <a
              key={p.id}
              href={p.wixUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card snap-start shrink-0 w-[160px] md:w-[192px] flex flex-col"
            >
              <div className="bg-[#F5F0E8] rounded-xl h-[176px] flex items-center justify-center overflow-hidden relative">
                <Image
                  src={IMAGES.products[p.image]}
                  alt={p.name}
                  fill
                  className="object-contain p-3"
                  sizes="192px"
                />
              </div>
              {p.badge && (
                <span className={`text-[9px] uppercase tracking-[0.06em] mt-1 block ${p.badge === 'BEST SELLER' ? 'text-[#1A1A18]' : 'text-[#C9A882]'}`}>
                  {p.badge}
                </span>
              )}
              <p className="text-[10px] uppercase tracking-[0.04em] font-medium mt-1 leading-tight text-[#1A1A18]">{p.name}</p>
              {p.subtitle && <p className="text-[9px] text-[#6B6B65] mt-0.5">{p.subtitle}</p>}
              <p className="text-[12px] font-semibold text-[#1A1A18] mt-0.5">{p.price}</p>
            </a>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          aria-label="Suivant"
          className="hidden md:flex absolute right-[-8px] top-[88px] -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white items-center justify-center shadow-md hover:bg-[#C9A882] hover:text-white transition-colors text-[#1A1A18] text-sm"
        >
          ›
        </button>
      </div>
    </div>
  )
}

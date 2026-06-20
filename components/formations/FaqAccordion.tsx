'use client'
import { useState } from 'react'

interface FaqItem { q: string; r: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="flex flex-col divide-y divide-[#E8E5DF]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left text-[14px] font-medium text-[#1A1A18] hover:text-[#C9A882] transition-colors"
          >
            {item.q}
            <span className={`text-[#C9A882] transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          {open === i && (
            <p className="pb-4 text-[13px] text-[#6B6B65] leading-relaxed">{item.r}</p>
          )}
        </div>
      ))}
    </div>
  )
}

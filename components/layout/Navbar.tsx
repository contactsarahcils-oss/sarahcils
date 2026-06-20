'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [formationsOpen, setFormationsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[rgba(250,250,248,0.95)] backdrop-blur-sm border-b border-[#E8E5DF]">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 lg:px-12 h-14 md:h-16 flex items-center justify-between relative">

        {/* Burger — left on mobile only */}
        <button
          className="flex md:hidden flex-col gap-[4px] bg-transparent border-none cursor-pointer p-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-[22px] h-[1.5px] bg-[#1A1A18] transition-all duration-300 ${open ? 'translate-y-[5.5px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#1A1A18] transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#1A1A18] transition-all duration-300 ${open ? '-translate-y-[5.5px] -rotate-45' : ''}`} />
        </button>

        {/* Logo — absolute center on mobile, static left on desktop */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Image src={IMAGES.logo} alt="Sarah Cils" width={155} height={50} priority className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[12px] uppercase tracking-[0.12em] text-[#1A1A18] hover:text-[#C9A882] transition-colors">
            Accueil
          </Link>
          <a href="https://www.sarahcils.com/boutique" target="_blank" rel="noopener noreferrer"
            className="text-[12px] uppercase tracking-[0.12em] text-[#1A1A18] hover:text-[#C9A882] transition-colors">
            Boutique
          </a>

          {/* Formations dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[12px] uppercase tracking-[0.12em] text-[#1A1A18] hover:text-[#C9A882] transition-colors">
              Formations
              <svg width="10" height="10" viewBox="0 0 10 10" className="transition-transform duration-200 group-hover:rotate-180" fill="currentColor">
                <path d="M2 4l3 3 3-3"/>
              </svg>
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white border border-[#E8E5DF] rounded-xl shadow-lg py-2 min-w-[180px]">
                <a href="/formations" className="block px-4 py-2.5 text-[12px] hover:bg-[#F5F0E8] hover:text-[#C9A882] transition-colors">Découvrir</a>
                <div className="mx-4 h-px bg-[#E8E5DF]" />
                <a href="/formations/cil-a-cil" className="block px-4 py-2.5 text-[12px] hover:bg-[#F5F0E8] hover:text-[#C9A882] transition-colors">Cil à Cil</a>
                <a href="/formations/volume-russe" className="block px-4 py-2.5 text-[12px] hover:bg-[#F5F0E8] hover:text-[#C9A882] transition-colors">Volume Russe</a>
              </div>
            </div>
          </div>

          <Link href="/prestations" className="text-[12px] uppercase tracking-[0.12em] text-[#1A1A18] hover:text-[#C9A882] transition-colors">
            Prestations
          </Link>
          <Link href="/contact" className="text-[12px] uppercase tracking-[0.12em] text-[#1A1A18] hover:text-[#C9A882] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Spacer balances burger on mobile */}
        <div className="w-[34px] md:hidden" />
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden flex flex-col border-t border-[#E8E5DF] bg-[#FAFAF8]">
          <Link href="/"
            className="px-4 py-3.5 text-[13px] uppercase tracking-[0.12em] text-[#1A1A18] border-b border-[#E8E5DF]"
            onClick={() => setOpen(false)}>
            Accueil
          </Link>
          <a href="https://www.sarahcils.com/boutique" target="_blank" rel="noopener noreferrer"
            className="px-4 py-3.5 text-[13px] uppercase tracking-[0.12em] text-[#1A1A18] border-b border-[#E8E5DF]"
            onClick={() => setOpen(false)}>
            Boutique
          </a>

          {/* Formations accordéon mobile */}
          <div className="border-b border-[#E8E5DF]">
            <button
              onClick={() => setFormationsOpen(!formationsOpen)}
              className="w-full flex items-center justify-between px-4 py-3.5 text-[13px] uppercase tracking-[0.12em] text-[#1A1A18]"
            >
              Formations
              <svg width="10" height="10" viewBox="0 0 10 10" className={`transition-transform duration-200 fill-current ${formationsOpen ? 'rotate-180' : ''}`}>
                <path d="M2 4l3 3 3-3"/>
              </svg>
            </button>
            {formationsOpen && (
              <div className="flex flex-col">
                <Link href="/formations"
                  className="pl-6 pr-4 py-3 text-[13px] text-[#1A1A18] border-t border-[#E8E5DF] hover:text-[#C9A882] transition-colors"
                  onClick={() => setOpen(false)}>
                  Découvrir
                </Link>
                <Link href="/formations/cil-a-cil"
                  className="pl-6 pr-4 py-3 text-[13px] text-[#1A1A18] border-t border-[#E8E5DF] hover:text-[#C9A882] transition-colors"
                  onClick={() => setOpen(false)}>
                  Cil à Cil
                </Link>
                <Link href="/formations/volume-russe"
                  className="pl-6 pr-4 py-3 text-[13px] text-[#1A1A18] border-t border-[#E8E5DF] hover:text-[#C9A882] transition-colors"
                  onClick={() => setOpen(false)}>
                  Volume Russe
                </Link>
              </div>
            )}
          </div>

          <Link href="/prestations"
            className="px-4 py-3.5 text-[13px] uppercase tracking-[0.12em] text-[#1A1A18] border-b border-[#E8E5DF]"
            onClick={() => setOpen(false)}>
            Prestations
          </Link>
          <Link href="/contact"
            className="px-4 py-3.5 text-[13px] uppercase tracking-[0.12em] text-[#1A1A18] border-b border-[#E8E5DF]"
            onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}

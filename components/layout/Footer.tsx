import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A18] pt-10 pb-6 px-4 md:px-8" id="footer">
      <div className="max-w-[1240px] mx-auto">

        {/* Logo */}
        <a href="/">
          <Image src={IMAGES.logo} alt="Sarah Cils" width={120} height={40} className="h-[30px] w-auto brightness-0 invert" />
        </a>

        {/* Info */}
        <div className="text-[13px] leading-[1.9] text-white/65 mt-4 md:mt-5">
          320 avenue des Poilus, 13012 Marseille<br />
          <a href="tel:0677697550" className="hover:text-[#C9A882] transition-colors">06 77 69 75 50</a><br />
          <a href="mailto:sarahcils@gmail.com" className="hover:text-[#C9A882] transition-colors">sarahcils@gmail.com</a><br />
          <a href="https://www.instagram.com/saraahcils/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A882] transition-colors">@saraahcils</a>
        </div>

        {/* Separator */}
        <hr className="border-none border-t border-white/20 my-6" />

        {/* Legal links */}
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {[
            { label: 'Mentions légales', href: 'https://www.sarahcils.com/mentions-legales' },
            { label: 'CGV', href: 'https://www.sarahcils.com/cgv' },
            { label: 'Politique de livraison', href: 'https://www.sarahcils.com/politique-de-livraison' },
            { label: 'Confidentialité', href: 'https://www.sarahcils.com/confidentialite' },
            { label: 'Cookies', href: 'https://www.sarahcils.com/cookies' },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              className="text-[12px] text-white/50 hover:text-[#C9A882] transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-white/30 mt-5">© 2025 Sarah Cils</p>
      </div>
    </footer>
  )
}

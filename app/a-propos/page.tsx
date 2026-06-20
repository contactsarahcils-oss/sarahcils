import type { Metadata } from 'next'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Prestations extensions de cils — Studio Beauté Marseille',
  description: 'Studio Beauté Sarah Cils à Marseille 12e. Extensions de cils sur mesure : cil à cil, volume russe, mégavolume. Sur rendez-vous.',
}

export default function AProposPage() {
  return (
    <div className="py-10 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
          <Image
            src={IMAGES.bestSellerSection}
            alt="Sarah, technicienne extensions de cils Marseille"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-widest text-[#C9A882]">À propos</span>
          <h1 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-4xl font-medium mt-2 mb-4">
            Sarah Cils, Studio Beauté à Marseille
          </h1>
          <p className="text-sm text-[#6B6B65] leading-relaxed mb-4">
            Je suis Sarah, technicienne spécialisée en extensions de cils depuis plus de 6 ans. Après des années à tester des dizaines de références, j&apos;ai créé ma propre gamme — des produits fiables, performants, pensés pour la réalité du métier.
          </p>
          <p className="text-sm text-[#6B6B65] leading-relaxed mb-4">
            Chaque jour dans notre Studio Beauté à Marseille, je réalise des poses et j&apos;utilise mes propres produits. Ce que vous achetez, je l&apos;ai testé moi-même, sur mes clientes.
          </p>
          <div className="border-t border-[#E8E5DF] pt-6 mt-6">
            <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-3">Nos prestations</h2>
            <ul className="space-y-2 text-sm text-[#6B6B65]">
              <li>→ Extensions cil à cil</li>
              <li>→ Volume Russe</li>
              <li>→ Mégavolume</li>
              <li>→ Retouches</li>
            </ul>
          </div>
          <div className="border-t border-[#E8E5DF] pt-6 mt-6">
            <p className="text-sm text-[#6B6B65]">
              <strong className="text-[#1A1A18]">Adresse :</strong><br />
              320 avenue des Poilus, 13012 Marseille
            </p>
            <p className="text-sm text-[#6B6B65] mt-2">
              <strong className="text-[#1A1A18]">Réservation :</strong><br />
              <a href="https://www.sarahcils.com/rendez-vous" target="_blank" rel="noopener noreferrer" className="text-[#C9A882] hover:underline">Prendre rendez-vous →</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

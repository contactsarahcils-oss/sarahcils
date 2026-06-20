import Image from 'next/image'

const paragraphs = [
  "Développée pour offrir une rétention exceptionnelle pouvant aller jusqu'à 6 semaines, elle garantit une tenue nette, visible et maîtrisée.",
  "Sa formule assure un confort optimal et ne pique pas les yeux, pour une expérience agréable en cabine.",
  "Conçue pour offrir une stabilité longue durée, elle garantit une qualité constante, pose après pose.",
  "Pour des performances optimales, nous vous recommandons de choisir votre colle en fonction de votre vitesse de travail ainsi que des conditions de votre pièce.",
]

export default function BestSellerPromo() {
  return (
    <section className="bg-[#FAFAF8] py-12 md:py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Image — avec marges sur mobile, pas collée */}
          <div className="reveal relative mx-2 md:mx-0">
            {/* Cadre décoratif décalé */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#C9A882]/30 rounded-2xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/nos-best-seller.avif"
                alt="La Colle Sarah Cils — best seller"
                fill
                className="object-cover"
                sizes="(max-width: 768px) calc(100vw - 2rem), 50vw"
                priority
              />
              {/* Badge flottant */}
              <div className="absolute top-4 right-4 bg-[#1A1A18]/80 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                Best Seller
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="reveal flex flex-col gap-0">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A882]">Notre best seller</p>
            <h2 className="font-[family-name:var(--font-cormorant)] font-normal text-[28px] md:text-[38px] leading-[1.15] text-[#1A1A18] mt-2 mb-6">
              La Colle<br />
              <span className="italic text-[#6B6B65]">Sarah Cils</span>
            </h2>

            {/* Séparateur */}
            <div className="w-10 h-px bg-[#C9A882] mb-6" />

            <div className="flex flex-col gap-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-[13px] md:text-[14px] text-[#6B6B65] leading-[1.75]">
                  {p}
                </p>
              ))}
            </div>

            <a
              href="https://www.sarahcils.com/product-page/colle"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start mt-8 border border-[#1A1A18] text-[#1A1A18] text-[11px] uppercase tracking-[0.18em] px-6 py-3 hover:bg-[#1A1A18] hover:text-white transition-colors duration-300"
            >
              Découvrir la colle
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

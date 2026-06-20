import Image from 'next/image'

export default function BestSellerSection() {
  return (
    <section className="bg-[#1A1A18] py-12 md:py-0">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* Text — order 1 mobile */}
        <div className="px-4 py-0 pb-10 md:px-14 md:py-16 flex flex-col justify-center order-2 md:order-1">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A882]">Notre best seller</p>
          <h2 className="reveal font-[family-name:var(--font-cormorant)] font-normal text-[30px] md:text-[40px] text-white mt-3">
            La Colle Sarah Cils
          </h2>
          <ul className="mt-6 mb-7 flex flex-col gap-3">
            {[
              "Rétention exceptionnelle jusqu'à 6 semaines",
              "Confort optimal, ne pique pas les yeux",
              "Stabilité constante, pose après pose",
              "Compatible 40% à 70% d'humidité",
            ].map((item) => (
              <li key={item} className="flex gap-2.5 text-[14px] text-white/70">
                <span className="text-[#C9A882] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://www.sarahcils.com/product-page/colle"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start border border-[#C9A882] text-[#C9A882] text-[12px] uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-[#C9A882] hover:text-[#1A1A18] transition-colors duration-300"
          >
            Voir le produit
          </a>
        </div>

        {/* Image — avec marges sur mobile, plein bord desktop */}
        <div className="order-1 md:order-2 px-4 md:px-0">
          <div className="relative h-[280px] md:h-full md:min-h-[480px] rounded-xl md:rounded-none overflow-hidden">
            <Image
              src="https://static.wixstatic.com/media/dec4a3_21b7cc3550ea4e2cbcee7084618dbc9a~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/bestseller.jpg"
              alt="La Colle Sarah Cils"
              fill
              className="object-cover"
              sizes="(max-width: 768px) calc(100vw - 2rem), 50vw"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

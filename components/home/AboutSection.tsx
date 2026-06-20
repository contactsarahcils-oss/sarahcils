import Image from 'next/image'

const ABOUT_IMAGE = "https://static.wixstatic.com/media/54d2ff_9f777bd91a404fccb96fcf6c6ca20812~mv2.jpeg/v1/fill/w_900,h_1000,al_c,q_85,enc_avif,quality_auto/colle.jpg"

export default function AboutSection() {
  return (
    <section className="bg-[#FAFAF8]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* Text — order 2 mobile (below image), order 1 desktop (left) */}
        <div className="px-4 py-10 md:px-14 md:py-14 flex flex-col justify-center order-2 md:order-1">
          <p className="text-[12px] uppercase tracking-[0.15em] text-[#C9A882]">Notre histoire</p>
          <h2 className="reveal font-[family-name:var(--font-cormorant)] font-normal text-[24px] md:text-[30px] leading-[1.15] mt-3">
            L&apos;exigence du terrain, la performance d&apos;une marque.
          </h2>
          <p className="text-[14px] text-[#6B6B65] leading-[1.7] mt-3.5 max-w-[46ch]">
            Chaque jour, dans notre institut à Marseille, nous réalisions des dizaines de poses d&apos;extensions de cils.
          </p>
          <p className="text-[14px] text-[#6B6B65] leading-[1.7] mt-3.5 max-w-[46ch]">
            Bienvenue chez Sarah Cils. Je suis Sarah, technicienne spécialisée en extensions de cils depuis plus de 6 ans et co-fondatrice du Studio Beauté, aux côtés de Nawel, experte en onglerie.
          </p>
          <p className="text-[14px] text-[#6B6B65] leading-[1.7] mt-3.5 max-w-[46ch]">
            Fondé en 2024, le Studio Beauté est né d&apos;une passion commune pour la mise en beauté avec l&apos;ambition de créer un lieu chaleureux, professionnel et inspirant. Situé à Marseille, à deux pas de La Valentine.
          </p>
          <p className="text-[14px] text-[#6B6B65] leading-[1.7] mt-3.5 max-w-[46ch]">
            Après plusieurs années à travailler avec des produits industriels ne répondant pas toujours à mes exigences, j&apos;ai créé ma propre marque. Conçus par une technicienne présente en institut au quotidien, mes produits sont pensés pour être fiables, performants et agréables à utiliser.
          </p>
          <a
            href="https://www.sarahcils.com/a-propos"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-7 border border-[#1A1A18] text-[#1A1A18] text-[12px] uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-[#1A1A18] hover:text-white transition-colors duration-300"
          >
            En savoir plus
          </a>
        </div>

        {/* Image — order 1 mobile (top), order 2 desktop (right) — avec marges sur mobile */}
        <div className="order-1 md:order-2 px-4 md:px-0">
          <div className="relative h-[260px] md:h-full md:min-h-[500px] rounded-xl md:rounded-none overflow-hidden">
            <Image
              src={ABOUT_IMAGE}
              alt="Atelier Sarah Cils"
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

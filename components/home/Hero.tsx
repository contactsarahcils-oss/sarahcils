import { IMAGES } from '@/lib/images'

export default function Hero() {
  return (
    <section className="relative h-[72vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
      <video
        src="/videos/hero-sarah-cils.mp4"
        poster={IMAGES.heroBg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Sarah Cils studio"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 text-center text-white px-5 max-w-2xl mx-auto">
        <h1 className="hero-title text-center">
          <span className="block font-[family-name:var(--font-cormorant)] italic font-normal text-white/75 text-[18px] md:text-[24px] tracking-[0.03em] mb-1">
            Les produits créés par
          </span>
          <span className="block font-[family-name:var(--font-cormorant)] font-medium text-white text-[36px] md:text-[60px] leading-[1.1]">
            une lash artist
          </span>
          <span className="block font-[family-name:var(--font-cormorant)] italic font-normal text-[#C9A882] text-[28px] md:text-[48px] leading-[1.1]">
            pour les lash artists.
          </span>
        </h1>
        <p className="text-white/55 text-[11px] tracking-[0.2em] uppercase mt-5 mb-7">
          ✦ +200 avis 5/5 · Marseille · Depuis 2024
        </p>
        <a
          href="https://www.sarahcils.com/boutique"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#1A1A18] text-[12px] uppercase tracking-[0.15em] px-7 py-3 hover:bg-[#C9A882] hover:text-white transition-colors duration-300"
        >
          Découvrir la boutique
        </a>
      </div>
    </section>
  )
}

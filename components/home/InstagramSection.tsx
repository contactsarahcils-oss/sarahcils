export default function InstagramSection() {
  return (
    <section className="bg-[#1A1A18] py-12 md:py-16 px-4 text-center">
      <div className="max-w-[1240px] mx-auto reveal">
        <h2 className="font-[family-name:var(--font-cormorant)] font-normal text-[24px] md:text-[30px] text-white">
          Rejoignez notre univers
        </h2>
        <p className="text-[14px] text-white/60 mt-2">Suivez-nous sur Instagram</p>
        <a
          href="https://www.instagram.com/saraahcils/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 border border-white/50 text-white text-[12px] uppercase tracking-[0.12em] px-7 py-3 hover:bg-white hover:text-[#1A1A18] hover:border-white transition-colors duration-300"
        >
          Voir le profil @saraahcils
        </a>
      </div>
    </section>
  )
}

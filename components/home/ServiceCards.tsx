const services = [
  {
    icon: '◆',
    title: 'Produits Pro',
    description: 'Formulés par une technicienne, testés chaque jour en cabine.',
    cta: 'Voir la boutique',
    href: 'https://www.sarahcils.com/boutique',
    external: true,
  },
  {
    icon: '✂',
    title: 'Studio Beauté',
    description: 'Extensions de cils sur mesure. Marseille 12e, à deux pas de La Valentine.',
    cta: 'Prendre rendez-vous',
    href: 'https://www.sarahcils.com/a-propos',
    external: true,
  },
  {
    icon: '❋',
    title: 'Formations',
    description: 'Certifiantes. Cil à Cil et Volume Russe. De débutante à experte.',
    cta: 'Découvrir',
    href: 'https://www.sarahcils.com/formations',
    external: true,
  },
]

export default function ServiceCards() {
  return (
    <section className="bg-[#1A1A18] py-10 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="reveal font-[family-name:var(--font-cormorant)] font-normal text-[24px] md:text-[30px] leading-[1.15] text-white">
          Notre univers
        </h2>

        {/* Mobile: horizontal scroll, Desktop: 3 col grid */}
        <div className="mt-8 flex overflow-x-auto snap-x snap-mandatory gap-3 scrollbar-hide md:grid md:grid-cols-3 md:gap-4 md:overflow-visible pb-1">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal snap-start shrink-0 w-[80vw] md:w-auto bg-[#242420] rounded-xl p-6 flex flex-col"
            >
              <span className="text-[22px] text-[#C9A882]">{s.icon}</span>
              <h3 className="text-[14px] font-medium text-white mt-3.5">{s.title}</h3>
              <p className="text-[12px] text-white/60 leading-[1.6] mt-2 flex-1">{s.description}</p>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[12px] uppercase tracking-[0.1em] text-[#C9A882] mt-4 hover:underline"
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

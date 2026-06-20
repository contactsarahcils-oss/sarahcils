const columns = [
  {
    icon: '★★★★',
    title: 'Qualité',
    text: 'Des produits sélectionnés et testés avec exigence.',
    link: null,
  },
  {
    icon: '⏱',
    title: 'Testés en institut',
    text: 'Utilisés chaque jour dans notre studio beauté.',
    link: null,
  },
  {
    icon: '◈',
    title: 'Performance',
    text: 'Tenue optimale et résultats impeccables.',
    link: null,
  },
  {
    icon: '♡',
    title: 'Lash artist',
    text: null,
    link: { label: '@saraahcils', href: 'https://www.instagram.com/saraahcils/' },
  },
]

export default function TrustBar() {
  return (
    <div className="bg-[#F2F1EF]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {columns.map((col, i) => (
          <div
            key={col.title}
            className={[
              'flex flex-col items-center text-center gap-2 py-7 px-4',
              /* mobile: border-right on odd indices (col 1 & 3 in 2-col layout = index 0 & 2) */
              i % 2 === 0 ? 'border-r border-[#E8E5DF]' : '',
              /* desktop override: border-right on all except last */
              i < 3 ? 'md:border-r' : 'md:border-r-0',
            ].join(' ')}
          >
            <span className="text-[20px] leading-none text-[#6B6B65]">{col.icon}</span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1A6B6B]">{col.title}</p>
            {col.text && (
              <p className="text-[12px] text-[#6B6B65] leading-relaxed mt-0.5">{col.text}</p>
            )}
            {col.link && (
              <a
                href={col.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-[#1A6B6B] underline underline-offset-2 mt-0.5"
              >
                {col.link.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

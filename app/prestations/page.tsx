import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prestations Extensions de Cils Marseille | Sarah Cils',
  description: 'Extensions de cils sur mesure à Marseille 12e. Studio Beauté Sarah Cils. Réservez en ligne via Planity.',
}

export default function PrestationsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1A1A18] py-16 px-4 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A882] mb-3">Studio Beauté — Marseille 12e</p>
        <h1 className="font-[family-name:var(--font-cormorant)] font-normal text-[32px] md:text-[48px] leading-[1.1] text-white">
          Réservez votre créneau
        </h1>
        <p className="text-white/65 text-[14px] mt-4 max-w-md mx-auto">
          Connectez-vous ci-dessous et réservez votre créneau en un clic !
        </p>
      </section>

      {/* Planity embed */}
      <section className="bg-[#FAFAF8] py-10 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <iframe
            src="https://www.planity.com/studio-beaute-sarah-cils-13012-marseille"
            width="100%"
            height={700}
            frameBorder={0}
            className="rounded-2xl border border-[#E8E5DF] w-full"
            title="Réservation en ligne — Studio Beauté Sarah Cils"
            loading="lazy"
          />
          {/* Fallback toujours visible */}
          <div className="text-center mt-6">
            <p className="text-[12px] text-[#6B6B65] mb-3">Si la fenêtre de réservation ne s&apos;affiche pas :</p>
            <a
              href="https://www.planity.com/studio-beaute-sarah-cils-13012-marseille"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9A882] text-white px-8 py-3 text-[11px] uppercase tracking-[0.15em] hover:bg-[#1A1A18] transition-colors duration-300"
            >
              Réserver sur Planity
            </a>
          </div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="bg-[#F5F0E8] py-8 px-4">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {[
            { icon: '📧', label: 'Email', value: 'sarahcils@gmail.com', href: 'mailto:sarahcils@gmail.com' },
            { icon: '📞', label: 'Téléphone', value: '06 77 69 75 50', href: 'tel:0677697550' },
            { icon: '📍', label: 'Adresse', value: '320 av. des Poilus, 13012 Marseille', href: null },
          ].map((item) => (
            <div key={item.label} className="py-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#6B6B65] mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-[13px] text-[#1A1A18] hover:text-[#C9A882] transition-colors">{item.value}</a>
              ) : (
                <p className="text-[13px] text-[#1A1A18]">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

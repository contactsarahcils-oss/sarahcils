import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nos Formations Professionnelles | Sarah Cils',
  description: 'Formations certifiantes en extensions de cils à Marseille. Cil à Cil et Volume Russe. 1 élève par session, suivi 2 mois inclus. 490€.',
}

const formations = [
  {
    slug: 'cil-a-cil',
    label: 'Formation débutante',
    image: 'https://static.wixstatic.com/media/dec4a3_4afcc0371033439e957bac8ad9c69c97~mv2.png/v1/crop/x_0,y_159,w_1080,h_1033/fill/w_900,h_900,al_c,q_85,enc_avif,quality_auto/formation-cil-a-cil.png',
    bullets: [
      {
        title: 'Maîtrise technique et sécurité',
        text: "de l'anatomie du cil aux règles d'hygiène, tu apprendras à préparer ton poste, choisir les bonnes courbures et réaliser des poses adaptées à chaque morphologie.",
      },
      {
        title: 'Pratique guidée et démonstration en direct',
        text: "tu réaliseras ton premier mapping personnalisé et ta première pose complète sur modèle, avec les astuces de pro pour un résultat propre et durable.",
      },
      {
        title: 'Lancement professionnel',
        text: "tu découvriras comment utiliser les réseaux sociaux pour trouver tes premières clientes et comprendre les bases du statut auto-entrepreneur pour démarrer ton activité.",
      },
    ],
  },
  {
    slug: 'volume-russe',
    label: 'Formation avancée',
    image: 'https://static.wixstatic.com/media/dec4a3_dae72d21764c4f409a32bebef43b1a30~mv2.png/v1/crop/x_0,y_159,w_1080,h_1033/fill/w_900,h_900,al_c,q_85,enc_avif,quality_auto/formation-volume-russe-mere.png',
    bullets: [
      {
        title: 'Excellence technique',
        text: "découverte complète du volume russe, création d'éventails manuels, intégration des bouquets pré-faits et maîtrise des mappings avancés pour des effets tendance (fox eyes, cat eyes, squirrel...).",
      },
      {
        title: 'Pratique intensive et accompagnement personnalisé',
        text: "pose complète sur modèle avec corrections en direct, ajustement de ta posture et perfectionnement de ta technicité.",
      },
      {
        title: 'Développement professionnel',
        text: "optimisation de ta présence sur les réseaux sociaux, stratégies de fidélisation et méthodes pour ajuster tes tarifs et faire évoluer ton activité.",
      },
    ],
  },
]

export default function FormationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/dec4a3_cc3cdc5eff3443c795d1e656f290e8dd~mv2.jpg/v1/fill/w_1400,h_700,al_c,q_85,enc_avif,quality_auto/formations-hero.jpg"
          alt="Formations extensions de cils Sarah Cils"
          fill priority className="object-cover" sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-cormorant)] font-normal text-[38px] md:text-[64px] leading-[1.05] text-white">
            Nos Formations Professionnelles
          </h1>
          <p className="text-white/80 text-[14px] md:text-[16px] mt-6 max-w-xl mx-auto leading-relaxed">
            Maîtrise l&apos;art des extensions de cils : de la précision du geste aux effets tendance, tout en développant ta présence en ligne et ta clientèle.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-[#F2F1EF]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {formations.map((f) => (
            <div key={f.slug} className="product-card bg-white flex flex-col shadow-sm">

              {/* Photo avec overlay */}
              <div className="relative h-[380px] md:h-[420px] overflow-hidden">
                <Image
                  src={f.image}
                  alt={`Formation ${f.slug}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Watermark */}
                <span className="absolute bottom-14 right-4 text-white/70 italic text-[13px] font-[family-name:var(--font-cormorant)]">
                  Sarahcils.
                </span>
                {/* Titre overlay */}
                <div className="absolute bottom-4 left-5">
                  <p className="font-[family-name:var(--font-cormorant)] font-normal text-white text-[28px] md:text-[32px] leading-[1.1]">
                    Formation<br />Extensions de cils
                  </p>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Badge */}
                <span className="self-start text-[10px] uppercase tracking-[0.12em] text-[#6B6B65] border border-[#E8E5DF] rounded-full px-3 py-1 mb-5">
                  {f.label}
                </span>

                <h2 className="font-[family-name:var(--font-dm-sans)] font-bold text-[16px] text-[#1A1A18] mb-5">
                  Ce que comprend cette formation
                </h2>

                <ul className="flex flex-col gap-4 mb-8 flex-1">
                  {f.bullets.map((b) => (
                    <li key={b.title} className="flex gap-2.5 text-[13px] text-[#1A1A18] leading-relaxed">
                      <span className="text-[#C9A882] shrink-0 mt-0.5">✦</span>
                      <span>
                        <strong className="font-semibold">{b.title} :</strong>{' '}
                        <span className="text-[#6B6B65]">{b.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Prix + CTA */}
                <div className="border-t border-[#E8E5DF] pt-6 flex items-center justify-between gap-4">
                  <p className="font-[family-name:var(--font-cormorant)] font-normal text-[44px] leading-none text-[#1A1A18]">
                    490€
                  </p>
                  <Link
                    href={`/formations/${f.slug}`}
                    className="bg-[#1A1A18] text-white text-[11px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#C9A882] transition-colors duration-300"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  )
}

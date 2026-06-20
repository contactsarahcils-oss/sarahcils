import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

const formations = [
  {
    id: 'cil-a-cil',
    name: 'Cil à Cil',
    subtitle: 'Expert, formateur, évolutif',
    tag: 'Formation certifiante',
    bullets: [
      "Idéal pour te lancer dans le métier",
      "De la théorie à la pratique sur modèle",
      "Lancement professionnel",
    ],
    image: IMAGES.formationCilACil,
    href: '/formations/cil-a-cil',
  },
  {
    id: 'volume-russe',
    name: 'Volume Russe',
    subtitle: 'Technique, sophistiqué, intensif',
    tag: 'Formation avancée',
    bullets: [
      "Maîtrise des bouquets préfaits",
      "Pose sophistiquée, pratique intensive",
      "Accompagnement personnalisé",
    ],
    image: IMAGES.formationVolumeRusse,
    href: '/formations/volume-russe',
  },
]

export default function FormationsSection() {
  return (
    <section className="bg-[#FAFAF8] py-10 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-[12px] uppercase tracking-[0.15em] text-[#C9A882]">Se former avec Sarah</p>
        <h2 className="reveal font-[family-name:var(--font-cormorant)] font-normal text-[24px] md:text-[30px] leading-[1.15] mt-1.5">
          Une formation née de l&apos;expérience terrain
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {formations.map((f) => (
            <div key={f.id} className="reveal">
              {/* Image card */}
              <div className="relative rounded-xl overflow-hidden h-[360px]">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[40%] to-black/70" />
                {/* Badge top-left */}
                <span className="absolute top-3.5 left-3.5 bg-white/90 text-[#1A1A18] text-[10px] uppercase tracking-[0.08em] rounded-full px-3 py-1">
                  {f.tag}
                </span>
                {/* Caption bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[22px] font-medium text-white">{f.name}</h3>
                  <p className="text-[12px] text-white/80 mt-0.5">{f.subtitle}</p>
                </div>
              </div>

              {/* Bullets below image */}
              <ul className="mt-4 flex flex-col gap-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-[13px] text-[#6B6B65]">
                    <span className="text-[#C9A882] mt-0.5">•</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA underline style */}
              <Link
                href={f.href}
                className="inline-block mt-4 text-[#1A1A18] text-[12px] uppercase tracking-[0.12em] border-b border-[#C9A882] pb-0.5 hover:text-[#C9A882] transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

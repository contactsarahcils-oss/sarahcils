import type { Metadata } from 'next'
import Image from 'next/image'
import FaqAccordion from '@/components/formations/FaqAccordion'
import TallyEmbed from '@/components/ui/TallyEmbed'

export const metadata: Metadata = {
  title: 'Formation Volume Russe Marseille | Sarah Cils',
  description: 'Formation Volume Russe à Marseille. Niveau avancé. Éventails manuels, bouquets préfaits, mappings fox/cat eyes. 1 élève, suivi 2 mois. 490€.',
}

const faq = [
  { q: 'Dois-je venir avec un modèle ?', r: "Oui, pour la pratique de l'après-midi. Si tu ne peux pas, contacte-moi à l'avance." },
  { q: 'Puis-je exercer après la formation ?', r: "Oui. Cette formation te donne les bases nécessaires pour commencer ton activité. L'entraînement régulier est essentiel pour progresser." },
  { q: 'Y a-t-il des facilités de paiement ?', r: "Contacte-moi pour plus d'infos." },
]

const objectifs = [
  {
    num: '1',
    title: 'Maîtriser le Volume Russe',
    intro: '',
    bullets: [
      'Présentation des différents types de cils et effets possibles',
      'Apprentissage des méthodes de pose en volume',
      'Compréhension des rendus : naturel, intense, volumineux',
    ],
    quote: '',
  },
  {
    num: '2',
    title: 'Savoir poser avec précision',
    intro: '',
    bullets: [
      'Manipulation des pinces : gestion de la pression et régularité',
      'Création de bouquets manuels sur mesure',
      'Mapping personnalisé selon l\'effet : fox eyes, cat eyes, squirrel, etc.',
    ],
    quote: '',
  },
  {
    num: '3',
    title: 'Développer ton activité',
    intro: '',
    bullets: [
      'Pratique complète sur modèle avec corrections personnalisées',
      'Optimisation de ta communication digitale : feed, contenus, montages',
      'Conseils sur la fidélisation, revalorisation tarifaire et gestion planning',
    ],
    quote: "Tu repars prête à exercer, avec un plan d'action clair et un suivi de 2 mois.",
  },
]

const programme = [
  {
    label: 'Matinée — Théorie & Bases approfondies',
    items: [
      'Révision des fondamentaux : anatomie, bases cil à cil',
      'Morphologie & effets : courbures, longueurs, épaisseurs',
      'Hygiène & sécurité : protocoles professionnels',
      'Position & ergonomie : bons gestes pour travailler efficacement',
      'Volume russe : éventails manuels, bouquets préfaits, colles & produits',
      'Contre-indications & allergies',
    ],
  },
  {
    label: 'Après-midi — Pratique intensive',
    items: [
      'Exercices progressifs de précision et fluidité',
      "Entraînement sur tête d'entraînement : mapping, isolation, pose",
      'Travail sur modèle réel : analyse du regard, pose guidée, corrections',
    ],
  },
  {
    label: 'Bonus — Développement professionnel',
    items: [
      'Présence sur les réseaux : contenus cohérents et engageants',
      'Astuces montage & visibilité (Reels/Photos)',
      'Fidélisation, tarifs et gestion planning',
    ],
  },
]

const inclus = [
  'Kit de démarrage fourni',
  'Suivi personnalisé pendant 2 mois',
  'Certificat de réalisation remis en fin de journée',
  "Possibilité d'acheter du matériel sur place (dans la limite des stocks)",
]

export default function VolumeRussePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/dec4a3_e1bda5c8a0d74040b45a9799cca4e08c~mv2.png/v1/fill/w_1400,h_700,al_c,q_85,enc_avif,quality_auto/hero-volume-russe.png"
          alt="Formation Volume Russe Sarah Cils"
          fill priority className="object-cover" sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A882] mb-3">Formation avancée · 490 €</p>
          <h1 className="font-[family-name:var(--font-cormorant)] font-normal text-[32px] md:text-[52px] leading-[1.1]">Formation Volume Russe</h1>
          <p className="text-white/75 text-[13px] md:text-[15px] mt-4 max-w-lg mx-auto leading-relaxed">
            Tu maîtrises le cil à cil et tu veux passer à la vitesse supérieure ? Le volume russe est la technique la plus demandée.
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <div className="bg-[#F5F0E8] grid grid-cols-2 md:grid-cols-4">
        {[
          { icon: '📍', text: 'Marseille — Studio Beauté 12e' },
          { icon: '⏳', text: '1 jour — 9h30 à 18h' },
          { icon: '👤', text: '1 seule élève par session' },
          { icon: '🎓', text: 'Prérequis : formation cil à cil' },
        ].map((item) => (
          <div key={item.text} className="text-center py-5 px-4 border-r border-[#E8E5DF] last:border-r-0">
            <div className="text-xl mb-1">{item.icon}</div>
            <p className="text-[11px] text-[#6B6B65] leading-snug">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-[#FAFAF8]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="reveal">
            <h2 className="font-[family-name:var(--font-cormorant)] font-normal text-[26px] md:text-[34px] leading-[1.2] mb-5">
              Pourquoi choisir cette formation Volume Russe ?
            </h2>
            <p className="text-[14px] text-[#6B6B65] leading-[1.75] mb-5">
              Tu maîtrises déjà la technique du cil à cil et tu veux passer à la vitesse supérieure ? Le volume russe est une pose très demandée, plus intense, plus technique, qui te permettra d&apos;élargir ta clientèle et de sublimer encore davantage les regards.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Apprendre à créer des éventails manuellement, ou utiliser des bouquets pré-faits',
                'Adapter les mappings à la morphologie du regard',
                'Obtenir un rendu fourni, homogène et sophistiqué',
                'Perfectionner ton geste pour un travail rapide et net',
                'Booster ta visibilité sur les réseaux et développer ton activité',
              ].map((b) => (
                <li key={b} className="flex gap-2.5 text-[13px] text-[#6B6B65]">
                  <span className="text-[#C9A882] shrink-0 mt-0.5">•</span>{b}
                </li>
              ))}
            </ul>
          </div>
          {/* Programme */}
          <div className="reveal bg-[#F5F0E8] rounded-2xl p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-cormorant)] text-[20px] font-normal mb-5">Programme détaillé</h3>
            <div className="flex flex-col gap-5">
              {programme.map((p, i) => (
                <div key={i}>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#C9A882] mb-2">{p.label}</p>
                  <ul className="flex flex-col gap-1.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex gap-2 text-[12px] text-[#6B6B65]">
                        <span className="text-[#C9A882] shrink-0">•</span>{item}
                      </li>
                    ))}
                  </ul>
                  {i < programme.length - 1 && <div className="w-full h-px bg-[#E8E5DF] mt-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="reveal font-[family-name:var(--font-cormorant)] font-normal text-[26px] md:text-[34px] leading-[1.2] mb-10">
            3 objectifs pédagogiques
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {objectifs.map((o) => (
              <div key={o.num} className="reveal">
                <p className="font-[family-name:var(--font-cormorant)] text-[64px] leading-none text-[#E8E5DF] font-normal">{o.num}</p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-[20px] font-normal mt-2 mb-3">{o.title}</h3>
                {o.intro && <p className="text-[13px] text-[#6B6B65] leading-relaxed mb-3">{o.intro}</p>}
                <ul className="flex flex-col gap-2 mb-4">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-[12px] text-[#6B6B65]">
                      <span className="text-[#C9A882] shrink-0">•</span>{b}
                    </li>
                  ))}
                </ul>
                {o.quote && <p className="text-[12px] italic text-[#6B6B65] border-l-2 border-[#C9A882] pl-3">&ldquo;{o.quote}&rdquo;</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-[#1A1A18]">
        <div className="max-w-[800px] mx-auto reveal">
          <h2 className="font-[family-name:var(--font-cormorant)] font-normal text-[26px] md:text-[34px] leading-[1.2] text-white mb-8">
            Ce qui est inclus
          </h2>
          <ul className="flex flex-col gap-4">
            {inclus.map((item) => (
              <li key={item} className="flex gap-3 text-[13px] text-white/80 leading-relaxed">
                <span className="text-[#C9A882] text-lg shrink-0">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-[800px] mx-auto reveal">
          <h2 className="font-[family-name:var(--font-cormorant)] font-normal text-[26px] md:text-[34px] leading-[1.2] mb-8">
            Questions fréquentes
          </h2>
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-[#F5F0E8]">
        <div className="max-w-[800px] mx-auto reveal">
          <h2 className="font-[family-name:var(--font-cormorant)] font-normal text-[26px] md:text-[34px] leading-[1.2] mb-2">
            Tu es prête à te lancer ? 📩
          </h2>
          <p className="text-[13px] text-[#6B6B65] mb-8">
            Réserve ta place maintenant et fais le premier pas vers ta nouvelle carrière !
          </p>
          <TallyEmbed />
        </div>
      </section>
    </>
  )
}

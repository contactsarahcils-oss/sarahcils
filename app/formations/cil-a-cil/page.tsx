import type { Metadata } from 'next'
import Image from 'next/image'
import FaqAccordion from '@/components/formations/FaqAccordion'
import TallyEmbed from '@/components/ui/TallyEmbed'

export const metadata: Metadata = {
  title: 'Formation Cil à Cil Marseille | Sarah Cils',
  description: 'Formation extensions de cils cil à cil à Marseille. Débutante. 1 élève par session, kit inclus, suivi 2 mois. 490€. Studio Beauté 12e.',
}

const faq = [
  { q: 'Dois-je venir avec un modèle ?', r: "Oui, pour la pratique de l'après-midi. Si tu ne peux pas, contacte-moi à l'avance." },
  { q: 'Puis-je exercer après la formation ?', r: "Oui. Cette formation te donne les bases nécessaires pour commencer ton activité. L'entraînement régulier est essentiel pour progresser." },
  { q: 'Y a-t-il des facilités de paiement ?', r: "Contacte-moi pour plus d'infos." },
]

const objectifs = [
  {
    num: '1',
    title: 'Maîtriser les fondamentaux',
    intro: "Apprends à comprendre l'anatomie du cil naturel, à identifier les types de cils et à poser les bases de l'hygiène et de la sécurité.",
    bullets: [
      'Expliquer les principes de la pose cil à cil',
      'Choisir les courbures, longueurs et épaisseurs adaptées',
      'Installer un poste de travail professionnel',
    ],
    quote: "Un socle solide pour débuter sereinement dans le métier d'experte ciliaire.",
  },
  {
    num: '2',
    title: 'Savoir poser et conseiller',
    intro: "Tu apprendras à réaliser une pose naturelle, élégante et durable, tout en instaurant une relation de confiance avec ta cliente.",
    bullets: [
      'Réaliser une pose complète en toute sécurité',
      'Adapter ton mapping à chaque morphologie de regard',
      'Conseiller ta cliente et la fidéliser',
    ],
    quote: 'Un savoir-faire technique, mais aussi humain, pour construire une clientèle fidèle.',
  },
  {
    num: '3',
    title: 'Se lancer en toute confiance',
    intro: "L'objectif final de cette formation est de te rendre autonome et confiante.",
    bullets: [
      'Gérer une prestation de A à Z, de l\'accueil au retrait',
      'Comprendre les bases du statut auto-entrepreneur',
      "Oser te lancer grâce à un accompagnement post-formation",
    ],
    quote: "Tu repars prête à exercer, avec un plan d'action clair et un suivi de 2 mois.",
  },
]

const contenu = [
  'Anatomie du cil naturel, règles d\'hygiène et sécurité',
  'Choisir les courbures, longueurs et épaisseurs adaptées',
  'Préparer ton poste de travail et ta cliente efficacement',
  'Réaliser un mapping de base personnalisé selon le regard',
  'Adapter ta pose à chaque morphologie de cliente',
  'Démonstration en direct, suivie de ta première pose complète sur modèle',
  'Astuces pro pour un résultat propre et durable',
  'Se lancer via les réseaux sociaux',
  'Bases du statut auto-entrepreneur',
]

const inclus = [
  'Kit de démarrage fourni',
  'Suivi personnalisé pendant 2 mois',
  'Certificat de réalisation remis en fin de journée',
  'Possibilité d\'acheter du matériel sur place (dans la limite des stocks)',
]

export default function CilACilPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/dec4a3_4dfaaa376999465c887cc188ab7110e0~mv2.png/v1/fill/w_1400,h_700,al_c,q_85,enc_avif,quality_auto/hero-cil-a-cil.png"
          alt="Formation Cil à Cil Sarah Cils"
          fill priority className="object-cover" sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C9A882] mb-3">FORMATION DEBUTANTE · 490 €</p>
          <h1 className="font-[family-name:var(--font-cormorant)] font-normal text-[32px] md:text-[52px] leading-[1.1]">Formation Cil à Cil</h1>
          <p className="text-white/75 text-[13px] md:text-[15px] mt-4 max-w-lg mx-auto leading-relaxed">
            Idéale pour les débutantes. Acquiers des bases solides et une technique professionnelle.
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <div className="bg-[#F5F0E8] grid grid-cols-2 md:grid-cols-4">
        {[
          { icon: '📍', text: 'Marseille — Studio Beauté 12e' },
          { icon: '⏳', text: '1 jour — 9h30 à 18h30' },
          { icon: '👤', text: '1 seule élève par session' },
          { icon: '🎓', text: 'Aucun prérequis' },
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
              Pourquoi choisir cette formation cil à cil ?
            </h2>
            <p className="text-[14px] text-[#6B6B65] leading-[1.75] mb-5">
              Cette formation cil à cil, idéale pour les débutantes, permet d&apos;acquérir des bases solides et une technique professionnelle, avec un accompagnement étape par étape, au sein de mon studio situé à Marseille.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Une seule élève par session pour un accompagnement ultra personnalisé',
                "Un suivi de 2 mois après la formation pour t'aider à te perfectionner",
                'Des conseils concrets pour te lancer comme auto-entrepreneuse dans la beauté',
              ].map((b) => (
                <li key={b} className="flex gap-2.5 text-[13px] text-[#6B6B65]">
                  <span className="text-[#C9A882] shrink-0 mt-0.5">•</span>{b}
                </li>
              ))}
            </ul>
          </div>
          {/* Programme journée */}
          <div className="reveal bg-[#F5F0E8] rounded-2xl p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-cormorant)] text-[20px] font-normal mb-5">Programme de la journée</h3>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#C9A882] mb-1">Matin — 9h30 / 12h30</p>
                <p className="text-[13px] text-[#6B6B65]">Théorie + démonstration par la formatrice</p>
              </div>
              <div className="w-full h-px bg-[#E8E5DF]" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#C9A882] mb-1">Après-midi — 13h30 / 18h30</p>
                <p className="text-[13px] text-[#6B6B65]">Pratique sur poupée et modèle + débrief personnalisé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs pédagogiques */}
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
                <p className="text-[13px] text-[#6B6B65] leading-relaxed mb-3">{o.intro}</p>
                <ul className="flex flex-col gap-2 mb-4">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-[12px] text-[#6B6B65]">
                      <span className="text-[#C9A882] shrink-0">•</span>{b}
                    </li>
                  ))}
                </ul>
                <p className="text-[12px] italic text-[#6B6B65] border-l-2 border-[#C9A882] pl-3">&ldquo;{o.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu complet */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-[#FAFAF8]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10">
          <div className="reveal">
            <h2 className="font-[family-name:var(--font-cormorant)] font-normal text-[26px] md:text-[32px] leading-[1.2] mb-6">
              Contenu de la formation
            </h2>
            <ul className="flex flex-col gap-3">
              {contenu.map((c) => (
                <li key={c} className="flex gap-2.5 text-[13px] text-[#6B6B65] leading-relaxed">
                  <span className="text-[#C9A882] shrink-0">→</span>{c}
                </li>
              ))}
            </ul>
          </div>
          {/* Ce qui est inclus */}
          <div className="reveal bg-[#1A1A18] rounded-2xl p-6 md:p-8 text-white">
            <h2 className="font-[family-name:var(--font-cormorant)] font-normal text-[26px] md:text-[32px] leading-[1.2] mb-6">
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

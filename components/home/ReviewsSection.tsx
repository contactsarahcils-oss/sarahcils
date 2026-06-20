'use client'

import { useState } from 'react'

const REVIEWS = [
  {
    text: "Très bon accueil, travail soigné et pose de cils au top avec une excellente tenue. Douce, à l'écoute et professionnelle, le résultat est magnifique. Je recommande sans hésiter !",
    date: "13/12/2025",
  },
  {
    text: "La meilleure et la plus belle estheticienne c'est sarah j'ai des petits vraiment petits cils et elle arrive avec me les faire tj aussi beau elle a des mains de fée je vous la recommande",
    date: "19/04/2026",
  },
  {
    text: "Institut au top, toujours bien reçue Sarah et Nawel sont adorable. Leur travail est parfait, je les recommande les yeux fermés !",
    date: "14/01/2026",
  },
  {
    text: "Accueil, gentillesse, propreté parfaite ! Je recommande à 100%. Première prestation qui me plaît et qui tient !! Merci 🙌",
    date: "20/12/2025",
  },
  {
    text: "Clairement la meilleure comme d'habitude ❤️",
    date: "27/05/2026",
  },
  {
    text: "Tout parfait !!!! Très pro et minutieuse. Au top comme toujours.",
    date: "30/04/2026",
  },
  {
    text: "Au top, bien accueillie comme d'habitude. Un travail propre et minutieux.",
    date: "29/04/2026",
  },
  {
    text: "Parfait jamais déçu depuis des années.",
    date: "19/03/2026",
  },
  {
    text: "Pose incroyable comme d'habitude 🙌",
    date: "11/01/2026",
  },
  {
    text: "Bravo Sara et Nawel vous êtes au top 😘",
    date: "17/12/2025",
  },
  {
    text: "La meilleur du monde !",
    date: "09/04/2026",
  },
  {
    text: "Parfait comme d'habitude.",
    date: "19/03/2026",
  },
]

const STARS = '★★★★★'

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0)
  const featured = REVIEWS[current]

  return (
    <section className="bg-[#1A1A18] py-14 md:py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#C9A882] mb-3">Elles nous font confiance</p>
          <p className="font-[family-name:var(--font-cormorant)] text-[40px] md:text-[56px] font-normal text-white leading-none">
            +200 avis
          </p>
          <p className="text-[#C9A882] tracking-[4px] text-[18px] mt-2">★★★★★</p>
        </div>

        {/* Avis featured (grand) */}
        <div className="reveal max-w-[780px] mx-auto text-center mb-10">
          <p className="font-[family-name:var(--font-cormorant)] italic text-[22px] md:text-[30px] text-white leading-[1.45]">
            &ldquo;{featured.text}&rdquo;
          </p>
          <p className="text-[#C9A882] mt-1.5 tracking-[3px] text-[13px]">{STARS}</p>
          <p className="text-[11px] uppercase tracking-[0.1em] text-white/40 mt-3">{featured.date}</p>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mb-12 reveal">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Avis ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#C9A882] w-4' : 'bg-white/25'}`}
            />
          ))}
        </div>

        {/* Grille des autres avis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
          {REVIEWS.filter((_, i) => i !== current).slice(0, 3).map((r, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl p-5 cursor-pointer hover:border-[#C9A882]/50 transition-colors duration-300"
              onClick={() => setCurrent(REVIEWS.indexOf(r))}
            >
              <p className="text-[#C9A882] tracking-[2px] text-[11px] mb-3">{STARS}</p>
              <p className="font-[family-name:var(--font-cormorant)] italic text-[15px] text-white/80 leading-[1.5]">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-[10px] text-white/30 mt-3 uppercase tracking-[0.08em]">{r.date}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

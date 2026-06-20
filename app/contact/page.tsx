import type { Metadata } from 'next'
import TallyEmbed from '@/components/ui/TallyEmbed'

export const metadata: Metadata = {
  title: 'Contact — Sarah Cils Marseille',
  description: 'Contactez Sarah Cils pour vos questions produits, formations ou réservations de prestations à Marseille.',
}

export default function ContactPage() {
  return (
    <div className="py-10 md:py-16 px-4 md:px-8 max-w-2xl mx-auto">

      <div className="text-center mb-8">
        <span className="text-[11px] uppercase tracking-widest text-[#C9A882]">Contact</span>
        <h1 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-4xl font-medium mt-2">Nous contacter</h1>
      </div>

      {/* Formulaire Tally */}
      <div className="mb-12">
        <TallyEmbed />
      </div>

      {/* Infos contact */}
      <div className="space-y-4">
        <div className="border border-[#E8E5DF] rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-cormorant)] text-lg font-medium mb-1">Studio Beauté</h2>
          <p className="text-sm text-[#6B6B65]">320 avenue des Poilus, 13012 Marseille</p>
        </div>

        <div className="border border-[#E8E5DF] rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-cormorant)] text-lg font-medium mb-1">Email</h2>
          <a href="mailto:sarahcils@gmail.com" className="text-sm text-[#C9A882] hover:underline">sarahcils@gmail.com</a>
        </div>

        <div className="border border-[#E8E5DF] rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-cormorant)] text-lg font-medium mb-1">Instagram</h2>
          <a href="https://www.instagram.com/saraahcils/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#C9A882] hover:underline">@saraahcils</a>
        </div>

        <div className="border border-[#E8E5DF] rounded-xl p-5">
          <h2 className="font-[family-name:var(--font-cormorant)] text-lg font-medium mb-1">Réservation</h2>
          <p className="text-sm text-[#6B6B65] mb-2">Pour les prestations en studio :</p>
          <a href="https://www.sarahcils.com/rendez-vous" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1A1A18] text-white text-sm font-medium px-4 py-2 hover:bg-[#C9A882] transition-colors">Prendre rendez-vous</a>
        </div>
      </div>

    </div>
  )
}

'use client'

export default function ContactForm({ subject }: { subject: string }) {
  return (
    <form
      action={`mailto:sarahcils@gmail.com?subject=${encodeURIComponent(subject)}`}
      method="post"
      encType="text/plain"
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div>
        <label className="block text-[11px] uppercase tracking-[0.1em] text-[#6B6B65] mb-1.5">Prénom *</label>
        <input required name="prenom" type="text" className="w-full border border-[#E8E5DF] bg-white px-3 py-2.5 text-[13px] text-[#1A1A18] focus:outline-none focus:border-[#C9A882] rounded-lg" />
      </div>
      <div>
        <label className="block text-[11px] uppercase tracking-[0.1em] text-[#6B6B65] mb-1.5">Nom *</label>
        <input required name="nom" type="text" className="w-full border border-[#E8E5DF] bg-white px-3 py-2.5 text-[13px] text-[#1A1A18] focus:outline-none focus:border-[#C9A882] rounded-lg" />
      </div>
      <div>
        <label className="block text-[11px] uppercase tracking-[0.1em] text-[#6B6B65] mb-1.5">E-mail *</label>
        <input required name="email" type="email" className="w-full border border-[#E8E5DF] bg-white px-3 py-2.5 text-[13px] text-[#1A1A18] focus:outline-none focus:border-[#C9A882] rounded-lg" />
      </div>
      <div>
        <label className="block text-[11px] uppercase tracking-[0.1em] text-[#6B6B65] mb-1.5">Téléphone *</label>
        <input required name="tel" type="tel" className="w-full border border-[#E8E5DF] bg-white px-3 py-2.5 text-[13px] text-[#1A1A18] focus:outline-none focus:border-[#C9A882] rounded-lg" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-[11px] uppercase tracking-[0.1em] text-[#6B6B65] mb-1.5">Message</label>
        <textarea name="message" rows={4} placeholder="Ajouter un message" className="w-full border border-[#E8E5DF] bg-white px-3 py-2.5 text-[13px] text-[#1A1A18] focus:outline-none focus:border-[#C9A882] rounded-lg resize-none" />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="bg-[#1A1A18] text-white text-[11px] uppercase tracking-[0.18em] px-8 py-3 hover:bg-[#C9A882] transition-colors duration-300">
          Envoyer
        </button>
      </div>
    </form>
  )
}

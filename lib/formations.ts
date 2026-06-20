export interface Formation {
  id: string
  name: string
  tag: string
  description: string
  image: string
  wixUrl: string
}

export const FORMATIONS: Formation[] = [
  {
    id: "cil-a-cil",
    name: "Cil à Cil",
    tag: "Formation certifiante",
    description: "Idéal pour te lancer dans le métier. De la théorie à la pratique sur modèle. Bases solides garanties.",
    image: "formationCilACil",
    wixUrl: "https://www.sarahcils.com/copie-de-formations",
  },
  {
    id: "volume-russe",
    name: "Volume Russe",
    tag: "Formation avancée",
    description: "Maîtrise des bouquets, pose sophistiquée, pratique intensive. Avec accompagnement personnalisé.",
    image: "formationVolumeRusse",
    wixUrl: "https://www.sarahcils.com/copie-de-formation-2",
  },
]

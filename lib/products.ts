import type { IMAGES } from './images'

export interface Product {
  id: string
  name: string
  subtitle: string
  badge: string
  price: string
  image: keyof typeof IMAGES['products']
  wixUrl: string
}

export const PRODUCTS: Product[] = [
  {
    id: "la-colle",
    name: "LA COLLE",
    subtitle: "Sarah Cils",
    badge: "BEST SELLER",
    price: "28,00 €",
    image: "laColle",
    wixUrl: "https://www.sarahcils.com/product-page/colle",
  },
  {
    id: "colle-first",
    name: "COLLE FIRST",
    subtitle: "",
    badge: "Nouveauté",
    price: "24,99 €",
    image: "colleFirst",
    wixUrl: "https://www.sarahcils.com/product-page/colle-first-sarah-cils",
  },
  {
    id: "colle-middle",
    name: "COLLE MIDDLE",
    subtitle: "Sarah Cils",
    badge: "Nouveauté",
    price: "25,00 €",
    image: "colleMiddle",
    wixUrl: "https://www.sarahcils.com/product-page/colle-middle-sarah-cils",
  },
  {
    id: "primer-cils",
    name: "PRIMER CILS",
    subtitle: "Liquide",
    badge: "",
    price: "15,99 €",
    image: "primerCils",
    wixUrl: "https://www.sarahcils.com/product-page/primer-cils-liquide-sarah-cils",
  },
  {
    id: "bouquets-palette",
    name: "BOUQUETS PRÉFAITS PALETTE",
    subtitle: "",
    badge: "",
    price: "25,00 €",
    image: "bouquetsPalette",
    wixUrl: "https://www.sarahcils.com/product-page/bouquets-pr%C3%A9faits-palette",
  },
  {
    id: "bouquets-10d",
    name: "BOUQUETS PRÉFAITS 10D 0.07",
    subtitle: "Vrac 500 bqts",
    badge: "",
    price: "24,99 €",
    image: "bouquets10d",
    wixUrl: "https://www.sarahcils.com/product-page/bouquets-pr%C3%A9faits-10-courbure-d-sarah-cils",
  },
  {
    id: "volume-russe",
    name: "VOLUME RUSSE C/D 0.05",
    subtitle: "Taille unique",
    badge: "Nouveauté",
    price: "14,99 €",
    image: "volumeRusse",
    wixUrl: "https://www.sarahcils.com/product-page/cils-volume-russe-c-d-0-05-taille-unique",
  },
  {
    id: "cil-a-cil-classique",
    name: "CIL À CIL CLASSIQUE D",
    subtitle: "Taille unique",
    badge: "Nouveauté",
    price: "14,99 €",
    image: "cilACilClassique",
    wixUrl: "https://www.sarahcils.com/product-page/cil-%C3%A0-cil-classique-courbure-d-effet-mascara",
  },
]
